"use client";

import { useRef, useState } from "react";
import SpaceBackground from "@/components/effects/SpaceBackground";
import MouseGlow from "@/components/effects/MouseGlow";
import { useHeroGsap } from "@/animations/hero/useHeroGsap";
import IntroOverlay from "@/sections/hero/IntroOverlay";
import HeroTitle from "@/sections/hero/components/HeroTitle";
import HeroCTA from "@/sections/hero/components/HeroCTA";
import HeroVisual from "@/sections/hero/components/HeroVisual";
import NexusManifest from "@/sections/hero/components/NexusManifest";

export default function Hero() {
  const scope = useRef<HTMLElement | null>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useHeroGsap(scope);

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    setMouse({
      x: (event.clientX - rect.left) / rect.width - 0.5,
      y: (event.clientY - rect.top) / rect.height - 0.5,
    });
  }

  return (
    <main
      ref={scope}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#02030a] text-white"
    >
      <IntroOverlay />
      <SpaceBackground x={mouse.x} y={mouse.y} />
      <MouseGlow x={mouse.x} y={mouse.y} />
      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-8 px-5 pb-10 pt-28 sm:gap-12 sm:pb-16 sm:pt-32 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:pt-24">
        <div>
          <HeroTitle />
          <HeroCTA />
          <NexusManifest />
        </div>

        <HeroVisual mouse={mouse} />
      </section>
    </main>
  );
}
