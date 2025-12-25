'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, Zap, Target, TrendingUp, Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animations
      gsap.from(titleRef.current?.querySelectorAll('h1, p'), {
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

      // Cards animation
      const cards = gsap.utils.toArray('.about-card');
      cards.forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=50',
            toggleActions: 'play none none none'
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out'
        });
      });

      // Stats animation
      const stats = gsap.utils.toArray('.stat-item');
      stats.forEach((stat, i) => {
        gsap.from(stat, {
          scrollTrigger: {
            trigger: stat,
            start: 'top bottom-=50',
            toggleActions: 'play none none none'
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          delay: i * 0.1,
          ease: 'power3.out'
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

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
              Our Story
            </span>
          </div>

          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            Shivnem Graphics:
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent"> Excellence in Print</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Since our inception, we've been committed to delivering premium printing and design solutions that bring brands to life with precision, creativity, and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-red-500/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-navy-light to-navy-accent border border-red-500/20 hover:border-red-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/20 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To deliver exceptional printing and design services that exceed client expectations, combining cutting-edge technology with creative excellence. We believe in building lasting relationships through quality, reliability, and innovation in every project.
              </p>
            </div>

            {/* Vision */}
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-navy-light to-navy-accent border border-red-500/20 hover:border-red-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/20 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                To be the preferred partner for comprehensive printing and design solutions, recognized for our unwavering commitment to quality, innovation, and customer satisfaction across all industries and market segments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-dark to-navy-light/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Why Choose Shivnem Graphics
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We combine expertise, technology, and passion to deliver printing solutions that truly stand out.
            </p>
            
            {/* Decorative Divider with Stats Preview */}
            <div className="flex items-center justify-center gap-8 mt-12 mb-4 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm text-gray-400 font-semibold">Trusted by 2000+ Businesses</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-red-500/30" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm text-gray-400 font-semibold">15+ Years of Excellence</span>
              </div>
              <div className="hidden sm:block w-px h-8 bg-red-500/30" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm text-gray-400 font-semibold">10000+ Projects Delivered</span>
              </div>
            </div>
          </div>

          <div className="about-cards-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'State-of-the-art equipment and quality control processes ensure exceptional results on every project.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Experienced designers and production specialists dedicated to bringing your vision to reality.'
              },
              {
                icon: TrendingUp,
                title: 'Innovation',
                description: 'Latest printing technologies and design trends to keep your brand ahead of the competition.'
              },
              {
                icon: Heart,
                title: 'Customer First',
                description: 'Your satisfaction is our priority. We listen, adapt, and deliver solutions tailored to your needs.'
              },
              {
                icon: Zap,
                title: 'Quick Turnaround',
                description: 'Efficient processes without compromising quality. Fast delivery timelines for urgent projects.'
              },
              {
                icon: Target,
                title: 'Full Service',
                description: 'Complete solutions from concept and design to printing, finishing, and delivery.'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="about-card group relative p-8 rounded-2xl bg-navy-light border border-red-500/20 hover:border-red-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/20 transform hover:scale-105"
                >
                  {/* Left Gradient Accent */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 to-red-600 group-hover:w-1.5 transition-all duration-500 rounded-l-2xl" />
                  
                  <Icon className="w-10 h-10 text-red-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-red-500/20">
        <div className="container mx-auto max-w-6xl">
          <div className="stats-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '2K+', label: 'Happy Clients' },
              { number: '10K+', label: 'Projects Completed' },
              { number: '15+', label: 'Years Experience' },
              { number: '100%', label: 'Quality Guaranteed' }
            ].map((stat, idx) => (
              <div
                key={idx}
                className="stat-item text-center p-8 rounded-2xl bg-gradient-to-br from-navy-light to-navy-accent border border-red-500/20 hover:border-red-500/50 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-gradient-to-r from-red-400 to-red-600 bg-clip-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-semibold text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-navy-light/30 to-navy-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl sm:text-5xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Excellence',
                description: 'We pursue excellence in everything we do, from design conception to final delivery.'
              },
              {
                title: 'Integrity',
                description: 'Honest communication, transparent pricing, and reliable service form the foundation of our relationships.'
              },
              {
                title: 'Innovation',
                description: 'Continuous improvement and adoption of new technologies to serve our clients better.'
              }
            ].map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-600 mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-red-500/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your printing and design vision to life with excellence and creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300 transform hover:scale-105"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 border-2 border-red-500 text-red-400 rounded-lg font-semibold hover:bg-red-500/10 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}