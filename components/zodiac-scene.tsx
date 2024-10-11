"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Circle, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface PlanetProps {
  size: number;
  distance: number;
  color: string;
}

const Planet: React.FC<PlanetProps> = ({ size, distance, color }) => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current && distance !== 0) {
      const t = clock.getElapsedTime();
      ref.current.position.x = Math.sin(t) * distance;
      ref.current.position.z = Math.cos(t) * distance;
    }
  });

  return (
    <Sphere
      ref={ref}
      position={distance === 0 ? [0, 0, 0] : [distance, 0, 0]}
      args={[size, 32, 32]}
    >
      <meshStandardMaterial color={color} />
    </Sphere>
  );
};

Planet.displayName = "Planet";

const ZodiacCircle = ({ radius = 5 }: { radius?: number }) => {
  const texture = new THREE.TextureLoader().load("/mandala.svg");

  return (
    <Circle args={[radius, 64]} rotation={[-Math.PI / 2, 0, 0]}>
      <meshBasicMaterial
        map={texture}
        transparent={true}
        side={THREE.DoubleSide}
      />
    </Circle>
  );
};

export function ZodiacSceneComponent() {
  return (
    <Canvas
      camera={{ position: [0, 10, 0], fov: 50, up: [0, 0, -1], far: 1000 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <ZodiacCircle radius={5.5} />
      <Planet size={0.5} distance={0} color="#4299e1" />
      <Planet size={0.2} distance={3} color="#f6ad55" />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
