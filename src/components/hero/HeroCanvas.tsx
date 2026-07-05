"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MetherScene } from "@/components/three/MetherScene";

export function HeroCanvas() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 35 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          <MetherScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
