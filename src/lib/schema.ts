import type { Dict } from "@/content";
import { SITE_URL, absoluteUrl, routes, site, type Locale } from "./site";

// schema.org structured data. Only facts we can stand behind: no ratings,
// reviews, awards, opening hours or social profiles (none were supplied).

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

export function siteGraph(locale: Locale, d: Dict) {
  const inLanguage = locale === "es" ? "es-MX" : "en";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": ORG_ID,
        name: site.name,
        url: absoluteUrl(routes[locale].home),
        logo: absoluteUrl("/icon.png"),
        image: absoluteUrl("/og/og-image.jpg"),
        description: d.meta.home.description,
        telephone: site.phone.tel,
        email: site.email,
        slogan: d.footer.tagline,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.regionCode,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
        hasMap: site.mapsUrl,
        areaServed: { "@type": "City", name: site.address.city },
        founder: site.founders.map((name) => ({ "@type": "Person", name })),
        knowsAbout: d.services.items.map((s) => s.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: d.services.eyebrow,
          itemListElement: d.services.items.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              description: s.what,
              provider: { "@id": ORG_ID },
              areaServed: { "@type": "City", name: site.address.city },
              url: absoluteUrl(`${routes[locale].civil}#${s.id}`),
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": SITE_ID,
        url: absoluteUrl(routes[locale].home),
        name: site.name,
        inLanguage,
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

export function faqSchema(d: Dict) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
