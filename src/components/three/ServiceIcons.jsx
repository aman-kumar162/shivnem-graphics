import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';

export function ServiceIcons({ position = [0, 0, 0] }) {
  const groupRef = useRef();
  
  const shapes = useMemo(() => [
    {
      geometry: 'octahedron',
      position: [-3, 1, 0],
      color: '#14B8A6',
      scale: 1.2,
      speed: 1.5,
      distort: 0.3,
      wobble: 1
    },
    {
      geometry: 'dodecahedron',
      position: [3, -1, -2],
      color: '#818CF8',
      scale: 1,
      speed: 2,
      distort: 0.2,
      wobble: 2
    },
    {
      geometry: 'icosahedron',
      position: [0, 3, -1],
      color: '#F472B6',
      scale: 0.8,
      speed: 1.8,
      distort: 0.4,
      wobble: 1.5
    },
    {
      geometry: 'sphere',
      position: [-2, -2, -3],
      color: '#34D399',
      scale: 0.7,
      speed: 1.2,
      distort: 0.5,
      wobble: 0.8
    }
  ], []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = Math.sin(t / 4) * 0.2;
    groupRef.current.position.y = Math.sin(t / 2) * 0.1;
  });

  return (
    <group ref={groupRef} position={position}>
      {shapes.map((shape, index) => (
        <Float 
          key={index}
          speed={shape.speed} 
          rotationIntensity={0.5} 
          floatIntensity={0.8}
          position={shape.position}
        >
          <mesh scale={shape.scale}>
            {shape.geometry === 'sphere' ? (
              <sphereGeometry args={[1, 32, 32]} />
            ) : shape.geometry === 'octahedron' ? (
              <octahedronGeometry />
            ) : shape.geometry === 'dodecahedron' ? (
              <dodecahedronGeometry />
            ) : (
              <icosahedronGeometry />
            )}
            {index % 2 === 0 ? (
              <MeshDistortMaterial
                color={shape.color}
                speed={shape.distort}
                distort={0.4}
                metalness={0.8}
                roughness={0.2}
              />
            ) : (
              <MeshWobbleMaterial
                color={shape.color}
                factor={shape.wobble}
                speed={shape.speed}
                metalness={0.8}
                roughness={0.2}
              />
            )}
          </mesh>
        </Float>
      ))}
    </group>
  );
}