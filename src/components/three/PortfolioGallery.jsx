import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, Float, Text3D } from '@react-three/drei';

export function PortfolioGallery({ position = [0, 0, 0] }) {
  const groupRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.1;
  });

  const items = [
    { position: [-2, 0, 0], color: '#14B8A6', scale: 1.2 },
    { position: [2, 0, 0], color: '#818CF8', scale: 1 },
    { position: [0, 2, 0], color: '#F472B6', scale: 1.1 },
    { position: [0, -2, 0], color: '#34D399', scale: 0.9 },
  ];

  return (
    <group ref={groupRef} position={position}>
      {items.map((item, index) => (
        <Float 
          key={index}
          speed={(1 + index) * 0.5} 
          rotationIntensity={0.2} 
          floatIntensity={0.5}
        >
          <mesh position={item.position} scale={item.scale}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color={item.color}
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}