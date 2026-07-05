"use client";

export default function HeroStatus() {
  return (
    <div className="absolute bottom-4 left-3 right-3 rounded-3xl border border-white/12 bg-black/35 p-4 backdrop-blur-2xl sm:bottom-8 sm:left-8 sm:right-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="text-[10px] uppercase tracking-[0.28em] text-white/42 sm:text-xs">Active Core</div>
          <div className="mt-1 text-xs font-semibold text-white sm:text-sm">AI / Fiber / Legal / Enterprise</div>
        </div>
        <div className="h-2.5 w-2.5 rounded-full bg-blue-300 shadow-[0_0_24px_rgba(96,165,250,.9)]" />
      </div>
    </div>
  );
}
