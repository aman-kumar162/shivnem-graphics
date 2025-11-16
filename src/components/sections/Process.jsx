'use client';
import React, { useEffect, useRef } from 'react';
import { FaComments, FaPalette, FaClipboardList, FaPrint, FaSearch, FaTruck } from 'react-icons/fa';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const steps = [
  { icon: <FaComments />, title: 'Consultation & Planning', desc: 'We start by understanding your goals and requirements.' },
  { icon: <FaPalette />, title: 'Creative Design', desc: 'Our designers craft concepts that capture your brand essence.' },
  { icon: <FaClipboardList />, title: 'Material Selection', desc: 'We help choose the best paper, finish, and texture.' },
  { icon: <FaPrint />, title: 'Printing & Production', desc: 'High-quality precision printing with vibrant results.' },
  { icon: <FaSearch />, title: 'Quality Assurance', desc: 'Every detail is checked for flawless output.' },
  { icon: <FaTruck />, title: 'Packaging & Delivery', desc: 'Your prints are delivered securely and on time.' },
];

const Process = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    const stepsEls = gsap.utils.toArray('.process-step');
    const arrowEls = gsap.utils.toArray('.process-arrow');
    const created = [];

    // Initial staggered load animation (plays once on mount)
    gsap.from(stepsEls, {
      y: 40,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15
    });

    // animate arrows in with a small stagger
    if (arrowEls.length) {
      gsap.from(arrowEls, {
        opacity: 0,
        scale: 0.5,
        duration: 0.7,
        stagger: 0.15,
        ease: 'back.out(1.4)',
        delay: 0.2
      });
    }
    stepsEls.forEach((el) => {
      const dir = el.dataset.direction || 'left';
      const fromX = dir === 'left' ? -100 : 100;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play reverse play reverse'
        }
      });

      tl.fromTo(
        el,
        { x: fromX, opacity: 0, scale: 0.95 },
        { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
      );

      created.push(tl.scrollTrigger);
    });

    return () => {
      created.forEach((t) => t && t.kill && t.kill());
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
  <section className="w-full py-20 lg:py-32" style={{ background: 'linear-gradient(135deg, rgba(255, 106, 75, 0.08) 0%, rgba(255, 45, 149, 0.06) 100%)' }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full" ref={containerRef}>
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-primary dark:text-white mb-4 lg:mb-6">
            Our Process
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A clear, step-by-step approach from concept to completion.
          </p>
        </div>

        <div className="process-flow relative">
          {/* Background line connector (desktop only) */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-teal-200 via-teal-500 to-teal-200 dark:from-teal-700 dark:via-teal-500 dark:to-teal-700 opacity-30"></div>

          {/* First row: steps 1-3 (left-to-right) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-20">
            {steps.slice(0, 3).map((step, i) => {
              return (
                <div key={`p1-${i}`} className="process-step flex justify-center relative group" data-direction="left">
                  <div className="relative card-bg rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl p-6 sm:p-8 text-center w-full transition-all duration-300 hover:-translate-y-2 border-accent border">
                    {/* Step badge */}
                    <div className="absolute -top-3 left-6 sm:left-8">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white text-xs sm:text-sm font-bold shadow-lg">
                        {i + 1}
                      </div>
                    </div>

                    {/* Icon circle */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-teal-600 to-teal-500 mx-auto flex items-center justify-center text-2xl sm:text-3xl mb-6 text-white shadow-md">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-gray-300 leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Arrow to next (desktop only) */}
                    {i < 2 && (
                      <div className="process-arrow hidden lg:flex items-center absolute -right-12 lg:-right-16 top-20 sm:top-24 pointer-events-none z-20 text-teal-500 dark:text-teal-300 opacity-80">
                        <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 16 H52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M52 16 L45 8 M52 16 L45 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second row: steps 4-6 (rendered right-to-left) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.slice(3, 6).reverse().map((step, idx) => {
              const i = idx + 3; // original index for numbering
              return (
                <div key={`p2-${idx}`} className="process-step flex justify-center relative group" data-direction="right">
                  {/* Arrow from previous (desktop only) */}
                  {idx < 2 && (
                    <div className="process-arrow hidden lg:flex items-center absolute -left-12 lg:-left-16 top-20 sm:top-24 pointer-events-none z-20 text-teal-500 dark:text-teal-300 opacity-80">
                      <svg width="64" height="32" viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 16 H62" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M12 16 L19 8 M12 16 L19 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  )}

                  <div className="relative card-bg rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl p-6 sm:p-8 text-center w-full transition-all duration-300 hover:-translate-y-2 border-accent border">
                    {/* Step badge */}
                    <div className="absolute -top-3 left-6 sm:left-8">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600 text-white text-xs sm:text-sm font-bold shadow-lg">
                        {i + 1}
                      </div>
                    </div>

                    {/* Icon circle */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-teal-600 to-teal-500 mx-auto flex items-center justify-center text-2xl sm:text-3xl mb-6 text-white shadow-md">
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm sm:text-base text-gray-300 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;