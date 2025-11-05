import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { setupScrollReveal } from '../../utils/animations';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ScrollReveal = ({ children, selector = '.scroll-item', className = '' }) => {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll(selector);
      setupScrollReveal(elements);
    }
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;