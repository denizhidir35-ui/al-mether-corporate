"use client";

import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

export function Effects() {
  return (
    <EffectComposer multisampling={4}>
      <Bloom intensity={1.35} luminanceThreshold={0.18} luminanceSmoothing={0.72} mipmapBlur />
      <Vignette eskil={false} offset={0.22} darkness={0.72} />
    </EffectComposer>
  );
}
