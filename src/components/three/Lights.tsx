"use client";

export function Lights() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <pointLight position={[4, 5, 5]} intensity={6} color="#38bdf8" />
      <pointLight position={[-5, -2, 4]} intensity={4} color="#8b5cf6" />
      <spotLight position={[0, 8, 5]} angle={0.35} penumbra={1} intensity={5} color="#ffffff" />
    </>
  );
}
