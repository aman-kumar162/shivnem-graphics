import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animateIn } from '../../utils/animations';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const containerRef = useRef(null);
  
  useGSAP(() => {
    if (containerRef.current) {
      const element = containerRef.current;
      
      switch (direction) {
        case 'left':
          gsap.from(element, {
            opacity: 0,
            x: -50,
            duration: 1,
            delay,
            ease: 'power3.out'
          });
          break;
        case 'right':
          gsap.from(element, {
            opacity: 0,
            x: 50,
            duration: 1,
            delay,
            ease: 'power3.out'
          });
          break;
        case 'down':
          gsap.from(element, {
            opacity: 0,
            y: -50,
            duration: 1,
            delay,
            ease: 'power3.out'
          });
          break;
        case 'up':
        default:
          animateIn(element, delay);
          break;
      }
    }
  }, []);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default FadeIn;