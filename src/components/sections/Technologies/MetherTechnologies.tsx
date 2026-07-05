"use client";

import styles from "./MetherTechnologies.module.css";

const techCards = [
  { id: "01", title: "Fiber", text: "Yüksek hızlı altyapı." },
  { id: "02", title: "AI", text: "Akıllı otomasyon." },
  { id: "03", title: "Cloud", text: "Ölçeklenebilir bulut." },
  { id: "04", title: "Data", text: "Veriden içgörü." },
  { id: "05", title: "Security", text: "Uçtan uca güvenlik." },
  { id: "06", title: "Enterprise", text: "Kurumsal yazılım." },
];

export default function MetherTechnologies() {
  return (
    <section className={styles.section}>
      <div className={styles.bgImage} />
      <div className={styles.bgShade} />

      <div className={styles.beams}>
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className={styles.photons}>
        {Array.from({ length: 46 }).map((_, index) => (
          <span key={index} style={{ "--i": index } as React.CSSProperties} />
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>METHER TECHNOLOGIES</p>

          <h2 className={styles.title}>
            Fiberden
            <br />
            Yapay zekâya
            <br />
            uzanan
            <br />
            <span>teknoloji</span>
            <br />
            omurgası.
          </h2>

          <p className={styles.desc}>
            Fiber altyapı, yapay zekâ, bulut, veri güvenliği ve kurumsal
            yazılım katmanlarını tek omurgada birleştiriyoruz.
          </p>

          <button className={styles.cta}>
            Keşfet <span>→</span>
          </button>
        </div>

        <div className={styles.right}>
          {techCards.map((card) => (
            <article key={card.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span>{card.id}</span>
                <i />
              </div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
