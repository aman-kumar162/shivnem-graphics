'use client';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../shared/Button';
import gsap from 'gsap';
import Link from 'next/link';
import Lottie from 'lottie-react';

const Hero = () => {
  const containerRef = useRef(null);
  const graphicsRef = useRef(null);
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Load Lottie animation
    fetch('/servicesimages/graphic-designer.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Failed to load animation:', err));
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Hero text animations
      const tl = gsap.timeline();
      
      tl.from('.hero-title', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })
      .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4')
      .from('.hero-description', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4')
      .from('.hero-buttons', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.4');

      // 3D graphic floating animation
      if (graphicsRef.current) {
        gsap.to(graphicsRef.current, {
          y: -20,
          duration: 4,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 sm:px-6 lg:px-8" style={{ background: 'radial-gradient(circle at center, #4d2817 0%, #2d1a0a 20%, #1a0a00 35%, #0a0e27 60%, #0a0a0a 100%)' }}>
      <div className="absolute inset-0 -z-10" />

      {/* Background neon accents */}
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-15 blur-3xl" style={{ backgroundColor: '#E63946' }}></div>
      <div className="absolute bottom-32 right-10 w-40 h-40 rounded-full opacity-15 blur-3xl" style={{ backgroundColor: '#E63946' }}></div>

      <div ref={containerRef} className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="hero-title mb-2">
              <span className="inline-block px-4 py-1 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 text-sm font-semibold mb-6">
                Premium Printing Excellence
              </span>
            </div>

            <div className="hero-title">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
                Shivnem <br className="hidden sm:block" />
                Graphics
              </h1>
            </div>
            
            <div className="hero-subtitle">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-normal text-gray-200 mb-6">
                Discover our comprehensive range of printing services, from graphic design to advanced DTF UV transfers. Each service showcases our commitment to quality, precision, and customer satisfaction.
              </h2>
            </div>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 max-w-lg">
              <Link href="/services">
                <Button 
                  variant="primary"
                  className="w-full sm:w-auto px-8 py-3 text-white font-semibold bg-red-600 hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/50 hover:scale-105 transition-all duration-300"
                >
                  Explore Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button 
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-3 border-2 border-gray-400 text-gray-200 font-semibold hover:scale-105 transition-all duration-300 hover:bg-gray-400/10"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Neon Graphic */}
          <div className="relative h-full min-h-[400px] lg:min-h-[500px] flex items-center justify-center">
            <div ref={graphicsRef} className="relative w-full h-full flex items-center justify-center">
              {animationData && (
                <Lottie 
                  animationData={animationData}
                  loop={true}
                  autoplay={true}
                  className="w-full h-full max-w-sm lg:max-w-md"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <svg className="w-6 h-6 text-neon-cyan animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
