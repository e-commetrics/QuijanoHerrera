import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/index.css";
import { Shell } from "@/components/layout/Shell";
import { fontVariables } from "@/lib/fonts";
import { baseMetadata, baseViewport } from "@/lib/metadata";

// Root layout for the Spanish site. English has its own root layout so that
// <html lang> is correct in the static HTML of every page.
export const metadata: Metadata = baseMetadata("es");
export const viewport = baseViewport;

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es-MX" className={fontVariables}>
      <body>
        <Shell locale="es">{children}</Shell>
      </body>
    </html>
  );
}
