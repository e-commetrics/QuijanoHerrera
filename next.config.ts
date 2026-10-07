import type { NextConfig } from "next";

// Static export: `next build` writes the deployable site to /out (see README.md
// and DEPLOY_NEXTJS.md). A static site has no server, so there are no rewrites,
// redirects or headers here; the equivalents live in public/.htaccess (cPanel).
const nextConfig: NextConfig = {
  output: "export",
  // /derecho-civil/ -> out/derecho-civil/index.html. Works on any static host
  // (Apache/cPanel included) without rewrite rules.
  trailingSlash: true,
  // The default image optimizer needs a server. Images are pre-optimized at
  // build time by scripts/build-images.mjs instead.
  images: { unoptimized: true },
  reactStrictMode: true,
  // Two root layouts (<html lang="es"> and <html lang="en">) need an explicit
  // global 404 (src/app/global-not-found.tsx).
  experimental: { globalNotFound: true },
};

export default nextConfig;
