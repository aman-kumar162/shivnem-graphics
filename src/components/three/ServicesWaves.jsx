'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ServicesWaves = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create wave geometry
    const geometry = new THREE.PlaneGeometry(10, 10, 50, 50);
    const material = new THREE.MeshPhongMaterial({
      color: 0xff5050,
      transparent: true,
      opacity: 0.3,
      wireframe: true,
      side: THREE.DoubleSide,
    });

    const wave = new THREE.Mesh(geometry, material);
    wave.rotation.x = -Math.PI / 4;
    scene.add(wave);

    // Second wave layer
    const geometry2 = new THREE.PlaneGeometry(10, 10, 50, 50);
    const material2 = new THREE.MeshPhongMaterial({
      color: 0xff3c5a,
      transparent: true,
      opacity: 0.2,
      wireframe: true,
      side: THREE.DoubleSide,
    });

    const wave2 = new THREE.Mesh(geometry2, material2);
    wave2.rotation.x = -Math.PI / 4;
    wave2.position.z = -0.5;
    scene.add(wave2);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xff5050, 1.5, 100);
    pointLight.position.set(0, 3, 3);
    scene.add(pointLight);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Animate wave vertices
      const positions = wave.geometry.attributes.position;
      const positions2 = wave2.geometry.attributes.position;

      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = Math.sin(x * 0.5 + time) * 0.3 + Math.cos(y * 0.5 + time * 0.8) * 0.3;
        positions.setZ(i, z);

        const z2 = Math.sin(x * 0.5 + time * 1.2) * 0.25 + Math.cos(y * 0.5 + time * 0.6) * 0.25;
        positions2.setZ(i, z2);
      }

      positions.needsUpdate = true;
      positions2.needsUpdate = true;

      wave.rotation.z = time * 0.1;
      wave2.rotation.z = -time * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="threejs-canvas-container" />;
};

export default ServicesWaves;
