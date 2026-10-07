import { photo, type PhotoName } from "@/lib/images";

interface PictureProps {
  name: PhotoName;
  alt: string;
  /** CSS `sizes` hint so the browser downloads the smallest adequate file. */
  sizes: string;
  /** Above-the-fold images: eager, high fetch priority. Everything else lazy. */
  priority?: boolean;
  className?: string;
}

/**
 * Responsive image from the build-time pipeline (scripts/build-images.mjs):
 * AVIF first, WebP fallback, explicit dimensions (no layout shift) and a tiny
 * blurred placeholder painted while the real file loads.
 *
 * A plain <img> is intentional: next/image's optimizer needs a server, and this
 * site is a static export.
 */
export function Picture({ name, alt, sizes, priority = false, className }: PictureProps) {
  const meta = photo(name);
  const srcSet = (ext: "avif" | "webp") => meta.widths.map((w) => `/img/${name}-${w}.${ext} ${w}w`).join(", ");
  const fallbackWidth = meta.widths[Math.min(1, meta.widths.length - 1)];

  return (
    <picture>
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        src={`/img/${name}-${fallbackWidth}.webp`}
        width={meta.width}
        height={meta.height}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={className}
        style={{ backgroundImage: `url("${meta.lqip}")` }}
      />
    </picture>
  );
}
