"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { AdditiveBlending, CatmullRomCurve3, Color, DoubleSide, Group, Mesh, ShaderMaterial, SphereGeometry, TubeGeometry, Vector3 } from "three";

function orbit(rx: number, ry: number, wave: number) {
  const p: Vector3[] = [];
  for (let i = 0; i <= 460; i++) {
    const a = (i / 460) * Math.PI * 2;
    p.push(new Vector3(Math.cos(a) * rx, Math.sin(a) * ry, Math.sin(a * 3 + wave) * 0.08));
  }
  return new TubeGeometry(new CatmullRomCurve3(p, true), 560, 0.009, 8, true);
}

function ringMaterial(color: string, opacity: number) {
  return new ShaderMaterial({
    transparent: true,
    side: DoubleSide,
    depthWrite: false,
    blending: AdditiveBlending,
    uniforms: {
      uTime: { value: 0 },
      uColor: { value: new Color(color) },
      uOpacity: { value: opacity },
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
      uniform vec3 uColor;
      uniform float uOpacity;
      varying vec2 vUv;

      void main() {
        float stream = sin(vUv.x * 88.0 - uTime * 7.2);
        float pulse = smoothstep(0.12, 1.0, stream * 0.5 + 0.5);
        float dash = smoothstep(0.04, 0.76, fract(vUv.x * 4.4 - uTime * 0.34));
        vec3 c = uColor * (1.25 + pulse * 3.8);
        gl_FragColor = vec4(c, uOpacity * (0.18 + pulse) * dash);
      }
    `,
  });
}

function pointOnOrbit(rx: number, ry: number, angle: number, wave: number) {
  return new Vector3(
    Math.cos(angle) * rx,
    Math.sin(angle) * ry,
    Math.sin(angle * 3 + wave) * 0.08
  );
}

export function EnergyRings() {
  const root = useRef<Group>(null);
  const a = useRef<Mesh>(null);
  const b = useRef<Mesh>(null);
  const c = useRef<Mesh>(null);
  const sparks = useRef<Group>(null);

  const ga = useMemo(() => orbit(2.28, 1.0, 0.1), []);
  const gb = useMemo(() => orbit(2.18, 0.92, 1.4), []);
  const gc = useMemo(() => orbit(2.55, 1.1, 2.4), []);

  const ma = useMemo(() => ringMaterial("#18dfff", 0.9), []);
  const mb = useMemo(() => ringMaterial("#b026ff", 0.82), []);
  const mc = useMemo(() => ringMaterial("#45a7ff", 0.34), []);

  const sparkGeo = useMemo(() => new SphereGeometry(0.035, 16, 16), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    ma.uniforms.uTime.value = t;
    mb.uniforms.uTime.value = t * 0.92;
    mc.uniforms.uTime.value = t * 0.7;

    if (root.current) {
      root.current.rotation.y = Math.sin(t * 0.13) * 0.08;
      root.current.rotation.x = Math.sin(t * 0.11) * 0.04;
    }

    if (a.current) {
      a.current.rotation.z += delta * 0.25;
      a.current.rotation.x = 1.08;
      a.current.rotation.y = -0.22;
    }

    if (b.current) {
      b.current.rotation.z -= delta * 0.29;
      b.current.rotation.x = 0.76;
      b.current.rotation.y = 1.14;
    }

    if (c.current) {
      c.current.rotation.z += delta * 0.1;
      c.current.rotation.x = 1.44;
      c.current.rotation.y = -0.55;
    }

    if (sparks.current) {
      sparks.current.children.forEach((child, index) => {
        const angle = t * (0.75 + index * 0.08) + index * 1.7;
        const p = index % 2 === 0
          ? pointOnOrbit(2.28, 1.0, angle, 0.1)
          : pointOnOrbit(2.18, 0.92, -angle, 1.4);

        child.position.copy(p);
        child.scale.setScalar(0.75 + Math.sin(t * 4 + index) * 0.25);
      });
    }
  });

  return (
    <group ref={root}>
      <mesh ref={a} geometry={ga} material={ma} />
      <mesh ref={b} geometry={gb} material={mb} />
      <mesh ref={c} geometry={gc} material={mc} />

      <group ref={sparks}>
        {Array.from({ length: 10 }).map((_, i) => (
          <mesh key={i} geometry={sparkGeo}>
            <meshBasicMaterial
              color={i % 2 === 0 ? "#22e7ff" : "#d946ef"}
              transparent
              opacity={0.9}
              blending={AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}
