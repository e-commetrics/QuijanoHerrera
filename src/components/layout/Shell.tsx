import type { ReactNode } from "react";
import { getDict } from "@/content";
import { logo, logoSrc } from "@/lib/images";
import { siteGraph } from "@/lib/schema";
import { telLink, whatsappLink, type Locale } from "@/lib/site";
import { RevealObserver } from "@/components/effects/RevealObserver";
import { JsonLd } from "@/components/ui/JsonLd";
import { Dock } from "./Dock";
import { Footer } from "./Footer";
import { Header } from "./Header";

/** Chrome shared by every page of a language: skip link, header, footer, dock. */
export function Shell({ locale, children }: { locale: Locale; children: ReactNode }) {
  const d = getDict(locale);
  const mark = logo("logo-h");

  return (
    <>
      <a className="skip-link" href="#main">
        {d.a11y.skip}
      </a>
      <Header
        locale={locale}
        nav={d.nav}
        a11y={d.a11y}
        lang={d.lang}
        whatsappMessage={d.contact.whatsapp.message}
        logo={{ src: logoSrc("logo-h"), width: mark.width, height: mark.height }}
      />
      {children}
      <Footer locale={locale} d={d} />
      <Dock
        whatsappLabel={d.nav.dock.whatsapp}
        callLabel={d.nav.dock.call}
        whatsappHref={whatsappLink(d.contact.whatsapp.message)}
        telHref={telLink}
      />
      <RevealObserver />
      <JsonLd data={siteGraph(locale, d)} />
    </>
  );
}
