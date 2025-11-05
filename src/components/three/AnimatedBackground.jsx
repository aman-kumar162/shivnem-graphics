import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export function AnimatedBackground() {
  const particlesRef = useRef();
  const particles = useRef([]);
  const count = 1000;

  useEffect(() => {
    particles.current = Array(count).fill().map(() => ({
      position: new THREE.Vector3(
        Math.random() * 20 - 10,
        Math.random() * 20 - 10,
        Math.random() * 20 - 10
      ),
      velocity: new THREE.Vector3(
        Math.random() * 0.02 - 0.01,
        Math.random() * 0.02 - 0.01,
        Math.random() * 0.02 - 0.01
      )
    }));
  }, []);

  useFrame(() => {
    const positions = particlesRef.current.geometry.attributes.position.array;

    particles.current.forEach((particle, i) => {
      particle.position.add(particle.velocity);

      // Boundary check and reset
      ['x', 'y', 'z'].forEach(axis => {
        if (Math.abs(particle.position[axis]) > 10) {
          particle.position[axis] *= -0.9;
        }
      });

      positions[i * 3] = particle.position.x;
      positions[i * 3 + 1] = particle.position.y;
      positions[i * 3 + 2] = particle.position.z;
    });

    particlesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={new Float32Array(count * 3)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#40E0D0"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}