import { SiteLink as Link } from "@/components/ui/SiteLink";
import type { Dict } from "@/content";
import { routes, site, telLink, type Locale } from "@/lib/site";
import { logo, logoSrc } from "@/lib/images";
import { ArrowUp } from "@/components/ui/Icons";

export function Footer({ locale, d }: { locale: Locale; d: Dict }) {
  const home = routes[locale].home;
  const civil = routes[locale].civil;
  const a = site.address;
  const mark = logo("logo-h");
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc("logo-h")} width={mark.width} height={mark.height} alt={site.name} loading="lazy" />
            <p className="footer__tagline">{d.footer.tagline}</p>
          </div>

          <div className="footer__cols">
            <nav aria-label={d.footer.navTitle}>
              <h2 className="footer__title">{d.footer.navTitle}</h2>
              <ul className="footer__list">
                {d.nav.links.map((l) => (
                  <li key={l.anchor}>
                    <Link href={`${home}#${l.anchor}`}>{l.label}</Link>
                  </li>
                ))}
                <li>
                  <Link href={`${home}#contacto`}>{d.nav.contact}</Link>
                </li>
              </ul>
            </nav>

            <nav aria-label={d.footer.areasTitle}>
              <h2 className="footer__title">{d.footer.areasTitle}</h2>
              <ul className="footer__list">
                {d.services.items.map((s) => (
                  <li key={s.id}>
                    <Link href={`${civil}#${s.id}`}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="footer__title">{d.footer.contactTitle}</h2>
              <ul className="footer__list">
                <li>
                  <a href={telLink}>{site.phone.display}</a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
                <li>
                  <address style={{ fontStyle: "normal" }}>
                    <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label={`${d.footer.openMap}: ${a.street}, ${a.city}`}>
                      {a.street}
                      <br />
                      {a.neighborhood}
                      <br />
                      {a.postalCode} {a.city}, {a.regionCode}
                    </a>
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div>
            <p className="footer__disclaimer">{d.footer.disclaimer}</p>
            <p style={{ marginTop: "0.75rem" }}>
              &copy; {year} {site.name}. {d.footer.rights}
            </p>
            <p style={{ marginTop: "0.5rem" }}>
              {d.footer.poweredBy}{" "}
              <a className="text-link" href="https://ecommetrica.com" target="_blank" rel="noopener noreferrer">
                Ecommetrica.com
              </a>
            </p>
          </div>
          <div className="footer__legal">
            <Link href={routes.es.privacy}>{d.footer.legal}</Link>
            <a href="#main" aria-label={d.a11y.backToTop}>
              <ArrowUp style={{ display: "inline", width: "1rem", height: "1rem", verticalAlign: "-0.2em", marginRight: "0.375rem" }} />
              {d.footer.top}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
