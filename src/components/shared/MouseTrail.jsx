import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const MouseTrail = () => {
  const trailRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const circlesRef = useRef([]);

  useEffect(() => {
    const trail = trailRef.current;
    const numCircles = 12;
    const circles = [];

    // Create trail circles
    for (let i = 0; i < numCircles; i++) {
      const circle = document.createElement('div');
      circle.className = 'trail-circle';
      Object.assign(circle.style, {
        position: 'fixed',
        width: `${8 + i * 2}px`,
        height: `${8 + i * 2}px`,
        borderRadius: '50%',
        backgroundColor: 'rgba(20, 184, 166, 0.1)',
        pointerEvents: 'none',
        zIndex: 9999,
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'screen'
      });
      trail.appendChild(circle);
      circles.push(circle);
    }
    circlesRef.current = circles;

    // Mouse move handler
    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop
    let animationFrame;
    const animate = () => {
      const { x, y } = mouseRef.current;
      
      circles.forEach((circle, index) => {
        const nextCircle = circles[index + 1] || circles[0];
        const speed = 0.3 - (index * 0.02);
        
        const currentX = parseFloat(circle.style.left) || x;
        const currentY = parseFloat(circle.style.top) || y;
        
        const targetX = index === 0 ? x : parseFloat(nextCircle.style.left);
        const targetY = index === 0 ? y : parseFloat(nextCircle.style.top);
        
        const newX = currentX + (targetX - currentX) * speed;
        const newY = currentY + (targetY - currentY) * speed;
        
        circle.style.left = `${newX}px`;
        circle.style.top = `${newY}px`;
      });

      animationFrame = requestAnimationFrame(animate);
    };

    // Start animation
    window.addEventListener('mousemove', onMouseMove);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrame);
      circles.forEach(circle => circle.remove());
    };
  }, []);

  return <div ref={trailRef} className="pointer-events-none" />;
};

export default MouseTrail;