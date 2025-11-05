'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Button from '../shared/Button';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
          duration: 0.8
        }
      });

      tl.from('.hero-content > *', {
        y: 50,
        opacity: 0,
        stagger: 0.2
      })
      .from('.hero-stats > *', {
        y: 30,
        opacity: 0,
        stagger: 0.1
      }, '-=0.5');

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen pt-32 pb-16 bg-gradient-to-b from-teal-50/50 via-cream-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(45,212,191,0.15)_0%,transparent_40%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.1)_0%,transparent_30%)]"></div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 hero-content">
          <span className="inline-block px-4 py-2 bg-teal-50 text-teal-600 rounded-full font-medium text-sm shadow-sm">
            ★ Premium Printing Solutions
          </span>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Shivnem Graphics
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Transform Your Ideas<br />
              Into Stunning<br />
              Print Reality
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Your complete printing partner in Ambala Cantt, delivering premium quality with creative excellence for all your business and personal needs
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Premium Quality
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Fast Turnaround
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Custom Solutions
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Competitive Pricing
            </div>
          </div>

          <p className="text-gray-600 font-medium">
            📍 Ambala Cantt, Haryana
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              variant="primary"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started Now
            </Button>
            <Button 
              variant="outline"
              onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16 hero-stats">
          <div className="p-6 bg-white/80 rounded-xl shadow-sm backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">5000+</h3>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="p-6 bg-white/80 rounded-xl shadow-sm backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">15+</h3>
            <p className="text-gray-600">Years Experience</p>
          </div>
          <div className="p-6 bg-white/80 rounded-xl shadow-sm backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">800+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          <div className="p-6 bg-white/80 rounded-xl shadow-sm backdrop-blur-sm">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">98%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;