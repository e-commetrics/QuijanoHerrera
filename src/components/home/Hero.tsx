import { SiteLink as Link } from "@/components/ui/SiteLink";
import type { Dict } from "@/content";
import { routes, site, telLink, type Locale } from "@/lib/site";
import { Picture } from "@/components/ui/Picture";
import { ArrowRight } from "@/components/ui/Icons";

export function Hero({ locale, d }: { locale: Locale; d: Dict["hero"] }) {
  const home = routes[locale].home;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--wrap" data-in style={{ "--d": 0 } as React.CSSProperties}>
              {d.eyebrow}
              <span className="eyebrow__dot" aria-hidden />
              {d.credential}
            </p>
            <h1 id="hero-title" className="hero__title" data-in style={{ "--d": 1 } as React.CSSProperties}>
              {d.titleLead} <em>{d.titleEmphasis}</em>
            </h1>
            <p className="hero__desc" data-in style={{ "--d": 3 } as React.CSSProperties}>
              {d.description}
            </p>
            <div className="hero__actions" data-in style={{ "--d": 4 } as React.CSSProperties}>
              <Link href={`${home}#contacto`} className="btn btn--primary">
                {d.ctaPrimary}
                <ArrowRight />
              </Link>
              <Link href={`${home}#areas`} className="btn btn--outline">
                {d.ctaSecondary}
              </Link>
            </div>
            <p className="hero__phone" data-in style={{ "--d": 5 } as React.CSSProperties}>
              {d.phoneHint} <a href={telLink}>{site.phone.display}</a>
            </p>
          </div>

          <div className="hero__media" data-in style={{ "--d": 2 } as React.CSSProperties}>
            <div className="hero__figure frame frame--marks">
              <Picture
                name="hero-justice"
                alt={d.imageAlt}
                sizes="(min-width: 900px) 40vw, 92vw"
                priority
              />
              <div className="shade" />
            </div>
            <div className="hero__card">
              <p className="hero__card-label">{d.pillarsLabel}</p>
              <ol>
                {d.pillars.map((p, i) => (
                  <li key={p}>
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    {p}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
