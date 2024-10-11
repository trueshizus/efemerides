"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Planet from "./planet";
// import ZodiacRing from "./zodiac-ring";

export default function Scene() {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* <Stars /> */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -0.1]}>
        <circleGeometry args={[5, 64]} />
        <meshStandardMaterial color="#303030" />
      </mesh>
      <Planet position={[0, 0, 0]} />
      {/* <ZodiacRing /> */}
    </Canvas>
  );
}
