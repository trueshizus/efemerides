"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Circle, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { celestials } from "./celestials";
interface CelestialProps {
  size: number;
  distance: number;
  texture: string;
  angle?: number; // New prop for starting angle in radians
}

const Celestial: React.FC<CelestialProps> = ({
  size,
  distance,
  texture,
  angle = 0,
}) => {
  const ref = useRef<THREE.Mesh>(null);
  const map = useTexture(texture);

  useFrame(({ clock }) => {
    if (ref.current && distance !== 0) {
      const baseSpeed = 1; // Adjust this value to change overall rotation speed
      const speed = baseSpeed / distance; // Inverse square root relationship
      const t = clock.getElapsedTime() * speed;
      ref.current.position.x = Math.sin(t + angle) * distance;
      ref.current.position.z = Math.cos(t + angle) * distance;
    }
  });

  // Calculate initial position based on angle
  const initialX = distance !== 0 ? Math.sin(angle) * distance : 0;
  const initialZ = distance !== 0 ? Math.cos(angle) * distance : 0;

  return (
    <Sphere
      ref={ref}
      position={[initialX, 0.3, initialZ]}
      args={[size, 32, 32]}
      rotation={[Math.PI / -2, 0, 0]}
    >
      <meshStandardMaterial map={map} metalness={0.2} roughness={0.8} />
    </Sphere>
  );
};

const ZodiacCircle = ({ radius = 5 }: { radius?: number }) => {
  const texture = new THREE.TextureLoader().load("/man.svg");

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
      <ambientLight intensity={0.3} />
      <pointLight
        position={[0, 1.7, 0]}
        intensity={6}
        distance={10}
        decay={2}
      />
      <ZodiacCircle radius={5.5} />
      {celestials.map((celestial) => (
        <Celestial key={celestial.name} {...celestial} />
      ))}

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
