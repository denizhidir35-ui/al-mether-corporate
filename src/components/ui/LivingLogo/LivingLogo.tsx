import styles from "./LivingLogo.module.css";

export function LivingLogo() {
  return (
    <div className={styles.logo} aria-label="Mether Living Logo">
      <div className={styles.aura} />
      <div className={styles.ringOuter} />
      <div className={styles.ringInner} />
      <div className={styles.photons}>
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} style={{ "--i": i } as React.CSSProperties} />
        ))}
      </div>
      <div className={styles.core}>
        <strong>M</strong>
        <small>METHER</small>
      </div>
    </div>
  );
}
