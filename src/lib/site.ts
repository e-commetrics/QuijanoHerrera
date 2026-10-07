// Non-translatable facts about the firm. Translatable copy lives in src/content.

export type Locale = "es" | "en";
export type PageKey = "home" | "civil" | "privacy";

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://quijanoherrera.mx").replace(/\/+$/, "");

export const site = {
  name: "Quijano Herrera Abogados",
  shortName: "Quijano Herrera",
  phone: { display: "+52 664 193 2595", tel: "+526641932595", whatsapp: "526641932595" },
  email: "despacho@quijanoherrera.com",
  address: {
    street: "Luis Cabrera 1509-406",
    neighborhood: "Zona Urbana Río Tijuana",
    city: "Tijuana",
    region: "Baja California",
    regionCode: "B.C.",
    postalCode: "22320",
    country: "MX",
  },
  geo: { lat: 32.5242459, lng: -117.0196534 },
  // Google Maps place link supplied by the client
  mapsUrl: "https://maps.app.goo.gl/y2sQDQg3w7QSxqLR6",
  founders: ["José Manuel Herrera Islas", "Luis Quijano del Mar"],
  yearsOfPractice: 15,
} as const;

/** Route table. Spanish is the default (no prefix); English lives under /en. */
export const routes: Record<Locale, Record<PageKey, string>> = {
  es: { home: "/", civil: "/derecho-civil/", privacy: "/aviso-de-privacidad/" },
  // The privacy notice is a legal document in Spanish only.
  en: { home: "/en/", civil: "/en/civil-law/", privacy: "/aviso-de-privacidad/" },
};

export const otherLocale = (l: Locale): Locale => (l === "es" ? "en" : "es");

/** Where the language switch should send you from a given page. */
export function switchHref(locale: Locale, page: PageKey): string {
  const target = otherLocale(locale);
  if (page === "privacy") return routes[target].home;
  return routes[target][page];
}

export const absoluteUrl = (path: string) => `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.phone.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const telLink = `tel:${site.phone.tel}`;
export const mailLink = (subject?: string, body?: string) => {
  const params = [subject && `subject=${encodeURIComponent(subject)}`, body && `body=${encodeURIComponent(body)}`]
    .filter(Boolean)
    .join("&");
  return `mailto:${site.email}${params ? `?${params}` : ""}`;
};
