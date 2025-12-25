'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import Lottie from 'lottie-react';
import { Star, Quote } from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';

// Layout Components
import Loader from '@/components/layout/Loader';

// Section Components
import Hero from '@/components/sections/Hero';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [animationData, setAnimationData] = useState(null);

  // Google Reviews Data - Real reviews from Google Business Profile
  const googleReviews = [
    {
      id: 1,
      name: 'Aman Kumar',
      rating: 5,
      date: '1 year ago',
      review: 'I got my business and visiting cards printed from SHIVNEM GRAPHICS, and I\'m very satisfied with their service. The print quality is excellent, with sharp text and clean finishing. They provided good paper options, guided me properly.',
      avatar: null
    },
    {
      id: 2,
      name: 'Mohit Paul',
      rating: 5,
      date: '1 year ago',
      review: 'I recently had the pleasure of working with SHIVNEM GRAPHICS for printing my sister\'s wedding invitations, and I couldn\'t be happier with the experience. Outstanding quality and service!',
      avatar: null
    },
    {
      id: 3,
      name: 'SUDHIR KUMAR',
      rating: 5,
      date: '1 year ago',
      review: 'Shivnem Graphics impressed me with their precision and speed. They turned my rough ideas into flawless prints in no time. Excellent service with a personal touch—definitely worth recommending!',
      avatar: null
    },
    {
      id: 4,
      name: 'Ankit Rajput',
      rating: 5,
      date: '1 year ago',
      review: 'They ensured that my designs were printed exactly as I wanted, with great attention to detail. The quality of the prints was outstanding, and the turnaround time was very quick. It\'s clear that they prioritize customer satisfaction.',
      avatar: null
    },
    {
      id: 5,
      name: 'Aditya Verma',
      rating: 5,
      date: '3 months ago',
      review: 'Wonderful experience! Nice workmanship. Go for him 👍',
      avatar: null
    },
    {
      id: 6,
      name: 'Daljeet',
      rating: 5,
      date: '8 months ago',
      review: 'Great service and excellent quality printing. Highly recommended for all printing needs!',
      avatar: null
    },
    {
      id: 7,
      name: 'Aman Kumar',
      rating: 5,
      date: '1 year ago',
      review: 'Professional service with attention to detail. They guided me through the entire process and delivered exactly what I wanted.',
      avatar: null
    }
  ];

  useEffect(() => {
    // Load Lottie animation
    fetch('/servicesimages/Printer-print-Media.json')
      .then(res => res.json())
      .then(data => setAnimationData(data))
      .catch(err => console.error('Failed to load animation:', err));

    // Simulating content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <main className="min-h-screen">
        <Hero />

        {/* Services Section */}
        <section className="bg-navy-dark py-20 border-t border-neon-cyan/10">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                <span className="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan bg-clip-text text-transparent">
                  Our Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive design and printing solutions tailored to your needs
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES_DATA.slice(0, 4).map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-navy-light border border-neon-cyan/10 hover:border-neon-cyan/40 transition-all duration-300 h-full hover:shadow-lg hover:shadow-neon-cyan/20 transform group-hover:scale-105 transition-transform duration-300">
                    {/* Service Image */}
                    <div className="relative h-64 bg-gradient-to-br from-navy-accent via-navy-light to-navy-dark overflow-hidden flex items-center justify-center transition-transform duration-300">
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          width={300}
                          height={300}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="text-center z-10">
                          <div className="text-6xl text-neon-cyan/30 mb-4">
                            {service.id === 'graphic-designing' && '🎨'}
                            {service.id === 'web-software-designing' && '💻'}
                            {service.id === 'digital-printing' && '🖨️'}
                            {service.id === 'offset-printing' && '🏭'}
                            {service.id === 'dtf-uv-transfer-stickers' && '✨'}
                          </div>
                          <p className="text-gray-300 text-sm font-semibold max-w-xs">{service.title}</p>
                        </div>
                      )}

                      {/* Hover Service Name Overlay - Smooth Blur */}
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <h3 className="text-white text-center font-bold text-xl px-4 drop-shadow-lg scale-75 group-hover:scale-100 transition-transform duration-500">
                          {service.title}
                        </h3>
                      </div>

                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-magenta to-neon-cyan opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {service.shortDescription}
                      </p>

                      {/* Sub-services chips */}
                      <div className="flex flex-wrap gap-2">
                        {service.subServices.slice(0, 2).map((subService, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 bg-neon-magenta/10 text-neon-magenta rounded-full border border-neon-magenta/20"
                          >
                            {subService}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Services Link */}
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 rounded-lg transition-all duration-300 font-semibold"
              >
                View All Services
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="bg-navy-dark py-20 border-t border-neon-cyan/10">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
                What We <span className="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan bg-clip-text text-transparent">Do</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From creative design to premium printing, we deliver excellence across every service
              </p>
            </div>

            {/* What We Do Grid - Image + Text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Lottie Animation */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-md">
                  {animationData && (
                    <Lottie 
                      animationData={animationData}
                      loop={true}
                      autoplay={true}
                      className="w-full"
                    />
                  )}
                </div>
              </div>

              {/* Right - Text Content with Animations */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Comprehensive Solutions for Every Need
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      title: 'Creative Design Excellence',
                      description: 'From logo design to complete brand identities, we create visual masterpieces that capture your essence.'
                    },
                    {
                      title: 'Advanced Printing Technology',
                      description: 'State-of-the-art printing equipment ensures superior quality across all printing mediums.'
                    },
                    {
                      title: 'Custom Solutions',
                      description: 'Tailored services for your unique business needs, from DTF transfers to large-format printing.'
                    },
                    {
                      title: 'Digital Innovation',
                      description: 'Web design, software development, and digital marketing services to elevate your online presence.'
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group relative p-6 rounded-xl bg-navy-light border border-neon-cyan/10 hover:border-neon-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/10 cursor-pointer transform hover:scale-105"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-1 h-full bg-gradient-to-b from-neon-cyan to-neon-magenta rounded-full mt-2 group-hover:w-2 transition-all duration-300"></div>
                        <div className="flex-1">
                          <h4 className="text-white font-bold text-lg mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-3 mt-8 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20 rounded-lg transition-all duration-300 font-semibold group"
                >
                  Explore All Services
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Google Reviews Section */}
        <section className="bg-gradient-to-b from-navy-dark to-navy-light py-20 border-t border-neon-cyan/10">
          <div className="container mx-auto px-4 max-w-7xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#4285F4"/>
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="url(#google-gradient)"/>
                  <defs>
                    <linearGradient id="google-gradient" x1="2" y1="12" x2="22" y2="12">
                      <stop offset="0%" stopColor="#4285F4"/>
                      <stop offset="50%" stopColor="#34A853"/>
                      <stop offset="100%" stopColor="#FBBC05"/>
                    </linearGradient>
                  </defs>
                </svg>
                <h2 className="text-4xl lg:text-5xl font-bold text-white" style={{ fontFamily: 'var(--font-playfair)' }}>
                  Google <span className="bg-gradient-to-r from-neon-cyan via-neon-magenta to-neon-cyan bg-clip-text text-transparent">Reviews</span>
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                What our valued customers say about us
              </p>
            </div>

            {/* Reviews Scrolling Banner */}
            <div className="relative overflow-hidden">
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy-dark via-navy-dark/80 to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy-light via-navy-light/80 to-transparent z-10 pointer-events-none" />
              
              {/* Scrolling Container */}
              <div className="flex gap-4 animate-scroll-reviews">
                {/* First set of reviews */}
                {googleReviews.map((review) => (
                  <div
                    key={`review-1-${review.id}`}
                    className="flex-shrink-0 w-[280px] group relative p-5 rounded-xl bg-navy-light/80 backdrop-blur-sm border border-neon-cyan/10 hover:border-neon-cyan/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/10"
                  >
                    {/* Left Accent Bar */}
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-neon-cyan to-neon-magenta group-hover:w-1 transition-all duration-300 rounded-l-xl" />
                    
                    {/* Rating Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, idx) => (
                        <Star 
                          key={idx} 
                          className={`w-4 h-4 ${idx < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-300 text-xs leading-relaxed mb-3 h-[60px] overflow-hidden">
                      {review.review}
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-2 pt-3 border-t border-neon-cyan/10">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center text-white font-bold text-xs">
                        {review.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold text-xs truncate">{review.name}</p>
                        <p className="text-gray-500 text-[10px]">{review.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set of reviews for seamless loop */}
                {googleReviews.map((review) => (
                  <div
                    key={`review-2-${review.id}`}
                    className="flex-shrink-0 w-[280px] group relative p-5 rounded-xl bg-navy-light/80 backdrop-blur-sm border border-neon-cyan/10 hover:border-neon-cyan/30 transition-all duration-300 hover:shadow-lg hover:shadow-neon-cyan/10"
                  >
                    {/* Left Accent Bar */}
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-neon-cyan to-neon-magenta group-hover:w-1 transition-all duration-300 rounded-l-xl" />
                    
                    {/* Rating Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, idx) => (
                        <Star 
                          key={idx} 
                          className={`w-4 h-4 ${idx < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-300 text-xs leading-relaxed mb-3 h-[60px] overflow-hidden">
                      {review.review}
                    </p>

                    {/* Reviewer Info */}
                    <div className="flex items-center gap-2 pt-3 border-t border-neon-cyan/10">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-neon-cyan to-neon-magenta flex items-center justify-center text-white font-bold text-xs">
                        {review.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white font-semibold text-xs truncate">{review.name}</p>
                        <p className="text-gray-500 text-[10px]">{review.date}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <style jsx>{`
              @keyframes scroll-reviews {
                0% {
                  transform: translateX(-50%);
                }
                100% {
                  transform: translateX(0);
                }
              }

              .animate-scroll-reviews {
                animation: scroll-reviews 50s linear infinite;
                will-change: transform;
              }

              .animate-scroll-reviews:hover {
                animation-play-state: paused;
              }
            `}</style>

            {/* Google Badge/Link */}
            <div className="text-center mt-12">
              <a
                href="https://www.google.com/search?q=shivnem+graphics+gaushala+market+ambala+cantt&ie=UTF-8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-neon-cyan/30 text-white rounded-lg hover:bg-white/20 transition-all duration-300 group"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                </svg>
                View All Reviews on Google
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
