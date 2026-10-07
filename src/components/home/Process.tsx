import type { Dict } from "@/content";

export function Process({ d }: { d: Dict["process"] }) {
  return (
    <section className="section" id="proceso" aria-labelledby="process-title">
      <div className="container">
        <header className="section-head" data-reveal>
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 id="process-title" className="h2">
            {d.title}
          </h2>
          <p className="lead">{d.lede}</p>
        </header>

        <ol className="process" data-reveal="fade">
          {d.steps.map((s, i) => (
            <li className="step" key={s.n} data-reveal style={{ "--i": i } as React.CSSProperties}>
              <span className="step__n" aria-hidden>
                {s.n}
              </span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__text">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
