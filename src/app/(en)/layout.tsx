import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/index.css";
import { Shell } from "@/components/layout/Shell";
import { fontVariables } from "@/lib/fonts";
import { baseMetadata, baseViewport } from "@/lib/metadata";

export const metadata: Metadata = baseMetadata("en");
export const viewport = baseViewport;

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <Shell locale="en">{children}</Shell>
      </body>
    </html>
  );
}
