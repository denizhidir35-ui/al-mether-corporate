"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./MetherCoreScene.module.css";

const photonPulses = Array.from({ length: 14 });
const orbitPhotons = Array.from({ length: 9 });
const fiberPhotons = Array.from({ length: 8 });
const driftParticles = Array.from({ length: 10 });

export function MetherCoreScene({ ariaLabel }: { ariaLabel: string }) {
  const sceneRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.12,
      rootMargin: "80px 0px",
    });
    observer.observe(scene);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sceneRef} className={`${styles.sceneFrame} ${visible ? styles.sceneVisible : ""}`} role="img" aria-label={ariaLabel}>
      <div className={styles.mobileBackground} aria-hidden="true"><i /></div>
      <div className={styles.driftLayer} aria-hidden="true">
        {driftParticles.map((_, index) => <i key={index} />)}
      </div>
      <div className={styles.photonLayer} aria-hidden="true">
        {photonPulses.map((_, index) => <i key={index} />)}
      </div>
      <div className={styles.orbitLayer} aria-hidden="true">
        {orbitPhotons.map((_, index) => <i key={index} />)}
      </div>
      <div className={styles.fiberLayer} aria-hidden="true">
        {fiberPhotons.map((_, index) => <i key={index} />)}
      </div>
    </div>
  );
}
