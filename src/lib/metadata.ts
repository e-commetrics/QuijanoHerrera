import type { Metadata, Viewport } from "next";
import { getDict } from "@/content";
import { SITE_URL, absoluteUrl, routes, site, type Locale, type PageKey } from "./site";

const OG_IMAGE = { url: "/og/og-image.jpg", width: 1200, height: 630 };

const ogLocale: Record<Locale, string> = { es: "es_MX", en: "en_US" };

/** Site-wide defaults, set once per root layout. */
export function baseMetadata(locale: Locale): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    applicationName: site.name,
    authors: site.founders.map((name) => ({ name })),
    creator: site.name,
    publisher: site.name,
    formatDetection: { telephone: true, email: true, address: true },
    robots: { index: true, follow: true },
    openGraph: { siteName: site.name, locale: ogLocale[locale], type: "website" },
  };
}

export const baseViewport: Viewport = {
  themeColor: "#121110",
  colorScheme: "dark light",
  width: "device-width",
  initialScale: 1,
};

/**
 * Per-page metadata: title, description, canonical, hreflang alternates, Open
 * Graph and Twitter cards. Pages that exist in both languages declare
 * alternates; the privacy notice (Spanish only) does not.
 */
export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const d = getDict(locale).meta;
  const { title, description } = d[page];
  const path = routes[locale][page];
  const bilingual = page !== "privacy";

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: path,
      ...(bilingual && {
        languages: {
          "es-MX": absoluteUrl(routes.es[page]),
          en: absoluteUrl(routes.en[page]),
          "x-default": absoluteUrl(routes.es[page]),
        },
      }),
    },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: ogLocale[locale],
      type: "website",
      images: [{ ...OG_IMAGE, alt: d.ogAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}
