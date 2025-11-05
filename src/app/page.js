'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Layout Components
import Loader from '@/components/layout/Loader';
import Navbar from '@/components/layout/Navbar';

// Section Components
import Hero from '@/components/sections/Hero';
import StatsSection from '@/components/sections/StatsSection';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Products from '@/components/sections/Products';
import Portfolio from '@/components/sections/Portfolio';
import Process from '@/components/sections/Process';
import Team from '@/components/sections/Team';
import Contact from '@/components/sections/Contact';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, [loading]);

  useGSAP(() => {
    if (loading) return;

    // Global animations and ScrollTrigger setup
    ScrollTrigger.batch('.fade-in', {
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out'
      }),
      once: true
    });
  }, [loading]);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <StatsSection />
        <About />
        <Services />
        <Products />
        <Portfolio />
        <Process />
        <Team />
        <Contact />
      </main>
    </>
  );
}
