"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Points as ThreePoints } from "three";

export function ParticleField() {
  const near = useRef<ThreePoints>(null);
  const far = useRef<ThreePoints>(null);

  const nearParticles = useMemo(() => {
    const count = 1700;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }

    return positions;
  }, []);

  const farParticles = useMemo(() => {
    const count = 2300;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 28;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 2] = -4 - Math.random() * 18;
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;

    if (near.current) {
      near.current.rotation.y += delta * 0.018;
      near.current.rotation.x = Math.sin(t * 0.06) * 0.025;
    }

    if (far.current) {
      far.current.rotation.y -= delta * 0.006;
      far.current.rotation.z = Math.sin(t * 0.04) * 0.018;
    }
  });

  return (
    <>
      <Points ref={far} positions={farParticles} stride={3} frustumCulled>
        <PointMaterial transparent color="#dbeafe" size={0.013} sizeAttenuation depthWrite={false} opacity={0.34} />
      </Points>

      <Points ref={near} positions={nearParticles} stride={3} frustumCulled>
        <PointMaterial transparent color="#93c5fd" size={0.018} sizeAttenuation depthWrite={false} opacity={0.48} />
      </Points>
    </>
  );
}
