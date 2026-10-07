import type { MetadataRoute } from "next";
import { absoluteUrl, routes } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const bilingual = (page: "home" | "civil", priority: number): MetadataRoute.Sitemap =>
    (["es", "en"] as const).map((locale) => ({
      url: absoluteUrl(routes[locale][page]),
      lastModified,
      changeFrequency: "monthly",
      priority,
      alternates: {
        languages: {
          "es-MX": absoluteUrl(routes.es[page]),
          en: absoluteUrl(routes.en[page]),
        },
      },
    }));

  return [
    ...bilingual("home", 1),
    ...bilingual("civil", 0.8),
    { url: absoluteUrl(routes.es.privacy), lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
