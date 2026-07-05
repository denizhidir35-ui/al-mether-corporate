"use client";

import { motion } from "framer-motion";
import HeroNodes from "@/sections/hero/components/HeroNodes";
import HeroCore from "@/sections/hero/components/HeroCore";
import HeroStatus from "@/sections/hero/components/HeroStatus";

export default function HeroVisual({ mouse }: { mouse: { x: number; y: number } }) {
  return (
    <motion.div
      animate={{ x: mouse.x * 28, y: mouse.y * 28 }}
      transition={{ type: "spring", stiffness: 38, damping: 22 }}
      className="gsap-visual pointer-events-none relative mx-auto -mt-4 flex h-[360px] w-full max-w-[520px] items-center justify-center sm:h-[520px] lg:-mt-0 lg:h-[560px]"
    >
      <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-[90px]" />
      <HeroNodes x={mouse.x} y={mouse.y} />
      <HeroCore />
      <HeroStatus />
    </motion.div>
  );
}
