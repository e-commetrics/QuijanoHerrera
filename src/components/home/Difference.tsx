import type { Dict } from "@/content";

export function Difference({ d }: { d: Dict["difference"] }) {
  return (
    <section className="section section--ink" id="diferencia" aria-labelledby="diff-title">
      <div className="container">
        <header className="section-head diff-head" data-reveal>
          <p className="eyebrow">{d.eyebrow}</p>
          <h2 id="diff-title" className="h2">
            {d.title}
          </h2>
        </header>

        <table className="diff" data-reveal>
          <caption>{d.title}</caption>
          <thead>
            <tr>
              <th scope="col">{d.reactiveLabel}</th>
              <th scope="col">{d.ourLabel}</th>
            </tr>
          </thead>
          <tbody>
            {d.rows.map(([reactive, ours]) => (
              <tr key={ours}>
                <td className="diff__reactive" data-label={d.reactiveLabel}>
                  <span>{reactive}</span>
                </td>
                <td className="diff__ours" data-label={d.ourLabel}>
                  {ours}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="diff__closing" data-reveal>
          {d.closing}
        </p>
      </div>
    </section>
  );
}
