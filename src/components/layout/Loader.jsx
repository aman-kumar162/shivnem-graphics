'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = () => {
  const loaderRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!loaderRef.current) return;

    // Add loading class to body immediately
    document.body.classList.add('is-loading');

    timelineRef.current = gsap.timeline({
      onComplete: () => {
        if (loaderRef.current) {
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.5,
            ease: 'power2.inOut',
            onComplete: () => {
              // Remove loading class when animation completes
              document.body.classList.remove('is-loading');
            }
          });
        }
      }
    });

    const timeline = timelineRef.current;
    const loader = loaderRef.current;

    if (loader) {
      // Initial state setup
      gsap.set(loader.querySelector('.loader-logo h2'), { opacity: 0, y: 30 });
      gsap.set(loader.querySelector('.loader-tagline'), { opacity: 0, y: 20 });
      gsap.set(loader.querySelector('.loader-bar'), { scaleX: 0 });
      gsap.set(loader.querySelector('.loader-progress'), { width: '0%' });

      timeline
        .to(loader.querySelector('.loader-logo h2'), {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out'
        })
        .to(loader.querySelector('.loader-tagline'), {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out'
        }, '-=0.4')
        .to(loader.querySelector('.loader-bar'), {
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.2')
        .to(loader.querySelector('.loader-progress'), {
          width: '100%',
          duration: 1.2,
          ease: 'power1.inOut'
        });
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      // Ensure class is removed on unmount
      document.body.classList.remove('is-loading');
    };
  }, []);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0A0118]"
    >
      <div className="w-full max-w-md p-8 text-center relative z-10">
        <div className="loader-logo mb-8">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-3 tracking-tight" style={{ fontFamily: 'Clash Display, sans-serif' }}>Shivnem Graphics</h2>
          <div className="loader-tagline text-lg text-blue-200 font-medium tracking-wide">Premium Printing Solutions</div>
        </div>
        <div className="loader-bar w-full h-1.5 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
          <div className="loader-progress h-full w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
        </div>
        <div className="mt-6 text-sm flex justify-center space-x-4 font-medium tracking-wide text-blue-200/60">
          <span>EST. 2010</span>
          <span>•</span>
          <span>AMBALA CANTT</span>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-orange-900/20 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
    </div>
  );
};

export default Loader;