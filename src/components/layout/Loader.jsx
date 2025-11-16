'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = () => {
  const loaderRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    timelineRef.current = gsap.timeline({
      onComplete: () => {
        if (loaderRef.current) {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.5,
            onComplete: () => {
              if (loaderRef.current) {
                loaderRef.current.style.display = 'none';
              }
            }
          });
        }
      }
    });

    const timeline = timelineRef.current;
    const loader = loaderRef.current;

    if (loader) {
      timeline
        .set(loader, { opacity: 1, display: 'flex' })
        .from(loader.querySelector('.loader-logo h2'), {
          opacity: 0,
          y: 30,
          duration: 1,
          ease: 'power3.out'
        })
        .from(loader.querySelector('.loader-tagline'), {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.5')
        .from(loader.querySelector('.loader-bar'), {
          scaleX: 0,
          duration: 1,
          ease: 'power1.inOut'
        }, '-=0.3')
        .to(loader.querySelector('.loader-progress'), {
          width: '100%',
          duration: 1.5,
          ease: 'power1.inOut'
        }, '-=0.5');
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 to-[var(--theme-accent)]"
      style={{ opacity: 0 }}
    >
      <div className="w-full max-w-md p-8 text-center">
        <div className="loader-logo mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">Shivnem Graphics</h2>
          <div className="loader-tagline text-lg text-gray-300">Premium Printing Solutions Since 2010</div>
        </div>
        <div className="loader-bar w-full h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="loader-progress h-full w-0 bg-teal-500 transform origin-left"></div>
        </div>
        <div className="mt-4 text-sm flex justify-center space-x-4">
          <span className="text-gray-300">5000+ Projects</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-300">15+ Years</span>
          <span className="text-gray-300">•</span>
          <span className="text-gray-300">800+ Clients</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;