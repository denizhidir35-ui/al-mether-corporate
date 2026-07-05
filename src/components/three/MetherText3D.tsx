"use client";

import { Center, Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

export function MetherText3D() {
  const group = useRef<Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.scale.setScalar(1 + Math.sin(t * 1.25) * 0.018);
    group.current.position.y = Math.sin(t * 0.8) * 0.04;
  });

  return (
    <group ref={group} position={[0, -0.2, 0]}>
      <Center>
        <Text3D
          font="/fonts/helvetiker_bold.typeface.json"
          size={0.88}
          height={0.12}
          curveSegments={16}
          bevelEnabled
          bevelThickness={0.018}
          bevelSize={0.018}
          bevelSegments={5}
        >
          METHER
          <meshStandardMaterial
            color="#ffffff"
            emissive="#38bdf8"
            emissiveIntensity={0.45}
            metalness={0.65}
            roughness={0.18}
          />
        </Text3D>
      </Center>
    </group>
  );
}
