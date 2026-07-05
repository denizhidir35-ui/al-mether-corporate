"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { AdditiveBlending, Color, ShaderMaterial, type Mesh } from "three";

export function MovingNebula() {
  const mesh = useRef<Mesh>(null);

  const material = useMemo(() => {
    return new ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uBlue: { value: new Color("#0ea5e9") },
        uPurple: { value: new Color("#8b5cf6") },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uBlue;
        uniform vec3 uPurple;
        varying vec2 vUv;

        float noise(vec2 p) {
          return sin(p.x) * sin(p.y);
        }

        void main() {
          vec2 uv = vUv;
          vec2 p = (uv - 0.5) * 3.0;
          float n = 0.0;
          n += noise(p * 4.0 + uTime * 0.10) * 0.35;
          n += noise(p * 7.0 - uTime * 0.08) * 0.25;
          n += noise(p * 11.0 + uTime * 0.05) * 0.18;

          float rightGlow = smoothstep(1.35, 0.1, length(p - vec2(0.75, 0.08)));
          float topGlow = smoothstep(1.15, 0.05, length(p - vec2(0.35, 0.75)));
          float cloud = smoothstep(0.18, 0.85, n + rightGlow + topGlow);

          vec3 color = mix(uBlue, uPurple, uv.x);
          gl_FragColor = vec4(color, cloud * 0.26);
        }
      `,
    });
  }, []);

  useFrame((state) => {
    material.uniforms.uTime.value = state.clock.elapsedTime;
    if (mesh.current) mesh.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.03) * 0.02;
  });

  return (
    <mesh ref={mesh} position={[0, 0, -8]}>
      <planeGeometry args={[2, 2]} />
      <primitive object={material} attach="material" />
    </mesh>
  );
}
