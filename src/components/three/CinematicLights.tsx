"use client";

export function CinematicLights() {
  return (
    <>
      <ambientLight intensity={0.34} />
      <pointLight position={[4.8, 4.2, 5.2]} intensity={7.5} color="#22d3ee" />
      <pointLight position={[-5.4, -1.8, 4.2]} intensity={6.5} color="#8b5cf6" />
      <pointLight position={[0, 0.8, 6.5]} intensity={4.8} color="#ffffff" />
      <spotLight position={[0, 7.5, 6]} angle={0.28} penumbra={1} intensity={7} color="#e0f2fe" />
    </>
  );
}
