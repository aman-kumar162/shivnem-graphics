'use client';
import React, { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { SERVICES_DATA } from '../../../data/servicesData';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import Contact from '../../../components/sections/Contact';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ServiceDetail() {
   const { id } = useParams();
   const service = SERVICES_DATA.find(s => s.id === id);
   const containerRef = useRef(null);

   useLayoutEffect(() => {
      if (!service) return;
      const ctx = gsap.context(() => {
         gsap.from('.fade-in-up', {
            y: 40,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out'
         });
      }, containerRef);
      return () => ctx.revert();
   }, [service]);

   if (!service) {
      return (
         <div className="min-h-screen bg-white">
            <Navbar />
            <main className="container mx-auto px-4 py-32 text-center">
               <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
               <p className="text-slate-600 mb-8">We couldn't find the service you're looking for.</p>
               <Link href="/services" className="inline-block px-6 py-3 bg-slate-900 text-white rounded-lg">Back to Services</Link>
            </main>
            <Footer />
         </div>
      );
   }

   return (
      <div ref={containerRef} className="min-h-screen bg-white">
         <Navbar />

         <main className="container mx-auto px-4 py-20">
            <div className="mb-8">
               <Link href="/services" className="text-slate-500 hover:text-blue-600">← Back to Services</Link>
            </div>

            <header className="mb-12">
               <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
               <p className="text-lg text-slate-700">{service.shortDescription}</p>
            </header>

            <section className="grid lg:grid-cols-3 gap-8 mb-16">
               <div className="lg:col-span-2">
                  <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                  <p className="text-slate-700 leading-relaxed mb-6">{service.description}</p>

                  <h3 className="text-xl font-bold mb-3">Sub-Services</h3>
                  <ul className="list-disc pl-6 space-y-2 mb-6">
                     {service.subServices.map((s, i) => (
                        <li key={i} className="text-slate-700">{s}</li>
                     ))}
                  </ul>

                  <h3 className="text-xl font-bold mb-3">Process</h3>
                  <ol className="list-decimal pl-6 space-y-4">
                     {service.process.map((p, i) => (
                        <li key={i} className="text-slate-700">
                           <strong className="block text-slate-900">{p.title}</strong>
                           <span className="text-slate-600">{p.desc}</span>
                        </li>
                     ))}
                  </ol>
               </div>

               <aside className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h4 className="font-bold mb-3">Quick Enquiry</h4>
                  <p className="text-sm text-slate-600 mb-4">Have a question or need a quote for this service?</p>
                  <button
                     onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                     className="w-full py-3 px-4 rounded-lg bg-slate-900 text-white font-semibold"
                  >Contact About {service.title}</button>
               </aside>
            </section>

            <section id="contact">
               <Contact service={service.title} />
            </section>
         </main>

         <Footer />
      </div>
   );
}
