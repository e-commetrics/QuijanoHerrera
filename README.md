# Quijano Herrera Abogados — website

Bilingual (ES/EN) marketing site for **Quijano Herrera Abogados**, civil-law attorneys in
Tijuana, B.C. Next.js 16 (App Router), React 19, TypeScript, plain CSS. Built as a
**static export** (`output: 'export'`), so it deploys to **cPanel** (see `DEPLOY_NEXTJS.md`
§7, "Static version") or any static host.

No backend, no database, no secrets. The contact form hands the visitor's message to
WhatsApp or their mail app; nothing is stored.

## Quick start

Package manager: **Bun first, then pnpm/yarn. Never npm** (`DEPLOY_NEXTJS.md` §2).

```bash
bun install            # or: pnpm install
cp .env.example .env   # set NEXT_PUBLIC_SITE_URL (see below)
bun run dev            # http://localhost:3000
```

| Command | What it does |
|---|---|
| `dev` | Dev server |
| `build` | Static export to `out/` |
| `lint` | ESLint (must pass before every deploy) |
| `typecheck` | `tsc --noEmit` |
| `images` | Rebuild optimized images from the brand folder (see below) |

> **Note (Windows):** Bun 1.4.2 produced empty `node_modules` folders on the machine this
> was built on, so the committed lockfile is `pnpm-lock.yaml`. On a machine where Bun works
> you may use it; keep one lockfile in the repo.

## Environment

`NEXT_PUBLIC_SITE_URL` — public URL, **no trailing slash**. It feeds canonical URLs,
`sitemap.xml`, `robots.txt`, Open Graph and schema.org data. It is baked in at build time, so
set the **production** URL in `.env` *before* `build`. `NEXT_PUBLIC_*` values are public;
never put secrets there.

## Deploy to cPanel (static)

1. `.env` has the production `NEXT_PUBLIC_SITE_URL`.
2. `bun run lint && bun run build`
3. Zip the **contents** of `out/` (not the folder itself, and include the hidden `.htaccess`).
4. cPanel → File Manager → the site's folder → back up the current files → upload the zip → Extract.
5. Check that `index.html` sits directly in that folder, then open the live site: `/`, `/en/`,
   `/derecho-civil/`, `/aviso-de-privacidad/`, a bad URL (404), and `/sitemap.xml`.

`public/.htaccess` (copied into `out/`) adds security headers, compression, caching and the
custom 404. After SSL is active, uncomment the HTTPS redirect block in it.

## Where things live

```
src/content/es.ts   Spanish copy (source of truth; defines the Dict type)
src/content/en.ts   English copy (must match es.ts keys: the build fails otherwise)
src/lib/site.ts     Phone, email, address, founders, routes
src/styles/         Design tokens + CSS (tokens.css is the design system)
src/components/     home/ (sections), layout/, contact/, ui/, pages/
src/app/(es)        Spanish root layout + pages
src/app/(en)/en     English root layout + pages
public/img          Generated images (do not edit by hand)
scripts/            build-images.mjs
```

Two root layouts exist so each language's static HTML has the correct `<html lang>`. The
global 404 is `src/app/global-not-found.tsx`.

### Editing content

- Change wording in `src/content/es.ts` and `en.ts`. Keep **claims verifiable**: no
  testimonials, results, awards or credentials unless the firm can document them, and no
  guarantees of outcome.
- **Testimonials:** add real, publishable quotes to `testimonials.items`; the section appears
  automatically. While the list is empty the section does not render.
- Office hours (`contact.hours`) are a placeholder until the firm confirms them.

### Images

Sources are not in the repo (large, client-owned). `pnpm images` reads the brand folder
(`QH_ASSETS_DIR`, default points to the OneDrive brand kit) and writes AVIF/WebP renditions,
trimmed logos, favicons and the OG image. Commit the generated `public/img`, `public/og`,
`src/app/icon.png`, `src/app/apple-icon.png` and `src/lib/images.generated.json`.

## Security notes

- `.env` is git-ignored; `.env.example` is committed with placeholder-safe values.
- Static export: everything in `out/` is public. Upload only the contents of `out/`.
- The footer address links to Google Maps (opens in a new tab); no third-party scripts load on the page.
- No cookies, analytics or trackers are installed (the privacy notice says so; update it if
  that changes).
