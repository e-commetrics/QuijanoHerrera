import { SiteLink as Link } from "@/components/ui/SiteLink";
import { getDict } from "@/content";
import { Rich } from "@/lib/rich";
import { breadcrumbSchema } from "@/lib/schema";
import { routes, type Locale } from "@/lib/site";
import { ArrowRight } from "@/components/ui/Icons";
import { JsonLd } from "@/components/ui/JsonLd";
import { Picture } from "@/components/ui/Picture";

export function CivilLawPage({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const c = d.civil;
  const home = routes[locale].home;

  return (
    <main id="main" className="page">
      <section className="page-hero" aria-labelledby="civil-title">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href={home}>{c.breadcrumbHome}</Link>
              </li>
              <li aria-current="page">{c.breadcrumbCurrent}</li>
            </ol>
          </nav>
          <div className="page-hero__grid">
            <p className="eyebrow">
              {c.eyebrow}
            </p>
            <h1 id="civil-title" className="page-hero__title">
              {c.title}
            </h1>
            <p className="page-hero__standfirst">{c.standfirst}</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container civil-layout">
          <nav className="toc" aria-label={c.indexLabel}>
            <p className="toc__label">{c.indexLabel}</p>
            <ol>
              {c.areas.map((a) => (
                <li key={a.id}>
                  <a href={`#${a.id}`}>
                    <span>{a.n}</span>
                    {a.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div>
            <div className="civil-intro" data-reveal>
              {c.intro.map((p) => (
                <p key={p}>
                  <Rich text={p} />
                </p>
              ))}
            </div>

            <div style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}>
              {c.areas.map((a) => (
                <article className="area" id={a.id} key={a.id} data-reveal>
                  <div className="area__media frame frame--marks">
                    <Picture name={a.image} alt={a.imageAlt} sizes="(min-width: 1000px) 34vw, 92vw" />
                    <div className="shade" />
                  </div>
                  <div className="area__body">
                    <p className="area__n">{a.n}</p>
                    <h2 className="area__title">{a.title}</h2>
                    <p className="area__intro">
                      <Rich text={a.intro} />
                    </p>
                    <p className="area__bullets-label">{c.bulletsLabel}</p>
                    <ul className="bullets">
                      {a.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <p className="area__closing">
                      <Rich text={a.closing} />
                    </p>
                    <div>
                      {/* Plain anchor on purpose: a full load lets the contact form read ?tema= on mount. */}
                      <a href={`${home}?tema=${a.id}#contacto`} className="link-arrow">
                        {c.areaCta}
                        <ArrowRight />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--ink" aria-labelledby="civil-approach-title">
        <div className="container civil-approach">
          <div data-reveal>
            <p className="eyebrow">{c.approach.eyebrow}</p>
            <h2 id="civil-approach-title" className="civil-approach__title" style={{ marginTop: "1.5rem" }}>
              {c.approach.title}
            </h2>
          </div>
          <div className="civil-approach__body" data-reveal style={{ "--i": 1 } as React.CSSProperties}>
            {c.approach.paragraphs.map((p) => (
              <p key={p}>
                <Rich text={p} />
              </p>
            ))}
            <p className="civil-approach__closing">
              <Rich text={c.approach.closing} />
            </p>
            <p className="civil-approach__sign">{c.approach.signature}</p>
          </div>
        </div>
      </section>

      <section className="section section--ink-2 cta-section" aria-labelledby="civil-cta-title">
        <div className="container cta-band" data-reveal>
          <h2 id="civil-cta-title" className="cta-band__title">
            {c.cta.title}
          </h2>
          <p className="lead">{c.cta.text}</p>
          <Link href={`${home}#contacto`} className="btn btn--primary">
            {c.cta.button}
            <ArrowRight />
          </Link>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema([
          { name: c.breadcrumbHome, path: home },
          { name: c.breadcrumbCurrent, path: routes[locale].civil },
        ])}
      />
    </main>
  );
}
