"use client";

import { useEffect, useRef } from "react";

function IconLinkedIn() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 8.98H3.75V20h3.19V8.98ZM5.34 4a1.84 1.84 0 1 0 0 3.68A1.84 1.84 0 0 0 5.34 4ZM20.25 13.66c0-3.1-1.66-4.54-3.87-4.54-1.78 0-2.58.98-3.02 1.67h-.04V8.98h-3.06V20h3.19v-5.45c0-1.44.27-2.83 2.05-2.83 1.76 0 1.78 1.65 1.78 2.92V20h3.19l-.22-6.34Z" /></svg>;
}

function IconInstagram() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8Zm4.2 3.35A4.65 4.65 0 1 1 7.35 12 4.65 4.65 0 0 1 12 7.35Zm0 2A2.65 2.65 0 1 0 14.65 12 2.65 2.65 0 0 0 12 9.35Zm5.18-2.75a1.08 1.08 0 1 1-1.08 1.08 1.08 1.08 0 0 1 1.08-1.08Z" /></svg>;
}

function IconYouTube() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.58 7.18a2.74 2.74 0 0 0-1.93-1.94C17.94 4.8 12 4.8 12 4.8s-5.94 0-7.65.44a2.74 2.74 0 0 0-1.93 1.94A28.52 28.52 0 0 0 2 12a28.52 28.52 0 0 0 .42 4.82 2.74 2.74 0 0 0 1.93 1.94c1.71.44 7.65.44 7.65.44s5.94 0 7.65-.44a2.74 2.74 0 0 0 1.93-1.94A28.52 28.52 0 0 0 22 12a28.52 28.52 0 0 0-.42-4.82ZM10 15.15v-6.3L15.2 12 10 15.15Z" /></svg>;
}

function IconX() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2h3.1l-6.77 7.74L23.2 22h-6.24l-4.89-6.38L6.48 22H3.36l7.25-8.28L2.98 2h6.4l4.42 5.84L18.9 2Zm-1.1 17.84h1.72L8.44 4.05H6.6l11.2 15.79Z" /></svg>;
}

export function MetherHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 2.8;
    video.play().catch(() => {});
  }, []);

  return (
    <main className="mether-hero relative min-h-screen overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="hero-video absolute inset-0 h-full w-full object-cover"
        src="/mether-hero.mp4?v=13"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="hero-cinema-fade" />

      <a className="hero-cta-zone hero-cta-primary" href="#projects" aria-label="Projelerimizi İncele" />
      <a className="hero-cta-zone hero-cta-secondary" href="#film" aria-label="Tanıtım Filmi" />

      <aside className="right-socialbar">
        <div className="social-inner">
          <span className="social-label">SOSYAL</span>
          <span className="social-line" />
          <a href="#" aria-label="LinkedIn"><IconLinkedIn /></a>
          <a href="#" aria-label="Instagram"><IconInstagram /></a>
          <a href="#" aria-label="YouTube"><IconYouTube /></a>
          <a href="#" aria-label="X"><IconX /></a>
        </div>
      </aside>
    </main>
  );
}
