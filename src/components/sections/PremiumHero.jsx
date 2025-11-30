'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
import gsap from 'gsap';

export const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1
    }
  }
};

const PremiumHero = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Animated gradient background with GSAP for smooth color transitions
  useEffect(() => {
    if (!containerRef.current) return;
    
    const gradientAnimation = () => {
      const colors = [
        'linear-gradient(135deg, #0A0118 0%, #4A148C 30%, #1565C0 70%, #AD1457 100%)',
        'linear-gradient(135deg, #0F0C29 0%, #302B63 30%, #24243E 60%, #C2185B 100%)',
        'linear-gradient(135deg, #1A0B2E 0%, #880E4F 30%, #4A148C 70%, #0D47A1 100%)',
      ];

      
      let currentIndex = 0;
      
      const animate = () => {
        gsap.to(containerRef.current, {
          background: colors[currentIndex],
          duration: 8,
          ease: 'sine.inOut',
          onComplete: () => {
            currentIndex = (currentIndex + 1) % colors.length;
            animate();
          }
        });
      };
      
      animate();
    };
    
    gradientAnimation();
  }, []);
  
  // Animate elements when in view
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-deep-navy via-brand-mid-blue to-brand-purple"
      style={{
        backgroundSize: '400% 400%',
        backgroundImage: 'linear-gradient(135deg, #0A0118 0%, #4A148C 25%, #1565C0 50%, #AD1457 75%, #C2185B 100%)',
        animation: 'gradientShift 15s ease infinite',
      }}
    >
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-blue/20 to-brand-purple/20 opacity-70" />
      </div>

      {/* Animated Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              width: Math.random() * 10 + 2,
              height: Math.random() * 10 + 2,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto mt-4 px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="max-w-4xl mx-auto"
        >
          {/* Logo */}
          {/* <motion.div 
            variants={textVariants}
            className="inline-flex items-center justify-center gap-3 mb-8 p-4 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-2xl cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              borderColor: 'rgba(100, 181, 246, 0.5)',
              boxShadow: '0 0 30px rgba(100, 181, 246, 0.4), 0 0 60px rgba(100, 181, 246, 0.2)',
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ 
              type: 'spring',
              stiffness: 300,
              damping: 20
            }}
          >
            <motion.div 
              className="p-2 rounded-xl bg-gradient-to-br from-brand-blue to-brand-purple"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                rotate: {
                  duration: 0.5,
                  ease: 'easeInOut'
                }
              }}
            >
              <img 
                src="/sg.png" 
                alt="Shivnem Graphics Logo" 
                className="w-14 h-14 sm:w-16 sm:h-16"
              />
            </motion.div>
            <motion.div 
              className="text-left"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h1 className="text-2xl sm:text-3xl font-black text-white drop-shadow-2xl" style={{ fontFamily: 'Clash Display, sans-serif', textShadow: '0 2px 20px rgba(0,0,0,0.8)' }}>
                Shivnem Graphics
              </h1>
              <p className="text-sm sm:text-base font-bold drop-shadow-lg" style={{ color: '#64B5F6', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
                Premium Solutions
              </p>
            </motion.div>
          </motion.div> */}

          {/* Main Heading */}
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6"
            style={{ fontFamily: 'Clash Display, sans-serif', textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}
          >
            {['Transform', 'Your'].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-[0.2em] text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: 'easeOut'
                }}
                whileHover={{
                  y: [0, -10, 0],
                  scale: 1.05,
                  transition: { duration: 0.4 }
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="inline-block bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent font-black"
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: 1, 
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: 'easeOut'
              }}
              whileHover={{
                y: [0, -10, 0],
                scale: 1.05,
                transition: { duration: 0.4 }
              }}
            >
              Ideas
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto font-extrabold"
            style={{ fontFamily: 'Clash Display, sans-serif', textShadow: '0 3px 20px rgba(0,0,0,0.8)' }}
          >
            {['Into', 'Stunning'].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-[0.2em]"
                style={{ color: '#FFFFFF' }}
                initial={{ opacity: 0, y: 25 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + (index * 0.12),
                  ease: 'easeOut'
                }}
                whileHover={{
                  y: [0, -8, 0],
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="inline-block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-black"
              initial={{ opacity: 0, y: 25 }}
              animate={{ 
                opacity: 1, 
                y: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.74,
                ease: 'easeOut'
              }}
              whileHover={{
                y: [0, -8, 0],
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
            >
              Print Reality
            </motion.span>
          </motion.p>

          {/* Description */}
          <motion.div 
            className="text-base sm:text-lg mb-12 max-w-2xl mx-auto leading-relaxed font-semibold cursor-pointer"
            style={{ fontFamily: 'Satoshi, sans-serif', textShadow: '0 2px 15px rgba(0,0,0,0.7)' }}
          >
            {[
              'Your', 'complete', 'printing', 'partner', 'in', 'Ambala', 'Cantt,', 'delivering',
              'premium', 'quality', 'with', 'creative', 'excellence', 'for', 'all', 'your',
              'business', 'and', 'personal', 'needs.'
            ].map((word, index) => (
              <motion.span
                key={index}
                className="inline-block mr-[0.3em]"
                style={{ color: '#E3F2FD' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  ease: 'easeOut'
                }}
               
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(194, 24, 91, 0.6), 0 0 60px rgba(230, 81, 0, 0.4)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ 
                type: 'spring',
                stiffness: 300,
                damping: 20
              }}
              className="group relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden"
              style={{ 
                background: 'linear-gradient(45deg, #C2185B, #E65100)',
                boxShadow: '0 4px 15px rgba(194, 24, 91, 0.6)'
              }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {/* Moving Border Effect */}
              <div className="absolute inset-[-4px] rounded-xl overflow-hidden z-0">
                <div className="absolute inset-[-50%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] animate-[spin_4s_linear_infinite] opacity-40" />
              </div>
              
              {/* Button Content Background */}
              <div className="absolute inset-[1px] rounded-[10px] bg-gradient-to-r from-[#C2185B] to-[#E65100] z-0" />

              <span className="relative z-10 flex items-center gap-2">
                Get Started Now
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3.5 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 group"
              style={{ 
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                color: '#FFFFFF',
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="font-bold">View Portfolio</span>
              <svg className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Stats Banner */}
          <motion.div 
            variants={fadeInUp}
            className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {[
              { number: '5000+', label: 'Projects Completed' },
              { number: '15+', label: 'Years Experience' },
              { number: '800+', label: 'Happy Clients' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                variants={textVariants}    
                className="p-6 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-cyan-300/30 transition-colors group"
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl sm:text-4xl font-black mb-2" style={{ fontFamily: 'Clash Display, sans-serif', color: '#E3F2FD', textShadow: '0 2px 15px rgba(0,0,0,0.8)' }}>
                  {stat.number}
                </div>
                <div className="text-sm font-bold uppercase tracking-wider group-hover:text-white transition-colors" style={{ color: '#E3F2FD', textShadow: '0 1px 10px rgba(0,0,0,0.6)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      

      {/* Animated gradient circles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full filter blur-3xl opacity-20 ${
            i % 2 === 0 ? 'bg-brand-blue' : 'bg-brand-purple'
          }`}
          style={{
            width: `${200 + i * 100}px`,
            height: `${200 + i * 100}px`,
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
          animate={{
            y: [0, 30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: i * 2,
          }}
        />
      ))}
    </section>
  );
};

export default PremiumHero;
