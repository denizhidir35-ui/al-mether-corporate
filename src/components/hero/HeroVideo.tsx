"use client";

import { useEffect, useRef } from "react";

export function HeroVideo({ fallback }: { fallback: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const video = videoRef.current;
    if (!video) return;

    const playFromCleanFrame = () => {
      video.currentTime = 2;
      void video.play().catch(() => undefined);
    };

    const loadVideo = () => {
      video.load();
      if (video.readyState >= HTMLMediaElement.HAVE_METADATA) playFromCleanFrame();
      else video.addEventListener("loadedmetadata", playFromCleanFrame, { once: true });
    };

    video.addEventListener("ended", playFromCleanFrame);
    if (document.readyState === "complete") loadVideo();
    else window.addEventListener("load", loadVideo, { once: true });

    return () => {
      window.removeEventListener("load", loadVideo);
      video.removeEventListener("loadedmetadata", playFromCleanFrame);
      video.removeEventListener("ended", playFromCleanFrame);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video absolute inset-0 h-full w-full object-cover"
      poster="/hero-bg.webp"
      muted
      playsInline
      preload="none"
      aria-hidden="true"
    >
      <source src="/mether-hero-mobile.mp4?v=1" type="video/mp4" media="(max-width: 1023px)" />
      <source src="/mether-hero-optimized.mp4?v=1" type="video/mp4" />
      {fallback}
    </video>
  );
}
