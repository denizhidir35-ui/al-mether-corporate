"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMouseParallax } from "@/hooks/useMouseParallax";

export function CameraRig() {
  const mouse = useMouseParallax();
  const { camera } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    camera.position.x += (mouse.x * 0.1 + Math.sin(t * 0.08) * 0.06 - camera.position.x) * 0.028;
    camera.position.y += (0.2 - mouse.y * 0.06 + Math.sin(t * 0.1) * 0.04 - camera.position.y) * 0.028;
    camera.position.z += (8.25 + Math.sin(t * 0.08) * 0.12 - camera.position.z) * 0.022;
    camera.lookAt(1.62 + mouse.x * 0.035, 0.22 - mouse.y * 0.02, -1.2);
  });

  return null;
}
