import type { Dict } from "@/content";

export function Approach({ d }: { d: Dict["approach"] }) {
  return (
    <section className="section" id="enfoque" aria-labelledby="approach-title">
      <div className="container">
        <div className="approach__grid">
          <div className="approach__head" data-reveal>
            <p className="eyebrow">{d.eyebrow}</p>
            <h2 id="approach-title" className="approach__title">
              {d.title}
            </h2>
          </div>

          <div>
            <p className="lead approach__intro" data-reveal>
              {d.intro}
            </p>
            <ol className="pillars">
              {d.pillars.map((p, i) => (
                <li className="pillar" key={p.n} data-reveal style={{ "--i": i } as React.CSSProperties}>
                  <span className="pillar__n">{p.n}</span>
                  <div>
                    <h3 className="pillar__title">{p.title}</h3>
                    <p className="pillar__text">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <blockquote className="approach__quote" data-reveal>
          <p>{d.quote}</p>
        </blockquote>
      </div>
    </section>
  );
}
