import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function ZodiacRing() {
  const ringRef = useRef();

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.1; // Slow rotation
    }
  });

  return (
    <group ref={ringRef}>
      {[...Array(12)].map((_, index) => (
        <mesh
          key={index}
          position={[
            Math.cos((index / 12) * Math.PI * 2) * 4,
            Math.sin((index / 12) * Math.PI * 2) * 4,
            0,
          ]}
        >
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial color="#f4f1de" />
        </mesh>
      ))}
    </group>
  );
}
