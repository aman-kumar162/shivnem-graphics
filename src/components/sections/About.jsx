'use client';
import React from 'react';

const About = () => {
  return (
    <section id="about" className="w-full relative py-16 sm:py-20 lg:py-28 overflow-hidden" style={{ background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(110, 60, 240, 0.06) 100%)' }}>
      <div className="absolute inset-0 opacity-5 blur-3xl -z-10"></div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-7xl mx-auto">
          <div className="text-left">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              About Shivnem Graphics
            </h2>
            <p className="font-body text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
              Founded in 2010, Shivnem Graphics has evolved into Ambala's premier printing solutions provider. We combine cutting-edge technology with artistic expertise to deliver exceptional print quality and creative excellence for businesses and individuals alike.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="card-bg p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-sm border-accent border hover:border-teal-400/60 transition-all">
                <h4 className="font-heading text-lg sm:text-xl font-semibold mb-2 text-accent">✓ Premium Quality</h4>
                <p className="font-body text-xs sm:text-sm text-gray-300">State-of-the-art printing technology ensuring superior results and vibrant colors.</p>
              </div>
              <div className="card-bg p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-sm border-accent border hover:border-teal-400/60 transition-all">
                <h4 className="font-heading text-lg sm:text-xl font-semibold mb-2 text-accent">⚡ Fast Turnaround</h4>
                <p className="font-body text-xs sm:text-sm text-gray-300">Quick delivery without compromising on quality or attention to detail.</p>
              </div>
              <div className="card-bg p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-sm border-accent border hover:border-teal-400/60 transition-all">
                <h4 className="font-heading text-lg sm:text-xl font-semibold mb-2 text-accent">🎨 Creative Design</h4>
                <p className="font-body text-xs sm:text-sm text-gray-300">Expert designers crafting unique concepts that match your brand identity perfectly.</p>
              </div>
              <div className="card-bg p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-lg backdrop-blur-sm border-accent border hover:border-teal-400/60 transition-all">
                <h4 className="font-heading text-lg sm:text-xl font-semibold mb-2 text-accent">💼 Custom Solutions</h4>
                <p className="font-body text-xs sm:text-sm text-gray-300">Tailored printing solutions for any project size, from small startups to large corporations.</p>
              </div>
            </div>
          </div>
          <div className="relative h-64 sm:h-80 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-[var(--theme-accent)] rounded-xl sm:rounded-2xl shadow-2xl transform -rotate-3"></div>
            <div className="absolute inset-0 bg-gray-800 rounded-xl sm:rounded-2xl shadow-2xl p-6 sm:p-8 flex items-center justify-center">
              <p className="font-heading text-2xl sm:text-3xl font-bold text-center text-teal-300">Your Vision, Printed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;