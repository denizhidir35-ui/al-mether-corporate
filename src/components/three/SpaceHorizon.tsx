"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export function SpaceHorizon() {
  const planet = useRef<Mesh>(null);
  const grid = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (planet.current) planet.current.rotation.y += delta * 0.018;
    if (grid.current) grid.current.rotation.y += delta * 0.012;
  });

  return (
    <group position={[1.15, -4.25, -2.4]} rotation={[0.1, 0, -0.1]}>
      <mesh ref={planet}>
        <sphereGeometry args={[5.2, 96, 48]} />
        <meshStandardMaterial color="#061a35" emissive="#061f44" emissiveIntensity={0.55} roughness={0.75} metalness={0.2} />
      </mesh>
      <mesh ref={grid} scale={[1.012, 1.012, 1.012]}>
        <sphereGeometry args={[5.22, 64, 32]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  );
}
