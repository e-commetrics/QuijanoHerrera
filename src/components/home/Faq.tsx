import type { Dict } from "@/content";

export function Faq({ d }: { d: Dict["faq"] }) {
  return (
    <section className="section section--paper-2" id="preguntas" aria-labelledby="faq-title">
      <div className="container faq__grid">
        <header className="faq__head" data-reveal>
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 id="faq-title" className="h2">
            {d.title}
          </h2>
        </header>

        <div className="faq__list" data-reveal>
          {d.items.map((item) => (
            <details className="faq__item" key={item.q}>
              <summary>
                {item.q}
                <span className="faq__icon" aria-hidden />
              </summary>
              <p className="faq__answer">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
