"use client";

export default function HeroCore() {
  return (
    <>
      <div className="gsap-orbit-a absolute h-[90%] w-[90%] rounded-full border border-blue-300/18" />
      <div className="gsap-orbit-b absolute h-[68%] w-[68%] rotate-45 rounded-full border border-violet-300/18" />

      <div className="hero-video-mask absolute h-[120%] w-[120%] opacity-45 mix-blend-screen sm:opacity-55">
        <video src="/mether-intro.mp4" className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" />
      </div>

      <div className="gsap-core mether-glass relative flex h-44 w-44 items-center justify-center rounded-full sm:h-64 sm:w-64">
        <div className="mether-orb absolute inset-4 rounded-full opacity-90" />
        <img src="/mether-logo.png" alt="METHER Logo" className="relative z-10 h-24 w-24 rounded-full object-contain sm:h-36 sm:w-36" />
      </div>
    </>
  );
}
