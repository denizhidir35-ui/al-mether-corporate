"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject } from "react";

gsap.registerPlugin(useGSAP);

export function useHeroGsap(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".gsap-navline", { scaleX: 0, opacity: 0, duration: 1.2 })
        .from(".gsap-kicker", { y: 24, opacity: 0, duration: 0.8 }, "-=.7")
        .from(".gsap-title span", { y: 90, opacity: 0, rotateX: -35, stagger: 0.08, duration: 1.05 }, "-=.42")
        .from(".gsap-copy", { y: 26, opacity: 0, duration: 0.75 }, "-=.45")
        .from(".gsap-cta", { y: 20, opacity: 0, stagger: 0.08, duration: 0.72 }, "-=.35")
        .from(".gsap-visual", { scale: 0.86, opacity: 0, filter: "blur(18px)", duration: 1.15 }, "-=.85");

      gsap.to(".gsap-orbit-a", { rotate: 360, duration: 18, repeat: -1, ease: "none" });
      gsap.to(".gsap-orbit-b", { rotate: -360, duration: 24, repeat: -1, ease: "none" });
      gsap.to(".gsap-core", { y: -10, duration: 2.8, repeat: -1, yoyo: true, ease: "sine.inOut" });
    },
    { scope }
  );
}
