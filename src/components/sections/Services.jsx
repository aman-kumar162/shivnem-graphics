'use client';
import React from 'react';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    { name: 'Web Design', icon: '🎨', color: 'from-brand-2 to-brand-3' },
    { name: 'Web Development', icon: '💻', color: 'from-brand-1 to-brand-2' },
    { name: 'App Design', icon: '📱', color: 'from-color-teal to-brand-1' },
    { name: 'Branding Design', icon: '✨', color: 'from-brand-2 to-color-gold' },
    { name: '3D Modeling', icon: '🎭', color: 'from-brand-3 to-brand-2' },
    { name: 'Digital Marketing', icon: '📊', color: 'from-color-teal to-brand-2' },
    { name: 'Animation', icon: '🎬', color: 'from-brand-1 to-brand-3' },
    { name: 'UI/UX', icon: '🎯', color: 'from-brand-2 to-color-gold' },
    { name: 'Print Design', icon: '🖨️', color: 'from-color-sage to-brand-2' },
  ];

  return (
    <section id="services" className="w-full relative overflow-hidden py-2 sm:py-20 lg:py-28 dotted-red-overlay">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl content-layer">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-animate" ref={titleRef}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#000080' }}>
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg scroll-animate" ref={subtitleRef} style={{ color: 'var(--text-on-light-muted)' }}>
            A wide range of creative and technical services to bring your ideas to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredService(i)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative overflow-hidden rounded-2xl p-6 sm:p-8 h-full
                         transition-all duration-300 ease-out
                         border border-blue-200
                         hover:border-blue-400
                         card-lift card-glow
                         bg-gradient-to-br from-white to-blue-50
                         hover:shadow-lg"
            >
              {/* Animated gradient background overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 transition-opacity duration-300 -z-10`}
              />

              <div className="relative z-10">
                <div className="mb-4 text-4xl">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-brand-2 transition-colors duration-300" style={{ color: '#000080' }}>
                  {service.name}
                </h3>
                {/* Animated bottom line indicator */}
                <div className="h-1 w-0 bg-gradient-to-r from-brand-2 to-brand-3 rounded-full group-hover:w-12 transition-all duration-500" />
              </div>

              {/* Background decoration */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-tl from-brand-2 to-transparent opacity-0 group-hover:opacity-20 rounded-full blur-2xl transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Call-to-action */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center scroll-animate">
          <p className="text-muted text-sm sm:text-base mb-6">
            Interested in working together? Let's discuss your project.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 rounded-lg font-semibold
                       bg-gradient-to-r from-brand-2 to-brand-3
                       text-white transition-all duration-300
                       hover:shadow-glow hover:scale-105
                       border border-white/20"
          >
            Start Your Project
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;