import styles from "./TransitionBridge.module.css";

export function TransitionBridge() {
  return (
    <section className={styles.bridge} aria-hidden="true">
      <div className={styles.darkTop} />
      <div className={styles.orb} />
      <div className={styles.line} />
      <div className={styles.particles}>
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} style={{ "--i": i } as React.CSSProperties} />
        ))}
      </div>
      <div className={styles.darkBottom} />
    </section>
  );
}
