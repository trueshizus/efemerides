"use client";
import React from "react";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Circle, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const Planet = React.forwardRef<
  THREE.Mesh,
  { position: [number, number, number]; color: string; size: number }
>(({ position, color, size }, ref) => (
  <Sphere ref={ref} position={position} args={[size, 32, 32]}>
    <meshStandardMaterial color={color} />
  </Sphere>
));

Planet.displayName = "Planet";

const ZodiacCircle = () => (
  <Circle args={[5, 64]} rotation={[-Math.PI / 2, 0, 0]}>
    <meshBasicMaterial color="#4a5568" side={THREE.DoubleSide} />
  </Circle>
);

const OrbitingPlanet = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.x = Math.sin(t) * 3;
      ref.current.position.z = Math.cos(t) * 3;
    }
  });
  return <Planet ref={ref} position={[3, 0, 0]} color="#f6ad55" size={0.2} />;
};

export function ZodiacSceneComponent() {
  return (
    <Canvas
      camera={{ position: [0, 10, 0], fov: 50, up: [0, 0, -1], far: 1000 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ZodiacCircle />
      <Planet position={[0, 0, 0]} color="#4299e1" size={0.5} />
      <OrbitingPlanet />
      {/* <gridHelper
        args={[10, 10, "#718096", "#718096"]}
        rotation={[Math.PI / 2, 0, 0]}
      /> */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
