"use client";

import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

export function SceneEffects() {
  return (
    <EffectComposer multisampling={4}>
      <Bloom intensity={2.15} luminanceThreshold={0.08} luminanceSmoothing={0.65} mipmapBlur />
      <Vignette eskil={false} offset={0.22} darkness={0.78} />
    </EffectComposer>
  );
}
