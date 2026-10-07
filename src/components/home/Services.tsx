import { SiteLink as Link } from "@/components/ui/SiteLink";
import type { Dict } from "@/content";
import { routes, type Locale } from "@/lib/site";
import { Picture } from "@/components/ui/Picture";
import { ArrowRight } from "@/components/ui/Icons";

const SIZES = "(min-width: 900px) 55vw, 94vw";

export function Services({ locale, d }: { locale: Locale; d: Dict["services"] }) {
  const civil = routes[locale].civil;

  return (
    <section className="section section--paper-2" id="areas" aria-labelledby="services-title">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 id="services-title" className="h2">
            {d.title}
          </h2>
          <p className="lead">{d.lede}</p>
        </header>

        <div className="svc-grid">
          {d.items.map((s, i) => {
            // Checkerboard across the 7/5, 5/7, full-width rows
            const dark = i === 0 || i === 3;
            return (
              <article
                key={s.id}
                className={`svc ${dark ? "svc--dark" : "svc--paper"}`}
                data-reveal
                style={{ "--i": i % 2 } as React.CSSProperties}
              >
                <div className="svc__media frame">
                  <Picture name={s.image} alt={s.imageAlt} sizes={SIZES} />
                  <div className="shade" />
                  <span className="svc__num" aria-hidden>
                    {s.n}
                  </span>
                </div>
                <div className="svc__body">
                  <h3 className="svc__title">{s.title}</h3>
                  <p className="svc__what">{s.what}</p>
                  <p className="svc__why">
                    <span className="sr-only">{d.whyLabel}: </span>
                    {s.why}
                  </p>
                  <div className="svc__meta">
                    <span className="svc__label">{d.resultLabel}</span>
                    <p>{s.result}</p>
                  </div>
                  <div className="svc__cta">
                    <Link href={`${civil}#${s.id}`} className="link-arrow" aria-label={`${d.cta}: ${s.title}`}>
                      {d.cta}
                      <ArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="svc-foot" data-reveal>
          <Link href={civil} className="btn btn--dark">
            {d.allCta}
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
