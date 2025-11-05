'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  FaComments,
  FaPalette,
  FaClipboardList,
  FaPrint,
  FaSearch,
  FaTruck,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef(null);

  const steps = [
    {
      icon: <FaComments />,
      title: 'Consultation & Planning',
      desc: 'We start by understanding your goals, brand identity, and project vision.',
    },
    {
      icon: <FaPalette />,
      title: 'Creative Design',
      desc: 'Our talented designers turn your ideas into high-quality, print-ready designs.',
    },
    {
      icon: <FaClipboardList />,
      title: 'Material Selection',
      desc: 'Choose from a wide range of premium papers, finishes, and materials.',
    },
    {
      icon: <FaPrint />,
      title: 'Printing & Production',
      desc: 'Using advanced printing technology to ensure perfect colors and precision.',
    },
    {
      icon: <FaSearch />,
      title: 'Quality Assurance',
      desc: 'We carefully inspect each print to maintain top-notch quality and detail.',
    },
    {
      icon: <FaTruck />,
      title: 'Packaging & Delivery',
      desc: 'Secure, fast, and reliable delivery to your doorstep, anywhere in India.',
    },
  ];

  useGSAP(() => {
    const cards = gsap.utils.toArray('.process-card');
    gsap.from(cards, {
      opacity: 0,
      y: 80,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
      },
    });

    gsap.from('.connector-line', {
      scaleY: 0,
      transformOrigin: 'top center',
      duration: 1.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 90%',
      },
    });
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent mb-4">
            Our Process
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From concept to completion — your journey with us is seamless, efficient, and quality-driven.
          </p>
        </div>

        {/* Zigzag Flow Layout */}
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[4px] bg-gradient-to-b from-teal-400 to-teal-700 h-full rounded-full connector-line hidden lg:block"></div>

          <div className="space-y-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`process-card relative flex flex-col lg:flex-row items-center justify-between ${
                  index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Step Content */}
                <div className="lg:w-[45%] bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl text-teal-600 mr-4">{step.icon}</div>
                    <h3 className="text-2xl font-semibold text-teal-700 dark:text-teal-400">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{step.desc}</p>
                </div>

                {/* Connector Dot */}
                <div className="hidden lg:flex items-center justify-center w-10 h-10 bg-teal-600 text-white rounded-full shadow-lg z-10">
                  {index + 1}
                </div>

                {/* Spacing or Arrow between steps */}
                <div className="hidden lg:block lg:w-[45%]">
                  <div
                    className={`h-[3px] w-24 bg-gradient-to-r from-teal-400 to-teal-700 rounded-full ${
                      index % 2 === 0 ? 'ml-auto mr-0' : 'mr-auto ml-0'
                    }`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
