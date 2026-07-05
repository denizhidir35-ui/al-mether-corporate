"use client";

const items = [
  ["FIBER", "Fiber altyapı"],
  ["AI", "Yapay zekâ"],
  ["CLOUD", "Bulut sistemleri"],
  ["DATA", "Veri otomasyonu"],
];

export function MetherTechnologies() {
  return (
    <section className="mtech">
      <div className="mtech-bg" />
      <div className="mtech-stars" />

      <div className="mtech-copy">
        <p>METHER TECHNOLOGIES</p>
        <h2>
          Fiberden <span>yapay zekâya</span> uzanan teknoloji omurgası.
        </h2>
        <h3>
          Altyapı, yapay zekâ, bulut ve veri sistemlerini aynı çekirdek üzerinde birleştiren METHER teknoloji ekosistemi.
        </h3>
      </div>

      <div className="mtech-cards">
        {items.map(([title, desc]) => (
          <article key={title}>
            <strong>{title}</strong>
            <small>{desc}</small>
          </article>
        ))}
      </div>
    </section>
  );
}
