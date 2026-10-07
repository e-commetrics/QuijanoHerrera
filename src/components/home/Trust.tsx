import type { Dict } from "@/content";

export function Trust({ d }: { d: Dict["trust"] }) {
  return (
    <section className="section--ink-2 trust" aria-label={d.statement}>
      <div className="container trust__grid">
        <p className="trust__statement" data-reveal>
          {d.statement}
        </p>
        <ul className="trust__stats">
          {d.stats.map((s, i) => (
            <li className="stat" key={s.label} data-reveal style={{ "--i": i + 1 } as React.CSSProperties}>
              <span className="stat__value">
                <span data-count={s.value}>{s.value}</span>
                {s.suffix}
              </span>
              <span className="stat__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
