import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';

export function TeamSpheres() {
  const groupRef = useRef();
  
  const teamColors = [
    '#14B8A6', // teal
    '#818CF8', // indigo
    '#F472B6', // pink
    '#34D399', // emerald
    '#FBBF24', // amber
    '#60A5FA'  // blue
  ];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {teamColors.map((color, i) => (
        <Float
          key={i}
          speed={1 + Math.random()}
          rotationIntensity={0.2}
          floatIntensity={0.8}
        >
          <group
            position={[
              Math.sin((i / 6) * Math.PI * 2) * 4,
              Math.cos((i / 6) * Math.PI * 2) * 0.5,
              Math.cos((i / 6) * Math.PI * 2) * 4
            ]}
          >
            <mesh>
              <sphereGeometry args={[0.8, 32, 32]} />
              <meshStandardMaterial
                color={color}
                metalness={0.8}
                roughness={0.2}
                emissive={color}
                emissiveIntensity={0.2}
              />
            </mesh>
            <mesh>
              <ringGeometry args={[0.9, 1, 32]} />
              <meshStandardMaterial
                color={color}
                metalness={0.9}
                roughness={0.1}
                transparent
                opacity={0.3}
              />
            </mesh>
          </group>
        </Float>
      ))}
    </group>
  );
}