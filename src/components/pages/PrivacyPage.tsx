import { SiteLink as Link } from "@/components/ui/SiteLink";
import { getDict } from "@/content";
import { breadcrumbSchema } from "@/lib/schema";
import { routes } from "@/lib/site";
import { JsonLd } from "@/components/ui/JsonLd";

/** Spanish-only legal page: it is rendered with the Spanish dictionary. */
export function PrivacyPage() {
  const d = getDict("es");
  const p = d.privacy;
  const home = routes.es.home;

  return (
    <main id="main" className="page">
      <section className="page-hero" aria-labelledby="privacy-title">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href={home}>{d.civil.breadcrumbHome}</Link>
              </li>
              <li aria-current="page">{p.breadcrumbCurrent}</li>
            </ol>
          </nav>
          <div className="page-hero__grid">
            <p className="eyebrow">
              {p.eyebrow}
            </p>
            <h1 id="privacy-title" className="page-hero__title">
              {p.title}
            </h1>
            <p className="updated">{p.updated}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose">
            {p.sections.map((s) => (
              <section key={s.title}>
                <h2>{s.title}</h2>
                {s.paragraphs.map((para) => (
                  <p key={para}>{para}</p>
                ))}
                {s.bullets && (
                  <ul>
                    {s.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: d.civil.breadcrumbHome, path: home },
          { name: p.breadcrumbCurrent, path: routes.es.privacy },
        ])}
      />
    </main>
  );
}
