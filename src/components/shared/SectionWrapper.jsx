'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const SectionWrapper = ({ 
  id, 
  children, 
  variant = 'light',
  className = '',
  showTopTransition = true,
  showBottomTransition = true
}) => {
  const sectionRef = React.useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.from(
      sectionRef.current,
      {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          once: true
        }
      }
    );
  }, []);

  const backgrounds = {
    light: 'var(--page-bg)',
    blue: 'var(--section-about-bg)',
    purple: 'var(--section-services-bg)',
    orange: 'var(--section-products-bg)',
    magenta: 'var(--section-team-bg)',
    dark: 'var(--gradient-dark)'
  };

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative w-full py-16 sm:py-20 lg:py-28 overflow-hidden ${className}`}
      style={{ background: backgrounds[variant] }}
    >
      {showTopTransition && (
        <div 
          className="absolute top-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{ background: 'linear-gradient(180deg, var(--theme-bg), transparent)' }}
        />
      )}

      <div className="relative z-10">{children}</div>

      {showBottomTransition && (
        <div 
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-10"
          style={{ background: 'linear-gradient(0deg, var(--theme-bg), transparent)' }}
        />
      )}
    </section>
  );
};

export default SectionWrapper;
