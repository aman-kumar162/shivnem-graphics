'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Layout Components
import Loader from '@/components/layout/Loader';

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
import PremiumHero from '@/components/sections/PremiumHero';
import { PreludeState } from 'next/dist/server/app-render/dynamic-rendering';
import PremiumBackground from './PremiumBackground';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  

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
     
      <main className="min-h-screen">
        <PremiumHero/>
       
         <About />
        <Services />
        <Products />
        <Portfolio />
        <Process />
        <Team />
        <PremiumBackground>
        <Contact />
        </PremiumBackground>
      </main>
    </>
  );
}
