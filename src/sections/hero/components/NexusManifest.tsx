"use client";

import { motion } from "framer-motion";
import { nexusManifest } from "@/lib/manifest/nexus";
import { productRegistry } from "@/lib/products/registry";

export default function NexusManifest() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.15, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="mt-8 grid max-w-2xl gap-3 sm:mt-10"
    >
      <div className="mether-glass rounded-[2rem] p-4 sm:p-5">
        <div className="text-[10px] font-bold uppercase tracking-[0.32em] text-blue-100/55">
          {nexusManifest.title}
        </div>

        <div className="mt-2 text-lg font-semibold tracking-[-0.03em] text-white sm:text-2xl">
          {nexusManifest.headline}
        </div>

        <div className="mt-2 text-sm leading-6 text-white/55">
          {nexusManifest.principle}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {productRegistry.map((product) => (
          <span
            key={product.id}
            className="rounded-full border border-white/10 bg-white/[.045] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/52 backdrop-blur-xl"
          >
            {product.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
