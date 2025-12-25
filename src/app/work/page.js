'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, Palette, FileCheck, PrinterIcon, Truck, CheckCircle, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function WorkPage() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animations
      gsap.from(titleRef.current?.querySelectorAll('h1, p, .hero-checkmarks'), {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top center+=100',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Process cards animation
      const processCards = gsap.utils.toArray('.process-card');
      processCards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=50',
            toggleActions: 'play none none none'
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay: i * 0.1,
          ease: 'power3.out'
        });
      });

      // Connecting lines animation
      const lines = gsap.utils.toArray('.connecting-line');
      lines.forEach((line, i) => {
        gsap.from(line, {
          scrollTrigger: {
            trigger: line,
            start: 'top bottom-=100',
            toggleActions: 'play none none none'
          },
          scaleY: 0,
          transformOrigin: 'top',
          duration: 0.5,
          delay: 0.3,
          ease: 'power2.inOut'
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const workProcess = [
    {
      step: 1,
      icon: MessageSquare,
      title: 'Quote & Inquiry',
      description: 'Share your requirements with us. We discuss your project details, timeline, and budget to understand your vision.',
      color: 'from-red-500 to-red-600',
      features: [
        'Free consultation',
        'Project discussion',
        'Budget planning',
        'Timeline estimation'
      ]
    },
    {
      step: 2,
      icon: Palette,
      title: 'Design Creation',
      description: 'Our expert designers create initial concepts based on your requirements, bringing your ideas to life with creativity.',
      color: 'from-orange-500 to-red-500',
      features: [
        'Creative concepts',
        'Multiple mockups',
        'Brand alignment',
        'Professional design'
      ]
    },
    {
      step: 3,
      icon: FileCheck,
      title: 'Proof Reading & Approval',
      description: 'We share design proofs with you for review. Your feedback ensures the final output matches your expectations perfectly.',
      color: 'from-amber-500 to-orange-500',
      features: [
        'Design preview',
        'Client feedback',
        'Revisions included',
        'Final approval'
      ]
    },
    {
      step: 4,
      icon: PrinterIcon,
      title: 'Printing Stage',
      description: 'Once approved, we proceed with high-quality printing using state-of-the-art equipment and premium materials.',
      color: 'from-yellow-500 to-amber-500',
      features: [
        'Quality materials',
        'Advanced equipment',
        'Color accuracy',
        'Quality control'
      ]
    },
    {
      step: 5,
      icon: Truck,
      title: 'Delivery',
      description: 'Your finished products are carefully packaged and delivered to your doorstep, ensuring safe and timely arrival.',
      color: 'from-green-500 to-emerald-500',
      features: [
        'Safe packaging',
        'Timely delivery',
        'Order tracking',
        'Quality assured'
      ]
    }
  ];

  return (
    <main ref={containerRef} className="bg-navy-dark min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto max-w-5xl" ref={titleRef}>
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 text-red-400 text-sm font-semibold mb-6">
              Our Process
            </span>
          </div>

          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight text-center"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            From Quote to
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"> Delivery</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed text-center mb-12">
            Experience a seamless printing journey with our transparent 5-stage process designed to bring your vision to life with precision and excellence.
          </p>

          {/* Hero Checkmarks */}
          <div className="hero-checkmarks flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 flex-wrap">
            {[
              'Quality Assured',
              'Transparent Process',
              'On-Time Delivery'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-red-500" />
                <span className="text-gray-300 font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-red-500/20">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-0">
            {workProcess.map((process, idx) => {
              const Icon = process.icon;
              const isEven = idx % 2 === 0;
              
              return (
                <div key={idx} className="relative">
                  {/* Process Card */}
                  <div className={`process-card grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                    {/* Content Side */}
                    <div className={`${isEven ? 'lg:pr-8' : 'lg:pl-8 lg:order-2'}`}>
                      <div className="flex items-center gap-4 mb-6">
                        {/* Step Number Circle */}
                        <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center shadow-lg`}>
                          <span className="text-white text-2xl font-bold">{process.step}</span>
                        </div>
                        
                        {/* Title */}
                        <h3 
                          className="text-3xl sm:text-4xl font-bold text-white"
                          style={{ fontFamily: 'var(--font-playfair)' }}
                        >
                          {process.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                        {process.description}
                      </p>

                      {/* Features */}
                      <ul className="space-y-3">
                        {process.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 text-red-500`} />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Icon Side */}
                    <div className={`${isEven ? 'lg:pl-8' : 'lg:pr-8 lg:order-1'}`}>
                      <div className={`group relative p-12 rounded-2xl bg-gradient-to-br from-navy-light to-navy-accent border border-red-500/20 hover:border-red-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/20 flex items-center justify-center`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${process.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-500`} />
                        <Icon className="w-32 h-32 text-red-500 relative z-10 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line (except after last item) */}
                  {idx < workProcess.length - 1 && (
                    <div className="flex justify-center py-6">
                      <div className="connecting-line w-0.5 h-16 bg-gradient-to-b from-red-500/50 to-orange-500/50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-red-500/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-6" 
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience our seamless printing process from quote to delivery. Let's bring your vision to life with quality and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 border-2 border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              View Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
