"use client";

import { motion } from "framer-motion";
import { heroNodes } from "@/sections/hero/data/heroNodes";

export default function HeroNodes({ x, y }: { x: number; y: number }) {
  return (
    <motion.div
      animate={{ x: x * 16, y: y * 16 }}
      transition={{ type: "spring", stiffness: 36, damping: 21 }}
      className="absolute inset-0 hidden sm:block"
    >
      <svg className="absolute inset-0 h-full w-full opacity-55" viewBox="0 0 100 100" preserveAspectRatio="none">
        {heroNodes.map((node) => (
          <motion.line
            key={node.label}
            x1="50"
            y1="50"
            x2={parseFloat(node.x)}
            y2={parseFloat(node.y)}
            stroke="rgba(125,180,255,.28)"
            strokeWidth="0.18"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.35 }}
          />
        ))}
      </svg>

      {heroNodes.map((node, index) => (
        <motion.div
          key={node.label}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: [1, 1.06, 1] }}
          transition={{
            opacity: { delay: 0.55 + index * 0.08, duration: 0.65 },
            scale: { duration: 3.2, repeat: Infinity, delay: index * 0.2 },
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/35 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/68 shadow-[0_0_35px_rgba(69,163,255,.18)] backdrop-blur-xl"
          style={{ left: node.x, top: node.y }}
        >
          {node.label}
        </motion.div>
      ))}
    </motion.div>
  );
}
