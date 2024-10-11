"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Circle, OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";

interface PlanetProps {
  size: number;
  distance: number;
  texture: string;
  angle?: number; // New prop for starting angle in radians
}

const Planet: React.FC<PlanetProps> = ({
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
      position={[initialX, 0, initialZ]}
      args={[size, 32, 32]}
      rotation={[Math.PI / -2, 0, 0]}
    >
      <meshStandardMaterial map={map} />
    </Sphere>
  );
};

Planet.displayName = "Planet";

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
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} />
      <ZodiacCircle radius={5.5} />
      <Planet size={0.34} distance={0} texture="/celestials/earth.jpg" />
      <Planet
        size={0.29}
        distance={2.8}
        angle={Math.PI / 1.9}
        texture="/celestials/mars.jpg"
      />
      <Planet
        size={0.38}
        distance={2.65}
        angle={Math.PI / 1.24}
        texture="/celestials/jupiter.jpg"
      />
      <Planet
        size={0.28}
        distance={2.2}
        angle={Math.PI / 1.07}
        texture="/celestials/saturn.jpg"
      />
      <Planet
        size={0.24}
        distance={2.5}
        angle={Math.PI / 0.9}
        texture="/celestials/pluto.jpg"
      />
      <Planet
        size={0.27}
        distance={2.1}
        angle={Math.PI * 1.34}
        texture="/celestials/neptune.jpg"
      />

      <Planet
        size={0.29}
        distance={2.8}
        angle={Math.PI * 1.37}
        texture="/celestials/uranus.jpg"
      />

      <Planet
        size={0.19}
        distance={2.6}
        angle={Math.PI * 1.53}
        texture="/celestials/chiron.jpg"
      />

      <Planet
        size={0.21}
        distance={2.8}
        angle={Math.PI * 1.63}
        texture="/celestials/moon.jpg"
      />

      <Planet
        size={0.19}
        distance={2.1}
        angle={Math.PI * 1.72}
        texture="/celestials/lilith.jpg"
      />

      <Planet
        size={0.195}
        distance={1.9}
        angle={Math.PI * 1.8}
        texture="/celestials/north_node.jpg"
      />

      <Planet
        size={0.24}
        distance={2.2}
        angle={Math.PI * 1.95}
        texture="/celestials/mercury.jpg"
      />
      <Planet
        size={0.26}
        distance={2.1}
        angle={Math.PI * 2.1}
        texture="/celestials/venus.jpg"
      />

      <Planet
        size={0.4}
        distance={2.7}
        angle={Math.PI * 2.34}
        texture="/celestials/sun.jpg"
      />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
