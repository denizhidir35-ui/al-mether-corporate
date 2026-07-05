"use client";

import { useEffect } from "react";

export function SceneScrollMotion() {
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      document.documentElement.style.setProperty("--scene-scroll", String(Math.min(y / 520, 1)));
      document.body.classList.toggle("mether-scene-active", y > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
