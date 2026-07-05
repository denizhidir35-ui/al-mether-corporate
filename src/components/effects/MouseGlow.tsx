"use client";

import { motion } from "framer-motion";

export default function MouseGlow({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[2]"
      animate={{
        background: `radial-gradient(520px circle at ${50 + x * 100}% ${50 + y * 100}%, rgba(69,163,255,.14), rgba(139,92,246,.07) 28%, transparent 62%)`,
      }}
      transition={{ type: "spring", stiffness: 35, damping: 22 }}
    />
  );
}
