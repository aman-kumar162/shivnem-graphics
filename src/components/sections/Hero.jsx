'use client';
import React, { useEffect } from 'react';
import Button from '../shared/Button';
import gsap from 'gsap';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
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
    });

    return () => ctx.revert();
  }, []);


  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20 px-4 sm:px-6 lg:px-8 bg-theme">
      <div className="absolute inset-0 -z-10" />

      {/* Subtle decorative accents */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full opacity-10" style={{ backgroundColor: 'var(--brand-blue)' }}></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-10" style={{ backgroundColor: 'var(--brand-orange)' }}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full opacity-10" style={{ backgroundColor: 'var(--brand-purple)' }}></div>

      <div className="relative z-10 text-center max-w-4xl w-full">
        <h1 className="hero-title text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight" style={{ color: 'var(--text-white)' }}>
          Shivnem Graphics
        </h1>
        
        <h2 className="hero-subtitle text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mt-4 sm:mt-6" style={{
          color: 'var(--text-white)',
        }}>
          Transform Your Ideas<br className="hidden sm:block" />
          Into Stunning<br />
          Print Reality
        </h2>

        <p className="hero-description text-sm sm:text-base lg:text-lg leading-relaxed my-6 sm:my-8 max-w-2xl mx-auto" style={{ color: 'var(--text-white-muted)' }}>
          Your complete printing partner in Ambala Cantt, delivering premium quality with creative excellence for all your business and personal needs.
        </p>

        <div className="hero-buttons flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
          <Button 
            variant="primary"
            className="w-full sm:w-auto px-8 py-3 text-white hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold"
            style={{ backgroundColor: 'var(--brand-orange)' }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get Started Now
          </Button>
          <Button 
            variant="outline"
            className="w-full sm:w-auto px-8 py-3 border-2 font-semibold hover:scale-105 transition-all duration-300"
            style={{ borderColor: 'var(--text-white)', color: 'var(--text-white)', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Portfolio
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: 'var(--text-white)' }}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
