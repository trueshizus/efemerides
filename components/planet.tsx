import React from "react";
import { useTexture } from "@react-three/drei";

export function Planet(props: any) {
  const texture = useTexture("/celestials/earth.png");

  return (
    <mesh {...props}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
