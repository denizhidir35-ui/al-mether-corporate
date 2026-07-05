import styles from "./CinematicTransition.module.css";

export function CinematicTransition() {
  return (
    <section className={styles.bridge} aria-hidden="true">
      <div className={styles.energyWash} />
      <div className={styles.coreOrb} />
      <div className={`${styles.ring} ${styles.ringA}`} />
      <div className={`${styles.ring} ${styles.ringB}`} />
      <div className={`${styles.ring} ${styles.ringC}`} />

      <div className={styles.beams}>
        {Array.from({ length: 12 }).map((_, index) => (
          <span key={index} />
        ))}
      </div>

      <div className={styles.particles}>
        {Array.from({ length: 42 }).map((_, index) => (
          <i key={index} />
        ))}
      </div>
    </section>
  );
}
