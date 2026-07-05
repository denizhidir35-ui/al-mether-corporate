"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { AdditiveBlending, Color, ShaderMaterial, type Mesh } from "three";

export function PlanetLights() {
  const planet = useRef<Mesh>(null);
  const lights = useRef<Mesh>(null);

  const lightMaterial = useMemo(() => {
    return new ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: AdditiveBlending,
      uniforms: {
        uTime: { value: 0 },
        uCyan: { value: new Color("#38bdf8") },
        uPurple: { value: new Color("#a855f7") },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform vec3 uCyan;
        uniform vec3 uPurple;
        varying vec2 vUv;

        void main() {
          float gridX = smoothstep(0.985, 1.0, sin((vUv.x + uTime * 0.018) * 120.0) * 0.5 + 0.5);
          float gridY = smoothstep(0.988, 1.0, sin((vUv.y - uTime * 0.012) * 90.0) * 0.5 + 0.5);
          float city = smoothstep(0.94, 1.0, sin((vUv.x * 70.0) + sin(vUv.y * 40.0) + uTime * 0.8) * 0.5 + 0.5);
          float edge = smoothstep(0.28, 0.92, vUv.y);
          vec3 color = mix(uCyan, uPurple, vUv.x);
          float alpha = (gridX + gridY + city) * 0.22 * edge;
          gl_FragColor = vec4(color, alpha);
        }
      `,
    });
  }, []);

  useFrame((state, delta) => {
    lightMaterial.uniforms.uTime.value = state.clock.elapsedTime;
    if (planet.current) planet.current.rotation.y += delta * 0.01;
    if (lights.current) lights.current.rotation.y += delta * 0.024;
  });

  return (
    <group position={[1.15, -4.08, -2.25]} rotation={[0.04, 0, -0.12]}>
      <mesh ref={planet}>
        <sphereGeometry args={[5.55, 128, 64]} />
        <meshStandardMaterial color="#03101f" emissive="#062a62" emissiveIntensity={0.72} roughness={0.85} metalness={0.12} />
      </mesh>
      <mesh ref={lights} scale={[1.006, 1.006, 1.006]}>
        <sphereGeometry args={[5.57, 128, 64]} />
        <primitive object={lightMaterial} attach="material" />
      </mesh>
      <mesh scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[5.6, 128, 64]} />
        <meshBasicMaterial color="#38bdf8" wireframe transparent opacity={0.055} />
      </mesh>
    </group>
  );
}
