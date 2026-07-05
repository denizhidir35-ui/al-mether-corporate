"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 96 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 61) % 100}%`,
  size: i % 9 === 0 ? 2 : 1,
  delay: (i % 13) * 0.17,
}));

export default function SpaceBackground({ x, y }: { x: number; y: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ x: x * -18, y: y * -18 }}
        transition={{ type: "spring", stiffness: 42, damping: 24 }}
        className="absolute inset-[-8%]"
      >
        <div className="absolute left-1/2 top-[-18%] h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-[-18%] right-[-8%] h-[520px] w-[520px] rounded-full bg-violet-600/20 blur-[130px]" />
        <div className="absolute left-[-8%] top-[22%] h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[110px]" />
      </motion.div>

      {stars.map((star) => (
        <motion.span
          key={star.id}
          initial={{ opacity: 0.14, scale: 0.7 }}
          animate={{ opacity: [0.16, 0.92, 0.2], scale: [0.8, 1.55, 0.9] }}
          transition={{ duration: 3.8, repeat: Infinity, delay: star.delay }}
          className="absolute rounded-full bg-white"
          style={{ left: star.left, top: star.top, width: star.size, height: star.size }}
        />
      ))}

      <motion.div
        animate={{ x: ["-20%", "120%"], y: ["0%", "34%"], opacity: [0, 0.75, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, repeatDelay: 4.5, ease: "easeInOut" }}
        className="absolute left-0 top-[18%] h-px w-40 rotate-[-18deg] bg-gradient-to-r from-transparent via-white to-transparent opacity-60"
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[.13]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black" />
    </div>
  );
}
