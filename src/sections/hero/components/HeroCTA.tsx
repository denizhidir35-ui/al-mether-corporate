"use client";

import PremiumButton from "@/components/ui/PremiumButton";

export default function HeroCTA() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
      <PremiumButton href="#contact">Explore METHER</PremiumButton>
      <PremiumButton href="#systems" variant="secondary">
        View Systems
      </PremiumButton>
    </div>
  );
}
