'use client';
import React, { useRef, useState, useEffect, useLayoutEffect, Suspense } from 'react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SERVICES_DATA } from '../../data/servicesData';
import { ArrowRight, Sparkles, Check, CheckCircle2 } from 'lucide-react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

gsap.registerPlugin(ScrollTrigger);

function ServicesContent() {
  const [activeService, setActiveService] = useState(SERVICES_DATA[0]);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const searchParams = useSearchParams();

  // Handle Deep Linking
  useEffect(() => {
    // const id = searchParams.get('id');
    // if (id) {
    //   const found = SERVICES_DATA.find(s => s.id === id);
    //   if (found) { 
    //       setActiveService(found);
    //       setIsAutoScrolling(false);
    //   }
    // }
  }, [searchParams]);

  // Handle Service Selection w/ Animation
  const handleServiceSelect = (service) => {
    if (activeService.id === service.id) return;
    setIsAutoScrolling(false);

    // Cross-fade animation
    const content = document.getElementById('service-content');
    if (content) {
        gsap.to(content, { opacity: 0, scale: 0.98, duration: 0.2, onComplete: () => {
             setActiveService(service);
             gsap.to(content, { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' });
        }});
    } else {
        setActiveService(service);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        if (isAutoScrolling) {
            gsap.to(carouselRef.current, {
                xPercent: -50,
                duration: 35, // Slower for better readability
                ease: "none",
                repeat: -1
            });
        } else {
            gsap.killTweensOf(carouselRef.current);
        }
    }, containerRef);
    return () => ctx.revert();
  }, [isAutoScrolling]);

  const Icon = activeService.icon;

  return (
    <div ref={containerRef} className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      <Navbar />

      {/* --- Top Section: Header & Carousel --- */}
      <section className="pt-32 pb-12 relative overflow-hidden bg-slate-50/50 border-b border-slate-200">
         <div className="container mx-auto px-4 text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-bold uppercase tracking-wider mb-4 border border-blue-100">
                <Sparkles className="w-4 h-4" /> Our Specialties
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 font-display tracking-tight">
                Premium Printing Services
            </h1>
         </div>

         {/* Auto-Scrolling Carousel */}
         <div className="w-full overflow-hidden py-8 cursor-grab active:cursor-grabbing group">
            <div 
                ref={carouselRef} 
                className="flex gap-6 w-max px-4"
                onMouseEnter={() => setIsAutoScrolling(false)}
            >
                {/* Looped Array for Infinite Scroll Effect */}
                {[...SERVICES_DATA, ...SERVICES_DATA].map((service, idx) => (
                    <button 
                        key={`${service.id}-${idx}`}
                        onClick={() => handleServiceSelect(service)}
                        className={`
                            relative w-80 p-6 rounded-3xl transition-all duration-300 text-left group/card flex-shrink-0
                            ${activeService.id === service.id 
                                ? 'bg-slate-900 text-white shadow-2xl scale-105 translate-y-[-4px] ring-4 ring-slate-900/20 z-10' 
                                : 'bg-white text-slate-500 border border-slate-200 hover:border-blue-400 hover:shadow-lg'}
                        `}
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-colors ${
                                activeService.id === service.id ? 'bg-white/20 text-white' : 'bg-slate-50'
                            }`}
                            style={{ color: activeService.id !== service.id ? service.primaryColor : undefined }}>
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className={`font-bold text-lg leading-tight ${activeService.id === service.id ? 'text-white' : 'text-slate-900'}`}>
                                {service.name}
                            </h3>
                        </div>
                        <p className={`text-sm leading-relaxed line-clamp-2 ${activeService.id === service.id ? 'text-slate-300' : 'text-slate-500'}`}>
                            {service.shortDescription}
                        </p>
                    </button>
                ))}
            </div>
         </div>
      </section>


      {/* --- Active Service Content --- */}
      <div id="service-content" className="min-h-screen">
        
        {/* 1. Hero / Overview */}
        <section className="py-20 lg:py-24" style={{ background: `linear-gradient(to bottom, #ffffff, #f1f5f9)` }}>
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <div 
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold mb-6 tracking-wide uppercase transition-colors"
                                style={{ 
                                    backgroundColor: `${activeService.primaryColor}15`, 
                                    borderColor: `${activeService.primaryColor}30`, 
                                    color: activeService.primaryColor 
                                }}
                            >
                                <Icon className="w-4 h-4" />
                                {activeService.name}
                            </div>
                            <h2 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 font-display text-slate-900">
                               {activeService.tagline}
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-light">
                                {activeService.fullDescription}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {activeService.highlights.map((highlight, i) => (
                                <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-bold text-sm shadow-sm">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    {highlight}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Hero Image Frame */}
                    <div className="relative h-[400px] lg:h-[550px] rounded-[3rem] overflow-hidden shadow-2xl bg-white border-[8px] border-white transform lg:rotate-2 group">
                        {activeService.image && activeService.image.startsWith('/') ? (
                            <Image 
                                src={activeService.image} 
                                alt={activeService.name} 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${activeService.gradient} opacity-10 flex items-center justify-center text-[8rem]`}>
                                {activeService.image}
                            </div>
                        )}
                        {/* Overlay Gradient for Text Contrast just in case */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>

        {/* 2. Gallery / Showcase Stripe */}
        {activeService.gallery && activeService.gallery.length > 0 && (
            <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex items-center gap-4 mb-12">
                         <div className="h-px bg-slate-700 flex-1" />
                         <span className="text-blue-400 font-bold tracking-widest uppercase text-sm font-display">Featured Projects</span>
                         <div className="h-px bg-slate-700 flex-1" />
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-8">
                        {activeService.gallery.map((item, idx) => (
                            <div key={idx} className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-xl hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300">
                                {item.img && (
                                    <Image 
                                        src={item.img} 
                                        alt={item.title} 
                                        fill 
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                                    <div className="w-12 h-1 bg-blue-500 mt-2 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}

        {/* 3. Detailed Specs & Process */}
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-12 gap-16">
                     {/* Process (Sticky Layout) */}
                    <div className="lg:col-span-5">
                        <div className="sticky top-32">
                            <h3 className="text-3xl font-bold mb-8 font-display text-slate-900">Our Workflow</h3>
                            <div className="relative border-l-2 border-slate-100 pl-8 space-y-12">
                                {activeService.process?.map((step, idx) => (
                                    <div key={idx} className="relative group">
                                        <div className={`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-white ${idx === 0 ? 'bg-blue-600 scale-125' : 'bg-slate-300'} transition-colors duration-300 shadow-sm`} />
                                        
                                        <h4 className={`text-xl font-bold mb-2 ${idx === 0 ? 'text-blue-600' : 'text-slate-900'}`}>{step.title}</h4>
                                        <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-12 p-8 bg-slate-50 rounded-3xl border border-slate-100">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-amber-500" />
                                    Ready to start?
                                </h4>
                                <p className="text-slate-500 text-sm mb-6">
                                    Get a custom quote for your project within 24 hours.
                                </p>
                                <button className="w-full py-4 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800 hover:scale-[1.02] transition-all shadow-lg active:scale-95">
                                    Get a Quote
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Options / Categories */}
                    <div className="lg:col-span-7">
                        <h2 className="text-3xl font-bold mb-10 font-display text-slate-900">Available Options</h2>
                        <div className="space-y-6">
                            {activeService.categories.map((category, idx) => (
                                <div key={idx} className="bg-white rounded-[2rem] p-8 border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                                    <div className="flex gap-6">
                                        <div className="text-4xl p-4 bg-slate-50 rounded-2xl h-fit">
                                            {category.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
                                                {category.badge && (
                                                    <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 text-xs font-bold uppercase tracking-wide">
                                                        {category.badge}
                                                    </span>
                                                )}
                                            </div>
                                            
                                            <div className="grid sm:grid-cols-2 gap-4">
                                                {category.items.map((item, i) => (
                                                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors">
                                                        <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                                                        <div>
                                                            <span className="font-bold text-slate-700 block text-sm">{item.name}</span>
                                                            <span className="text-xs text-slate-500">{item.detail}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </div>
  );
}

export default function ServicesPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <ServicesContent />
        </Suspense>
    );
}
