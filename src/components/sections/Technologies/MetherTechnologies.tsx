import styles from "./MetherTechnologies.module.css";
import type { Dictionary } from "@/lib/i18n/config";

export default function MetherTechnologies({ copy }: { copy: Dictionary["technologies"] }) {
  return (
    <section id="technologies" className={styles.section} aria-labelledby="technologies-title">
      <div className={styles.bgImage} />
      <div className={styles.bgShade} />
      <div className={styles.beams}><span /><span /><span /><span /></div>
      <div className={styles.photons}>
        {Array.from({ length: 46 }).map((_, index) => <span key={index} style={{ "--i": index } as React.CSSProperties} />)}
      </div>

      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h2 id="technologies-title" className={styles.title}>{copy.titleLines[0]}<br />{copy.titleLines[1]}<br />{copy.titleLines[2]}<br /><span>{copy.titleLines[3]}</span><br />{copy.titleLines[4]}</h2>
          <p className={styles.desc}>{copy.description}</p>
          <a className={styles.cta} href="#contact">{copy.cta} <span aria-hidden="true" dir="ltr">→</span></a>
        </div>

        <div className={styles.right}>
          {copy.cards.map((card, index) => (
            <article key={card.title} className={styles.card}>
              <div className={styles.cardTop}><span>{String(index + 1).padStart(2, "0")}</span><i /></div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
