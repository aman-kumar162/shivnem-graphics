'use client';
import React, { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { SERVICES_DATA } from '../../../data/servicesData';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronRight, CheckCircle2, ArrowLeft, Clock, ShieldCheck, Zap, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetail() {
  const { id } = useParams();
  const service = SERVICES_DATA.find(s => s.id === id);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (!service) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from('.fade-in-up', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });
      
      gsap.from('.gallery-item', {
        scrollTrigger: {
          trigger: '.gallery-section',
          start: 'top center+=100',
        },
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.5)'
      });
    }, containerRef);

    return () => ctx.revert();
  }, [service]);

  if (!service) return null; 

  const Icon = service.icon;

  return (
    <div ref={containerRef} className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:h-[85vh] flex items-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          {service.image && service.image.startsWith('/') ? (
             <div className="relative w-full h-full">
               <Image 
                 src={service.image} 
                 alt={service.name} 
                 fill 
                 className="object-cover opacity-10 mix-blend-overlay blur-sm"
               />
               <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`} />
               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
             </div>
          ) : (
             <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`} />
          )}
        </div>

        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <Link href="/services" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors fade-in-up group font-medium">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to All Services
              </Link>
              
              <div className="fade-in-up">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-${service.color}-600 text-sm font-bold mb-6 tracking-wide uppercase`}>
                   <Icon className="w-4 h-4" />
                   Premium Service
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 font-display tracking-tight text-slate-900">
                  {service.name}
                </h1>
                <p className="text-2xl lg:text-3xl text-slate-500 font-light leading-snug">
                  {service.tagline}
                </p>
              </div>
              
              <p className="text-lg text-slate-700 leading-relaxed max-w-xl fade-in-up font-medium opacity-90">
                {service.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4 fade-in-up">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`px-10 py-4 rounded-full font-bold text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all bg-gradient-to-r ${service.gradient}`}
                >
                  Start Project
                </button>
              </div>
            </div>

            {/* Hero Visual / Mockup */}
            <div className="relative h-[400px] lg:h-[600px] flex items-center justify-center fade-in-up order-1 lg:order-2">
               {service.image && service.image.startsWith('/') ? (
                  <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[8px] border-white transform lg:rotate-3 hover:rotate-0 transition-transform duration-700 bg-slate-100 ring-1 ring-slate-900/5">
                    <Image 
                      src={service.image} 
                      alt="Service Preview" 
                      fill
                      className="object-cover scale-105"
                    />
                  </div>
               ) : (
                  <div className={`w-full h-full rounded-[2.5rem] bg-gradient-to-br ${service.gradient} opacity-20 flex items-center justify-center text-[10rem] shadow-inner`}>
                    {service.image}
                  </div>
               )}
            </div>
        </div>
      </section>

      {/* Gallery / Product Showcase */}
      {service.gallery && service.gallery.length > 0 && (
        <section className="py-24 bg-slate-50 gallery-section border-y border-slate-200/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <span className="text-blue-600 font-bold tracking-wider uppercase text-sm font-display">Portfolio</span>
               <h2 className="text-4xl font-bold text-slate-900 mt-2 font-display">Crafted with Precision</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {service.gallery.map((item, idx) => (
                <div key={idx} className="gallery-item group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
                   <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                   {item.img && (
                      <Image 
                        src={item.img} 
                        alt={item.title} 
                        fill 
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                   )}
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <span className="text-white/80 text-sm font-medium uppercase tracking-wider mb-1">Project</span>
                      <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
               <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900 font-display">How We Work</h2>
               </div>
               <div className="grid gap-8 lg:grid-cols-4">
                  {service.process?.map((step, idx) => (
                     <div key={idx} className="relative group">
                        <div className="flex flex-col items-center text-center p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-blue-100 hover:shadow-lg transition-all duration-300 h-full">
                           <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center font-bold text-xl text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                              {step.step}
                           </div>
                           <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                           <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                        {idx !== service.process.length - 1 && (
                           <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-slate-200" />
                        )}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Details Grid */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
           <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                 <h2 className="text-4xl font-bold mb-6 font-display">Technical Specifications</h2>
                 <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    We obsess over every detail so you don't have to. Our specifications are designed to meet the highest industry standards.
                 </p>
                 <div className="p-8 bg-slate-800/50 rounded-3xl border border-slate-700">
                    <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                       <ShieldCheck className="w-5 h-5 text-emerald-400" />
                       Included Standards
                    </h3>
                    <ul className="space-y-4">
                       <li className="flex items-center gap-3 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-blue-400" /> 24-Hour Rush Available
                       </li>
                       <li className="flex items-center gap-3 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-blue-400" /> Professional File Check
                       </li>
                       <li className="flex items-center gap-3 text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-blue-400" /> Satisfaction Guaranteed
                       </li>
                    </ul>
                 </div>
              </div>

              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
                 {service.categories.map((category, idx) => (
                    <div key={idx} className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-slate-600 transition-colors">
                       <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-700">
                          <span className="text-4xl">{category.icon}</span>
                          <div>
                             <h3 className="text-xl font-bold text-white">{category.title}</h3>
                             {category.badge && (
                                <span className="inline-block mt-1 text-xs font-bold text-slate-900 bg-gradient-to-r from-amber-200 to-yellow-400 px-2 py-0.5 rounded-full">
                                   {category.badge}
                                </span>
                             )}
                          </div>
                       </div>
                       <div className="space-y-4">
                          {category.items.map((item, i) => (
                             <div key={i} className="group/item">
                                <h4 className="font-semibold text-slate-200 group-hover/item:text-blue-400 transition-colors">{item.name}</h4>
                                <p className="text-sm text-slate-500">{item.detail}</p>
                             </div>
                          ))}
                       </div>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
