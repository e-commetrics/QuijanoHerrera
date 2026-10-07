import type { Dict } from "@/content";

/**
 * Renders nothing until the firm supplies real, publishable client quotes
 * (src/content/es.ts -> testimonials.items). Invented testimonials are never
 * acceptable for a law firm, so an empty list means no section.
 */
export function Testimonials({ d }: { d: Dict["testimonials"] }) {
  if (d.items.length === 0) return null;

  return (
    <section className="section section--paper-2" aria-labelledby="testimonials-title">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 id="testimonials-title" className="h2">
            {d.title}
          </h2>
        </header>
        <div className="testimonials__grid">
          {d.items.map((t, i) => (
            <figure className="quote-card" key={t.name} data-reveal style={{ "--i": i } as React.CSSProperties}>
              <blockquote>{t.quote}</blockquote>
              <figcaption>
                <strong>{t.name}</strong>
                {t.detail}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
