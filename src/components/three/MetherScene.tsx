"use client";

import { Stars } from "@react-three/drei";
import { CameraRig } from "./CameraRig";
import { EnergyRings } from "./EnergyRings";
import { MovingNebula } from "./MovingNebula";
import { SceneEffects } from "./SceneEffects";

export function MetherScene() {
  return (
    <>
      <CameraRig />
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 4]} intensity={5} color="#38bdf8" />
      <pointLight position={[1, -2, 4]} intensity={4} color="#a855f7" />
      <Stars radius={120} depth={60} count={2600} factor={3.4} fade speed={0.28} />
      <MovingNebula />
      <group position={[2.85, 0.34, -1.15]} rotation={[0, -0.18, 0]} scale={1.28}>
        <EnergyRings />
      </group>
      <SceneEffects />
    </>
  );
}
