import type { Dict } from "@/content";
import { Picture } from "@/components/ui/Picture";

export function Scenarios({ d }: { d: Dict["scenarios"] }) {
  return (
    <section className="section section--ink-2" id="situaciones" aria-labelledby="scenarios-title">
      <div className="container scenarios__grid">
        <div className="scenarios__aside" data-reveal>
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 id="scenarios-title" className="h2">
            {d.title}
          </h2>
          <p className="lead">{d.lede}</p>
          <div className="scenarios__figure frame frame--marks">
            <Picture name="document" alt={d.imageAlt} sizes="(min-width: 1000px) 30vw, 90vw" />
            <div className="shade" />
          </div>
          <p className="scenarios__disclaimer">{d.disclaimer}</p>
        </div>

        <ul>
          {d.items.map((s, i) => (
            <li className="scenario" key={s.situation} data-reveal style={{ "--i": i % 3 } as React.CSSProperties}>
              <h3 className="scenario__situation">{s.situation}</h3>
              <dl className="scenario__cols">
                <div>
                  <dt>{d.cols.path}</dt>
                  <dd>{s.path}</dd>
                </div>
                <div>
                  <dt>{d.cols.protects}</dt>
                  <dd>{s.protects}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
