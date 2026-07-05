"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function IntroOverlay() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShow(false), 2600);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(18px)" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <video
            src="/mether-intro.mp4"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
            autoPlay
            muted
            playsInline
            preload="auto"
          />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,.42)_45%,#000_82%)]" />

          <motion.div
            initial={{ scale: 0.82, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.18, opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="relative flex h-36 w-36 items-center justify-center rounded-full border border-white/15 bg-white/[.05] backdrop-blur-2xl">
              <div className="absolute inset-[-18px] rounded-full border border-blue-300/20 shadow-[0_0_90px_rgba(69,163,255,.3)]" />
              <img src="/mether-logo.png" alt="METHER" className="h-24 w-24 rounded-full object-contain" />
            </div>

            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.2em" }}
              animate={{ opacity: 1, letterSpacing: "0.42em" }}
              transition={{ delay: 0.65, duration: 1 }}
              className="mt-8 text-center text-xs font-bold uppercase text-white/72"
            >
              Engineering Tomorrow
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
