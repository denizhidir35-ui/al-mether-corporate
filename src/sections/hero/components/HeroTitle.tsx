"use client";

import { siteConfig } from "@/lib/config/site";

export default function HeroTitle() {
  return (
    <div className="relative z-20">
      <div className="gsap-navline mb-6 h-px w-32 origin-left bg-gradient-to-r from-blue-400 via-violet-400 to-transparent sm:mb-8 sm:w-40" />

      <div className="gsap-kicker mb-5 inline-flex max-w-full rounded-full border border-white/15 bg-white/[.055] px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-blue-100/90 backdrop-blur-xl sm:mb-6 sm:text-xs sm:tracking-[0.28em]">
        AI INFRASTRUCTURE / CORPORATE SYSTEMS
      </div>

      <h1 className="gsap-title max-w-5xl text-[4rem] font-semibold leading-[0.88] tracking-[-0.08em] sm:text-7xl lg:text-8xl">
        <span className="block">Build the</span>
        <span className="block bg-gradient-to-r from-white via-blue-100 to-violet-200 bg-clip-text text-transparent">
          future core
        </span>
        <span className="block text-white/72">of enterprise.</span>
      </h1>

      <p className="gsap-copy mt-6 max-w-2xl text-base leading-8 text-white/62 sm:mt-7 sm:text-lg">
        {siteConfig.description}
      </p>
    </div>
  );
}
