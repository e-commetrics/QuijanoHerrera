// Build-time image pipeline.
//
// The site is a static export (`output: 'export'`), which cannot use Next's
// default image optimizer. This script produces every image the site needs:
//   - public/img/<name>-<width>.avif|webp   responsive photo renditions
//   - public/img/logo-*.png                 trimmed brand logos
//   - public/og/og-image.jpg                1200x630 social share image
//   - src/app/icon.png, apple-icon.png      favicons
//   - src/lib/images.generated.json         manifest (sizes + blur placeholders)
//
// Source files live in the client's brand folder (not committed). Point
// QH_ASSETS_DIR at it if it moves:
//   QH_ASSETS_DIR="D:/brand/Quijano Herrera Abogados" pnpm images
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC =
  process.env.QH_ASSETS_DIR ??
  "C:/Users/user/OneDrive/Documentos/Ecommetrica/Quijano Herrera abogados/Quijano Herrera Abogados";

const IMG_OUT = path.join(ROOT, "public", "img");
const OG_OUT = path.join(ROOT, "public", "og");
const APP_DIR = path.join(ROOT, "src", "app");
const MANIFEST = path.join(ROOT, "src", "lib", "images.generated.json");

const GRAPHICS = "Assets Graficos";

// name -> source file + the widths we ship (never upscaled)
const PHOTOS = [
  { name: "hero-justice", file: `${GRAPHICS}/pexels-pavel-danilyuk-8111818.jpg`, widths: [480, 720, 1080] },
  { name: "litigation", file: `${GRAPHICS}/pexels-pavel-danilyuk-8112107.jpg`, widths: [640, 960, 1440] },
  { name: "contracts", file: `${GRAPHICS}/pexels-kampus-production-8428076.jpg`, widths: [640, 960, 1440] },
  { name: "property", file: `${GRAPHICS}/pexels-pavel-danilyuk-8112121.jpg`, widths: [480, 720, 1080] },
  { name: "precautionary", file: `${GRAPHICS}/pexels-ekaterina-bolovtsova-6077961.jpg`, widths: [480, 720, 1080] },
  { name: "negotiation", file: `${GRAPHICS}/pexels-pavel-danilyuk-8112172.jpg`, widths: [640, 960, 1440] },
  { name: "document", file: `${GRAPHICS}/pexels-olha-ruskykh-7504780.jpg`, widths: [480, 720, 1080] },
  { name: "facade", file: "Fachada_Mockup_QHAbogados.jpg", widths: [640, 960, 1440] },
  { name: "textured", file: "LogoTexturizado_Mockup_QHAbogados.jpg", widths: [800, 1280, 1920] },
];

const LOGOS = [
  // horizontal lockup, gold monogram + cream wordmark (for dark backgrounds)
  { name: "logo-h", file: "Logos/QH Abogados_Logos-03.png", height: 132 },
  // gold monogram only
  { name: "mark-gold", file: "Logos/QH Abogados_Logos-04.png", height: 360 },
];

const manifest = {};

async function ensure(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function lqip(input) {
  const buf = await sharp(input).rotate().resize(24).blur(1.2).webp({ quality: 40 }).toBuffer();
  return `data:image/webp;base64,${buf.toString("base64")}`;
}

async function buildPhoto({ name, file, widths }) {
  const input = path.join(SRC, file);
  const base = sharp(input).rotate();
  const raw = await sharp(input).metadata();
  // EXIF orientations 5-8 are rotated 90deg: swap so we reason in display orientation
  const swapped = (raw.orientation ?? 1) >= 5;
  const meta = { width: swapped ? raw.height : raw.width, height: swapped ? raw.width : raw.height };
  const aspect = meta.height / meta.width;
  const usable = widths.filter((w) => w <= meta.width);
  const shipped = usable.length ? usable : [Math.min(...widths)];

  for (const w of shipped) {
    const pipeline = base.clone().resize({ width: w, withoutEnlargement: true });
    await pipeline.clone().avif({ quality: 52, effort: 5 }).toFile(path.join(IMG_OUT, `${name}-${w}.avif`));
    await pipeline.clone().webp({ quality: 74, effort: 5 }).toFile(path.join(IMG_OUT, `${name}-${w}.webp`));
  }

  const largest = Math.max(...shipped);
  manifest[name] = {
    widths: shipped,
    width: largest,
    height: Math.round(largest * aspect),
    lqip: await lqip(input),
  };
  console.log(`  photo  ${name.padEnd(14)} ${shipped.join(", ")} (${largest}x${manifest[name].height})`);
}

async function buildLogo({ name, file, height }) {
  const input = path.join(SRC, file);
  const trimmed = await sharp(input).trim().toBuffer();
  const out = path.join(IMG_OUT, `${name}.png`);
  const info = await sharp(trimmed)
    .resize({ height, withoutEnlargement: true })
    .png({ compressionLevel: 9, palette: true, quality: 90 })
    .toFile(out);
  manifest[name] = { width: info.width, height: info.height };
  console.log(`  logo   ${name.padEnd(14)} ${info.width}x${info.height}`);
}

async function buildIcons() {
  const mark = await sharp(path.join(SRC, "Logos/QH Abogados_Logos-04.png")).trim().toBuffer();
  const make = async (size, file) => {
    const inner = Math.round(size * 0.66);
    const glyph = await sharp(mark).resize({ width: inner, height: inner, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).toBuffer();
    await sharp({ create: { width: size, height: size, channels: 4, background: "#1c1c1c" } })
      .composite([{ input: glyph, gravity: "center" }])
      .png({ compressionLevel: 9 })
      .toFile(path.join(APP_DIR, file));
    console.log(`  icon   ${file} ${size}x${size}`);
  };
  await make(512, "icon.png");
  await make(180, "apple-icon.png");
}

async function buildOg() {
  // The textured brand mockup already is a branded card: crop it to 1.91:1.
  const input = path.join(SRC, "LogoTexturizado_Mockup_QHAbogados.jpg");
  const meta = await sharp(input).metadata();
  const cropH = Math.round(meta.width / 1.91);
  const top = Math.max(0, Math.round(meta.height * 0.5 - cropH * 0.5));
  await sharp(input)
    .extract({ left: 0, top, width: meta.width, height: Math.min(cropH, meta.height - top) })
    .resize(1200, 630)
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(OG_OUT, "og-image.jpg"));
  console.log("  og     og-image.jpg 1200x630");
}

await Promise.all([ensure(IMG_OUT), ensure(OG_OUT), ensure(APP_DIR), ensure(path.dirname(MANIFEST))]);

console.log(`Source: ${SRC}`);
for (const p of PHOTOS) await buildPhoto(p);
for (const l of LOGOS) await buildLogo(l);
await buildIcons();
await buildOg();

await fs.writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Manifest written: ${path.relative(ROOT, MANIFEST)}`);
