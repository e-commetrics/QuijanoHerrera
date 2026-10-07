"use client";

import { SiteLink as Link } from "@/components/ui/SiteLink";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Dict } from "@/content";
import { routes, switchHref, telLink, whatsappLink, site, type Locale, type PageKey } from "@/lib/site";
import { ArrowRight } from "@/components/ui/Icons";

interface HeaderProps {
  locale: Locale;
  nav: Dict["nav"];
  a11y: Dict["a11y"];
  lang: Dict["lang"];
  whatsappMessage: string;
  logo: { src: string; width: number; height: number };
}

const withSlash = (p: string) => (p.endsWith("/") ? p : `${p}/`);

export function Header({ locale, nav, a11y, lang, whatsappMessage, logo }: HeaderProps) {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const anchorY = useRef(0);

  const home = routes[locale].home;
  const currentPage =
    (Object.keys(routes[locale]) as PageKey[]).find((key) => routes[locale][key] === withSlash(pathname)) ?? "home";
  const langHref = switchHref(locale, currentPage);

  // Solid background after the first scroll; hide when scrolling down, return when scrolling up.
  useEffect(() => {
    // Browsers deliver scroll events at most once per frame, so no extra throttling.
    // Direction is judged on cumulative movement from the last anchor point, so a
    // slow scroll (a few px per event) still hides/reveals the header.
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 24);
      if (y < 240) {
        setHidden(false);
        anchorY.current = y;
        return;
      }
      const delta = y - anchorY.current;
      if (delta > 12) {
        setHidden(true);
        anchorY.current = y;
      } else if (delta < -12) {
        setHidden(false);
        anchorY.current = y;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu: lock page scroll, close on Escape, hand focus to the first link.
  useEffect(() => {
    if (!open) return;
    document.body.classList.add("no-scroll");
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      burgerRef.current?.focus();
    };
    const desktop = window.matchMedia("(min-width: 1100px)");
    const onResize = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const link = (anchor: string) => `${home}#${anchor}`;
  const className = ["header", solid && "is-solid", hidden && !open && "is-hidden", open && "menu-open"]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <header className={className}>
        <div className="container header__bar">
          <Link href={home} className="header__brand" onClick={() => setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo.src} width={logo.width} height={logo.height} alt="Quijano Herrera Abogados" />
          </Link>

          <nav className="header__nav" aria-label={a11y.mainNav}>
            <ul className="header__list">
              {nav.links.map((item) => (
                <li key={item.anchor}>
                  <Link href={link(item.anchor)} className="header__link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header__actions">
            <a href={langHref} className="lang" hrefLang={locale === "es" ? "en" : "es"}>
              <span className="lang__current" aria-hidden>
                {lang.current}
              </span>
              <span className="lang__sep" aria-hidden />
              <span aria-hidden>{lang.other}</span>
              <span className="sr-only">{a11y.switchLanguage}</span>
            </a>
            <Link href={link("contacto")} className="btn btn--outline btn--sm header__cta">
              {nav.contact}
            </Link>
            <button
              ref={burgerRef}
              type="button"
              className="burger"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? a11y.closeMenu : a11y.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header>: its backdrop-filter would otherwise trap this fixed overlay. */}
      <div id="mobile-menu" className={`menu${open ? " is-open" : ""}`} inert={!open} aria-label={a11y.mobileNav}>
        <ul className="menu__list">
          {nav.links.map((item, i) => (
            <li key={item.anchor}>
              <Link
                href={link(item.anchor)}
                className="menu__link"
                ref={i === 0 ? firstLinkRef : undefined}
                onClick={() => setOpen(false)}
              >
                {item.label}
                <small>{String(i + 1).padStart(2, "0")}</small>
              </Link>
            </li>
          ))}
          <li>
            <Link href={link("contacto")} className="menu__link" onClick={() => setOpen(false)}>
              {nav.contact}
              <small>{String(nav.links.length + 1).padStart(2, "0")}</small>
            </Link>
          </li>
        </ul>
        <div className="menu__foot">
          <Link href={link("contacto")} className="btn btn--primary btn--block" onClick={() => setOpen(false)}>
            {nav.cta}
            <ArrowRight />
          </Link>
          <a href={whatsappLink(whatsappMessage)} className="btn btn--outline btn--block" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <div className="menu__meta">
            <a href={telLink}>{site.phone.display}</a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
