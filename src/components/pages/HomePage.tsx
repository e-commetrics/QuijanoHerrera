import { getDict } from "@/content";
import { faqSchema } from "@/lib/schema";
import type { Locale } from "@/lib/site";
import { About } from "@/components/home/About";
import { Approach } from "@/components/home/Approach";
import { Contact } from "@/components/home/Contact";
import { Difference } from "@/components/home/Difference";
import { Faq } from "@/components/home/Faq";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { Scenarios } from "@/components/home/Scenarios";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { Trust } from "@/components/home/Trust";
import { JsonLd } from "@/components/ui/JsonLd";

/**
 * Conversion path: what we do -> who it is for -> why us -> how it works ->
 * proof/expectations -> objections (FAQ) -> one clear next step (contact).
 */
export function HomePage({ locale }: { locale: Locale }) {
  const d = getDict(locale);

  return (
    <main id="main" className="page">
      <Hero locale={locale} d={d.hero} />
      <Trust d={d.trust} />
      <Approach d={d.approach} />
      <Services locale={locale} d={d.services} />
      <Difference d={d.difference} />
      <Process d={d.process} />
      <Scenarios d={d.scenarios} />
      <Testimonials d={d.testimonials} />
      <About locale={locale} d={d.about} />
      <Faq d={d.faq} />
      <Contact d={d.contact} topicIds={d.services.items.map((s) => s.id)} />
      <JsonLd data={faqSchema(d)} />
    </main>
  );
}
