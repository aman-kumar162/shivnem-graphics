'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PortfolioGrid = () => {
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
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Create 3D grid of cubes
    const cubes = [];
    const gridSize = 8;
    const spacing = 1.2;

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const material = new THREE.MeshPhongMaterial({
          color: 0xff5050,
          transparent: true,
          opacity: 0.4,
        });

        const cube = new THREE.Mesh(geometry, material);
        cube.position.x = (x - gridSize / 2) * spacing;
        cube.position.y = (y - gridSize / 2) * spacing;
        cube.position.z = 0;

        cube.userData = {
          originalY: cube.position.y,
          delay: (x + y) * 0.1,
        };

        cubes.push(cube);
        scene.add(cube);
      }
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff5050, 1, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff3c5a, 0.8, 50);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      cubes.forEach((cube, index) => {
        // Wave effect
        const wave = Math.sin(time + cube.userData.delay) * 0.5;
        cube.position.z = wave;

        // Rotation
        cube.rotation.x = time * 0.5 + index * 0.01;
        cube.rotation.y = time * 0.3 + index * 0.01;

        // Mouse influence
        const distX = cube.position.x - mouseX * 5;
        const distY = cube.position.y - mouseY * 5;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        if (distance < 3) {
          cube.scale.set(1.2, 1.2, 1.2);
          cube.material.opacity = 0.7;
        } else {
          cube.scale.set(1, 1, 1);
          cube.material.opacity = 0.4;
        }
      });

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
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="threejs-canvas-container" />;
};

export default PortfolioGrid;
