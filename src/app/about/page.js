'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutPageRedesign = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-x-hidden">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(194, 24, 91, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(230, 81, 0, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(245, 124, 0, 0.1) 0%, transparent 50%)
          `
        }} />
      </div>

      {/* Hero Section - Compact */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 pt-32 pb-12">
        {/* Background Image Effect */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-200/40 via-orange-200/40 to-yellow-200/40" />
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C2185B' fill-opacity='0.08'%3E%3Cpath d='M20 18v-2h-2v2h-2v2h2v2h2v-2h2v-2h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Back Button */}


        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-3 px-5 py-1.5 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full shadow-xl"
            >
              <span className="text-xs font-black tracking-widest text-white">
                EST. 1991 • 30+ YEARS
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-black mb-3 leading-tight"
            >
              <span className="block bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                SHIVNEM GRAPHICS
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl font-semibold text-gray-700 mb-8 max-w-2xl mx-auto"
            >
              Transforming Ideas with{' '}
              <span className="text-pink-600">Precision</span>,{' '}
              <span className="text-orange-600">Quality</span> &{' '}
              <span className="text-yellow-600">Passion</span>
            </motion.p>

            {/* Main Content Section moved here */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-12 text-left bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative h-64 md:h-full min-h-[300px] rounded-2xl overflow-hidden shadow-lg group">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                   <img src="/about-office.png" alt="Shivnem Grpahics Office" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute bottom-4 left-4 right-4 z-20">
                      <p className="text-white font-bold text-lg drop-shadow-md border-l-4 border-orange-500 pl-3">Established 2009</p>
                   </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 border-b-2 border-orange-200 inline-block pb-1">Our Journey</h3>
                  <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base">
                    Our journey began with a passion for printing that dates back to <span className="font-bold text-pink-600">1991</span>. Over the years, we have continuously evolved by adopting new printing technologies and innovative practices to meet the changing needs of our customers.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base mt-4">
                    Guided by this vision, we expanded our services into <span className="font-semibold text-indigo-600">graphic design, web design, development, and software solutions (IT & Digital Marketing also)</span>, along with advanced printing solutions—ensuring that every idea is transformed into reality with precision, quality, creativity, and passion.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base mt-4">
                   Established in <span className="font-bold text-orange-600">2009</span>, Shivnem Graphics has remained committed to delivering excellent quality, reliable service, and complete customer satisfaction in every project we undertake. We believe that true success is achieved by understanding our clients’ requirements and executing each job with dedication, professionalism, and attention to detail.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base mt-4 hidden md:block">
                     With reasonable pricing, timely execution, and a strong commitment to our promises, we strive to make every customer experience smooth and rewarding.
                  </p>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                 <p className="text-gray-700 leading-relaxed text-center text-sm italic">
                    Our comprehensive range of services includes Graphic Designing, Web Designing / Development, Software Solution, Digital Marketing, Screen Printing, Digital Printing, Offset Printing, Flex, Vinyl, DTF Printing, and printing on a wide variety of materials.
                 </p>
              </div>
            </motion.div>


          </motion.div>
        </div>
      </section>

      {/* Timeline Section - Compact */}
      <section className="relative py-16 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-2 px-4 py-1 bg-gradient-to-r from-pink-100 to-orange-100 border border-pink-300 rounded-full">
              <span className="text-xs font-bold tracking-widest text-pink-700">OUR JOURNEY</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-2">
              Three Decades of <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">Innovation</span>
            </h2>
          </motion.div>

          {/* Vertical Timeline - Compact */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-orange-300 to-yellow-300 transform -translate-x-1/2 hidden md:block" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 1991 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="md:grid md:grid-cols-2 gap-4 items-center">
                  <div className="text-right mb-6 md:mb-0">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="inline-block ml-auto bg-white rounded-2xl shadow-xl p-5 border border-pink-200"
                    >
                      <div className="text-4xl font-black bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-2">
                        1991
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">The Beginning</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Started with <span className="font-bold text-pink-600">traditional printing</span>, serving local businesses with dedication.
                      </p>
                    </motion.div>
                  </div>
                  <div className="relative flex justify-center md:justify-start">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full shadow-xl flex items-center justify-center border-4 border-white absolute md:relative left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0"
                    >
                      <span className="text-2xl">🖨️</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* 2000s */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="md:grid md:grid-cols-2 gap-4 items-center">
                  <div className="relative flex justify-center md:justify-end order-2 md:order-1">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full shadow-xl flex items-center justify-center border-4 border-white absolute md:relative left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0"
                    >
                      <span className="text-2xl">💻</span>
                    </motion.div>
                  </div>
                  <div className="text-left mb-6 md:mb-0 order-1 md:order-2">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="inline-block bg-white rounded-2xl shadow-xl p-5 border border-orange-200"
                    >
                      <div className="text-4xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">
                        2000s
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Digital Evolution</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Embraced <span className="font-bold text-orange-600">digital printing</span> and expanded into graphic design services.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* 2009 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="md:grid md:grid-cols-2 gap-4 items-center">
                  <div className="text-right mb-6 md:mb-0">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="inline-block ml-auto bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-5 border-2 border-yellow-300"
                    >
                      <div className="text-4xl font-black bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent mb-2">
                        2009
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Shivnem Graphics</h3>
                      <p className="text-sm text-gray-600 leading-relaxed mb-2">
                        Officially established with commitment to <span className="font-bold text-yellow-700">excellence and quality</span>.
                      </p>
                      <div className="flex flex-wrap gap-1 justify-end">
                        <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-full text-xs font-bold">Quality</span>
                        <span className="px-2 py-1 bg-orange-200 text-orange-800 rounded-full text-xs font-bold">Service</span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="relative flex justify-center md:justify-start">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-xl flex items-center justify-center border-4 border-white absolute md:relative left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0"
                    >
                      <span className="text-2xl">⭐</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* 2015+ */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="md:grid md:grid-cols-2 gap-4 items-center">
                  <div className="relative flex justify-center md:justify-end order-2 md:order-1">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full shadow-xl flex items-center justify-center border-4 border-white absolute md:relative left-1/2 md:left-auto transform -translate-x-1/2 md:translate-x-0"
                    >
                      <span className="text-2xl">🚀</span>
                    </motion.div>
                  </div>
                  <div className="text-left mb-6 md:mb-0 order-1 md:order-2">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="inline-block bg-white rounded-2xl shadow-xl p-5 border border-blue-200"
                    >
                      <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                        2015+
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Digital Era</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Added <span className="font-bold text-blue-600">web design, software & marketing</span> solutions.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Today */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="md:grid md:grid-cols-2 gap-4 items-center">
                  <div className="text-right mb-6 md:mb-0">
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className="inline-block ml-auto bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-xl p-5 border-2 border-purple-300"
                    >
                      <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                        TODAY
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Complete Hub</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        <span className="font-bold text-purple-600">Full-service agency</span> with design, print, web & marketing.
                      </p>
                    </motion.div>
                  </div>
                  <div className="relative flex justify-center md:justify-start">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 200 }}
                      className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-xl flex items-center justify-center border-4 border-white absolute md:relative left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0"
                    >
                      <span className="text-2xl">✨</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Compact */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="inline-block mb-2 px-4 py-1 bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-300 rounded-full">
              <span className="text-xs font-bold tracking-widest text-purple-700">WHAT WE OFFER</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-2">
              Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { icon: '🎨', name: 'Graphic Design', color: 'from-pink-500 to-rose-500' },
              { icon: '💻', name: 'Web Design', color: 'from-blue-500 to-cyan-500' },
              { icon: '⚙️', name: 'Software', color: 'from-purple-500 to-indigo-500' },
              { icon: '📱', name: 'Digital Marketing', color: 'from-green-500 to-emerald-500' },
              { icon: '🖨️', name: 'Screen Print', color: 'from-orange-500 to-amber-500' },
              { icon: '🖼️', name: 'Digital Print', color: 'from-red-500 to-pink-500' },
              { icon: '📄', name: 'Offset Print', color: 'from-teal-500 to-cyan-500' },
              { icon: '📰', name: 'Flex & Vinyl', color: 'from-violet-500 to-purple-500' },
              { icon: '🎯', name: 'DTF Print', color: 'from-fuchsia-500 to-pink-500' },
              { icon: '📦', name: 'Wide Format', color: 'from-sky-500 to-blue-500' }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity`} />
                <div className="relative bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:border-gray-200 transition-all text-center">
                  <div className="text-3xl mb-2">{service.icon}</div>
                  <h3 className="text-sm font-bold text-gray-800">{service.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Thank You CTA - Compact */}
      <section className="relative py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
            {/* Stats Cards - Moved to Bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 mb-16"
            >
              {[
                { value: '30+', label: 'Years', color: 'from-pink-500 to-rose-500' },
                { value: '5000+', label: 'Projects', color: 'from-orange-500 to-amber-500' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  className="relative group cursor-default"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`} />
                  <div className="relative bg-white/90 backdrop-blur-xl border border-white shadow-xl rounded-2xl px-8 py-6 min-w-[160px]">
                    <div className={`text-4xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold text-gray-600 uppercase tracking-wider mt-2">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 via-orange-400 to-yellow-400 rounded-3xl blur-2xl opacity-20" />
            <div className="relative bg-white rounded-3xl p-10 shadow-2xl border-2 border-pink-200">
              <motion.h2
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-pink-600 via-orange-500 to-yellow-500 bg-clip-text text-transparent"
              >
                Thank You!
              </motion.h2>

              <p className="text-base text-gray-700 leading-relaxed mb-6 max-w-xl mx-auto">
                We sincerely thank our valued customers for their continued <span className="font-bold text-pink-600">trust and support</span>. 
                Your confidence inspires us to improve continuously, and we look forward to building <span className="font-bold text-orange-600">long-lasting relationships</span> in the years ahead.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group inline-flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative px-8 py-3 bg-gradient-to-r from-pink-600 to-orange-600 rounded-xl font-bold text-white shadow-xl flex items-center gap-2">
                  Get in Touch
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    whileHover={{ x: 3 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Spacer */}
      <div className="h-12" />
    </div>
  );
};

export default AboutPageRedesign;