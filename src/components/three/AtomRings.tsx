"use client";

import { Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

export function AtomRings() {
  const ringA = useRef<Group>(null);
  const ringB = useRef<Group>(null);
  const ringC = useRef<Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (ringA.current) {
      ringA.current.rotation.z += delta * 0.18;
      ringA.current.rotation.x = Math.sin(t * 0.22) * 0.08 + 1.1;
    }

    if (ringB.current) {
      ringB.current.rotation.z -= delta * 0.22;
      ringB.current.rotation.y = Math.sin(t * 0.18) * 0.08 + 0.9;
    }

    if (ringC.current) {
      ringC.current.rotation.y += delta * 0.08;
      ringC.current.rotation.x -= delta * 0.06;
    }
  });

  return (
    <group scale={[1.45, 1.45, 1.45]}>
      <group ref={ringA} rotation={[1.1, 0.25, 0.15]}>
        <Torus args={[1.82, 0.01, 18, 220]}>
          <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={2.2} transparent opacity={0.78} />
        </Torus>
      </group>

      <group ref={ringB} rotation={[0.55, 1.05, -0.25]}>
        <Torus args={[1.56, 0.01, 18, 220]}>
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={2.15} transparent opacity={0.72} />
        </Torus>
      </group>

      <group ref={ringC} rotation={[0.1, 0.3, 0.9]}>
        <Torus args={[2.08, 0.006, 14, 220]}>
          <meshStandardMaterial color="#67e8f9" emissive="#67e8f9" emissiveIntensity={1.15} transparent opacity={0.36} />
        </Torus>
      </group>
    </group>
  );
}
