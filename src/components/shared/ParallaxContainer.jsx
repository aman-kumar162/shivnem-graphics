import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setupParallax } from '../../utils/animations';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ParallaxContainer = ({ children, speed = 20, className = '' }) => {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    if (containerRef.current) {
      setupParallax(containerRef.current);
    }
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ParallaxContainer;