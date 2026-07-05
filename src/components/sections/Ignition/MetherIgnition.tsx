import styles from "./MetherIgnition.module.css";

export function MetherIgnition() {
  return (
    <section className={styles.ignition} aria-hidden="true">
      <div className={styles.fiberPreview} />
      <div className={styles.darkMask} />
      <div className={styles.energyCore} />
      <div className={styles.energyLine} />
      <div className={styles.lightGate} />

      <div className={styles.photons}>
        {Array.from({ length: 54 }).map((_, index) => (
          <span key={index} style={{ "--i": index } as React.CSSProperties} />
        ))}
      </div>

      <div className={styles.flash} />
    </section>
  );
}
