'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef(null);

  const steps = [
    {
      icon: '💬',
      title: '1. Consultation & Planning',
      desc: 'We start with a friendly discussion to understand your print goals, brand identity, and vision.',
      points: ['Requirement Understanding', 'Timeline Planning', 'Budget Estimation'],
    },
    {
      icon: '🎨',
      title: '2. Creative Design',
      desc: 'Our expert designers turn your ideas into visually stunning and print-ready designs.',
      points: ['Custom Layout Design', 'Digital Proofing', 'Unlimited Revisions'],
    },
    {
      icon: '📋',
      title: '3. Material Selection',
      desc: 'We help you choose the perfect paper, finish, and texture for your project.',
      points: ['Premium Paper Options', 'Lamination & Finishes', 'Eco-friendly Materials'],
    },
    {
      icon: '🖨️',
      title: '4. Printing & Production',
      desc: 'With cutting-edge printing technology, we deliver crisp, color-perfect results every time.',
      points: ['Digital & Offset Printing', 'Large Format Printing', 'Pantone Matching'],
    },
    {
      icon: '🔍',
      title: '5. Quality Assurance',
      desc: 'Each print undergoes thorough quality checks for perfection in color, texture, and alignment.',
      points: ['Color Proof Check', 'Alignment Review', 'Final Approval'],
    },
    {
      icon: '🚚',
      title: '6. Packaging & Delivery',
      desc: 'Your products are packed securely and delivered on time, anywhere you need them.',
      points: ['Secure Packaging', 'Fast Dispatch', 'Nationwide Delivery'],
    },
  ];

  // useGSAP(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: 'top 80%',
  //       toggleActions: 'play none none reverse',
  //     },
  //   });
  //
  //   tl.from('.process-card', {
  //     opacity: 0,
  //     y: 60,
  //     duration: 0.8,
  //     stagger: 0.3,
  //     ease: 'power3.out',
  //   });
  // }, { scope: sectionRef });

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From concept to completion — here’s how we deliver premium printing excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-card bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center justify-start mb-6">
                <span className="text-5xl mr-4">{step.icon}</span>
                <h3 className="text-xl font-semibold text-teal-600 dark:text-teal-400">
                  {step.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{step.desc}</p>
              <ul className="space-y-2">
                {step.points.map((p, i) => (
                  <li
                    key={i}
                    className="flex items-center text-gray-500 dark:text-gray-400 text-sm"
                  >
                    <svg
                      className="w-5 h-5 mr-2 text-teal-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4"
                      />
                    </svg>
                    {p}
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