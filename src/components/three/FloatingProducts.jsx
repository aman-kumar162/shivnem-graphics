import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingProducts({ count = 15 }) {
  const groupRef = useRef();
  const meshes = useRef([]);

  // Generate random positions and rotations
  const items = Array.from({ length: count }, (_, i) => ({
    position: [
      Math.random() * 20 - 10,
      Math.random() * 20 - 10,
      Math.random() * 20 - 10
    ],
    rotation: [
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    ],
    speed: 0.2 + Math.random() * 0.5,
    scale: 0.5 + Math.random() * 0.5
  }));

  useFrame((state) => {
    meshes.current.forEach((mesh, i) => {
      if (mesh) {
        mesh.rotation.x += 0.01 * items[i].speed;
        mesh.rotation.y += 0.02 * items[i].speed;
      }
    });
  });

  return (
    <group ref={groupRef}>
      {items.map((item, i) => (
        <Float
          key={i}
          speed={item.speed}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <mesh
            ref={(el) => (meshes.current[i] = el)}
            position={item.position}
            rotation={item.rotation}
            scale={item.scale}
          >
            {i % 3 === 0 ? (
              <boxGeometry args={[1, 1.4, 0.1]} /> // Document shape
            ) : i % 3 === 1 ? (
              <cylinderGeometry args={[0.5, 0.5, 0.2, 32]} /> // Round shape
            ) : (
              <boxGeometry args={[1.2, 0.8, 0.1]} /> // Card shape
            )}
            <meshStandardMaterial
              color={new THREE.Color().setHSL(i * 0.1, 0.8, 0.6)}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}