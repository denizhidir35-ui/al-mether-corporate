"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState("EN");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-6"
    >
      <nav
        className={[
          "mether-glass mx-auto flex max-w-7xl items-center justify-between rounded-full transition-all duration-500",
          scrolled ? "px-3 py-2 sm:px-4" : "px-4 py-3 sm:px-5",
        ].join(" ")}
      >
        <div className="flex min-w-0 items-center gap-3">
          <img
            src="/mether-logo.png"
            alt="METHER"
            className={[
              "rounded-full object-contain transition-all duration-500",
              scrolled ? "h-8 w-8" : "h-9 w-9",
            ].join(" ")}
          />
          <div className="min-w-0 leading-none">
            <div className="text-sm font-semibold tracking-[0.32em] text-white sm:text-base">
              {siteConfig.name}
            </div>
            <div className="mt-1 hidden text-[10px] tracking-[0.28em] text-white/45 sm:block">
              CORPORATE AI SYSTEMS
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-white/58 transition hover:text-white">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex rounded-full border border-white/12 bg-white/[.045] p-1">
            {siteConfig.languages.map((item) => (
              <button
                key={item}
                onClick={() => setLang(item)}
                className={[
                  "rounded-full px-3 py-1.5 text-xs font-bold transition",
                  lang === item ? "bg-white text-black" : "text-white/55 hover:text-white",
                ].join(" ")}
              >
                {item}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white px-5 py-2.5 text-xs font-bold text-black shadow-[0_0_40px_rgba(255,255,255,.2)] transition hover:scale-[1.03]"
          >
            Start
          </a>
        </div>

        <button
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[.06] text-white md:hidden"
          aria-label="Open menu"
        >
          <span className="text-lg">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="mether-glass mx-auto mt-3 max-w-7xl rounded-3xl p-4 md:hidden"
          >
            <div className="grid gap-2">
              {siteConfig.nav.map((item) => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/72 hover:bg-white/[.06] hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <div className="flex rounded-full border border-white/12 bg-white/[.045] p-1">
                {siteConfig.languages.map((item) => (
                  <button
                    key={item}
                    onClick={() => setLang(item)}
                    className={[
                      "rounded-full px-3 py-1.5 text-xs font-bold transition",
                      lang === item ? "bg-white text-black" : "text-white/55",
                    ].join(" ")}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-white px-5 py-2.5 text-xs font-bold text-black"
              >
                Start
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
