import type { Metadata } from "next";
import "@/styles/index.css";
import { fontVariables } from "@/lib/fonts";
import { getDict } from "@/content";

// Rendered for any URL that matches no route (static export writes /404.html).
// It bypasses the layouts, so styles and fonts are imported here.
export const metadata: Metadata = {
  title: "404 | Quijano Herrera Abogados",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  const es = getDict("es").notFound;
  const en = getDict("en").notFound;

  return (
    <html lang="es-MX" className={fontVariables}>
      <body>
        <main className="nf" id="main">
          <div className="container nf__inner">
            <p className="nf__code" aria-hidden>
              404
            </p>
            <h1 className="nf__title">{es.title}</h1>
            <p className="lead">{es.text}</p>
            <div className="nf__actions">
              {/* Plain anchors on purpose: this page renders outside the layouts and the router. */}
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/" className="btn btn--primary">
                {es.home}
              </a>
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a href="/#contacto" className="btn btn--outline">
                {es.contact}
              </a>
            </div>
            <p className="lead" lang="en" style={{ fontSize: "1rem" }}>
              {en.title}. <a className="text-link" href="/en/">{en.home}</a>
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
