"use client";

import { Center, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

export function MetherCoreText() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.scale.setScalar(1 + Math.sin(t * 1.1) * 0.01);
    group.current.rotation.y = Math.sin(t * 0.2) * 0.025;
  });

  return (
    <group ref={group} position={[0, -0.12, 0.16]}>
      <Center>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={0.88}
          height={0.28}
          curveSegments={24}
          bevelEnabled
          bevelThickness={0.045}
          bevelSize={0.028}
          bevelSegments={8}
        >
          METHER
          <meshPhysicalMaterial
            color="#f8fbff"
            emissive="#2563eb"
            emissiveIntensity={0.52}
            metalness={1}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.06}
          />
        </Text3D>
      </Center>
    </group>
  );
}
