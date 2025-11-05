import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export function PrintingMachine(props) {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <mesh ref={meshRef} {...props}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#40E0D0" metalness={0.8} roughness={0.2} />
    </mesh>
  );
}