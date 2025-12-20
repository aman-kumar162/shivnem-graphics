'use client';
import React, { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES_DATA } from '../../data/servicesData';
import { ArrowRight, Sparkles, Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(titleRef.current, {
        scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center+=200',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      });

      // Cards Animation
      gsap.from('.service-glimpse-card', {
        scrollTrigger: {
          trigger: '.services-glimpse-grid',
          start: 'top bottom-=50',
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const FEATURED_SERVICES = SERVICES_DATA.slice(0, 6);

  return (
    <div ref={containerRef} className="py-24 relative overflow-hidden font-sans bg-slate-50" id="services">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-pulse" />
         <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[100px] mix-blend-multiply opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Header Section (Left Sticky-ish) */}
        <div className="lg:col-span-4 lg:sticky lg:top-32" ref={titleRef}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-bold mb-8 uppercase tracking-wider shadow-sm">
                <Sparkles className="w-4 h-4" />
                World Class Quality
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 tracking-tight font-display leading-[1.1]">
                We Bring Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
                    Vision to Life
                </span>
            </h2>
            
            <p className="text-lg text-slate-600 leading-relaxed font-light mb-8 max-w-lg">
                From high-speed digital prints to luxurious business cards, our offset and digital services set the standard for excellence.
            </p>

            <Link 
              href="/services" 
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 text-white font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 group"
            >
              Explore All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            {/* Trust Badges */}
            <div className="mt-12 flex gap-6 pt-12 border-t border-slate-200">
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-slate-900">2K+</span>
                    <span className="text-sm text-slate-500 font-medium">Happy Clients</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-slate-900">24h</span>
                    <span className="text-sm text-slate-500 font-medium">Fast Delivery</span>
                </div>
            </div>
        </div>

        {/* Services Grid (Right Scrollable) */}
        <div className="lg:col-span-8 services-glimpse-grid">
            <div className="grid md:grid-cols-2 gap-6">
                {FEATURED_SERVICES.map((service, idx) => {
                    const Icon = service.icon;
                    return (
                    <Link 
                        href={`/services#id=${service.id}`} // Deep link to the SP master-detail
                        onClick={(e) => {
                             // Optional: Handle smooth scroll or router transition if on same page
                        }}
                        key={service.id}
                        className={`group service-glimpse-card block relative`}
                    >
                        <div className="bg-white rounded-[2rem] p-8 h-full border border-slate-100 hover:border-transparent transition-all duration-300 relative overflow-hidden hover:shadow-2xl hover:shadow-slate-200/50 z-10">
                             {/* Hover Gradient Border Effect */}
                             <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                             
                             <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-300`}>
                                        <Icon className={`w-7 h-7 text-slate-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:${service.gradient}`} />
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:border-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                                    </div>
                                </div>
                                
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">
                                    {service.name}
                                </h3>
                                
                                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                                    {service.shortDescription}
                                </p>
                             </div>
                        </div>
                        {/* Gradient Glow */}
                        <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.gradient} rounded-[2rem] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10`} />
                    </Link>
                    );
                })}
                
                {/* View More Card */}
                <Link href="/services" className="group service-glimpse-card block relative flex flex-col items-center justify-center p-8 bg-slate-100 rounded-[2rem] border-2 border-dashed border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all text-center">
                     <div className="w-16 h-16 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Star className="w-6 h-6 text-blue-500 fill-blue-500" />
                     </div>
                     <span className="text-lg font-bold text-slate-700 group-hover:text-blue-700">View All Services</span>
                     <span className="text-xs text-slate-400 mt-2 font-medium bg-white px-3 py-1 rounded-full shadow-sm">Explore Full Catalog</span>
                </Link>
            </div>
        </div>

      </div>
    </div>
  );
}