import { SiteLink as Link } from "@/components/ui/SiteLink";
import type { Dict } from "@/content";
import { routes, type Locale } from "@/lib/site";
import { Picture } from "@/components/ui/Picture";
import { ArrowRight } from "@/components/ui/Icons";

export function About({ locale, d }: { locale: Locale; d: Dict["about"] }) {
  return (
    <section className="section" id="despacho" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__figure frame frame--marks" data-reveal="fade">
          <Picture name="facade" alt={d.imageAlt} sizes="(min-width: 900px) 42vw, 92vw" />
        </div>

        <div className="about__copy" data-reveal>
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 id="about-title" className="h2">
            {d.title}
          </h2>
          {d.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <p className="about__label">{d.foundersLabel}</p>
          <ul className="founders" style={{ marginTop: 0 }}>
            {d.founders.map((f) => (
              <li className="founder" key={f.name}>
                <span className="founder__mark" aria-hidden>
                  {f.initials}
                </span>
                <div>
                  <p className="founder__name">{f.name}</p>
                  <p className="founder__role">{f.role}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="about__label">{d.methodLabel}</p>
          <ul className="method">
            {d.method.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>

          <div>
            <Link href={`${routes[locale].home}#contacto`} className="link-arrow">
              {d.cta}
              <ArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
