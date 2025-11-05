'use client';

import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Process = () => {
  const processRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    return () => {
      // Cleanup ScrollTrigger instances when component unmounts
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  useGSAP(() => {
    if (!processRef.current) return;

    // Create a new timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: processRef.current,
        start: 'top center+=100',
        end: 'bottom center',
        toggleActions: 'play none none reverse'
      }
    });

    // Store the timeline reference
    timelineRef.current = tl;

    // Get all process steps within the current component's scope
    const processSteps = processRef.current.querySelectorAll('.process-step');
    
    // Animate process steps
    tl.from(processSteps, {
      opacity: 0,
      y: 50,
      stagger: 0.2,
      duration: 1,
      ease: 'power2.out'
    });
  }, { scope: processRef });
  const processSteps = [
    {
      step: 1,
      title: 'Order Consultation',
      description: 'Free consultation to understand your requirements',
      icon: '�',
      features: ['Project Requirements', 'Design Consultation', 'Cost Estimation']
    },
    {
      step: 2,
      title: 'Design & Proofing',
      description: 'Expert design team creates your vision',
      icon: '🎨',
      features: ['Professional Design', 'Multiple Revisions', 'Digital Proofing']
    },
    {
      step: 3,
      title: 'Material Selection',
      description: 'Choose from premium quality materials',
      icon: '📋',
      features: ['Premium Papers', 'Special Finishes', 'Sample Testing']
    },
    {
      step: 4,
      title: 'Advanced Printing',
      description: 'State-of-the-art printing technology',
      icon: '🖨️',
      features: ['Digital Printing', 'Offset Printing', 'Color Management']
    },
    {
      step: 5,
      title: 'Quality Assurance',
      description: 'Rigorous quality control process',
      icon: '✨',
      features: ['Color Accuracy', '100% Inspection', 'Quality Guarantee']
    },
    {
      step: 6,
      title: 'Express Delivery',
      description: 'Fast and secure shipping worldwide',
      icon: '�',
      features: ['Secure Packaging', 'Track & Trace', 'On-time Delivery']
    }
  ];

  useGSAP(() => {
    if (!processRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      // Store timeline reference for cleanup
      timelineRef.current = tl;

      // Animate all process steps
      tl.from('.process-step', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
      })
      .from('.process-step .text-3xl', { // Icons
        scale: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      }, '-=0.5')
      .from('.process-step .bg-teal-500', { // Step numbers
        scale: 0,
        rotate: -180,
        duration: 0.5,
        stagger: 0.2,
        ease: 'back.out(1.7)'
      }, '-=0.8');
    }, processRef);

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section id="process" className="py-20 bg-gray-50 dark:bg-gray-800" ref={processRef}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-neue-haas-display font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-lg font-neue-haas-text text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            How we deliver excellence from concept to completion
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div 
              key={step.step} 
              className="process-step bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4 transform transition-transform duration-300 hover:scale-110">
                  {step.icon}
                </span>
                <span className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-neue-haas-display font-bold">
                  {step.step}
                </span>
              </div>
              <h3 className="text-xl font-neue-haas-display font-bold mb-3 dark:text-white">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-neue-haas-text mb-6">
                {step.description}
              </p>
              <ul className="space-y-3">
                {step.features.map((feature, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-sm text-gray-500 dark:text-gray-400 font-neue-haas-text"
                  >
                    <svg 
                      className="w-5 h-5 mr-3 text-teal-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;