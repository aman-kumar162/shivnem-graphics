'use client';
import React, { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'wedding', label: 'Wedding' },
    { id: 'events', label: 'Events' },
    { id: 'packaging', label: 'Packaging' }
  ];

  const portfolioItems = [
    {
      title: 'Corporate Branding Package',
      category: 'corporate',
      description: 'Complete branding solution for ABC Corp',
      image: '🏢',
      client: 'ABC Corporation',
      services: ['Logo Design', 'Business Cards', 'Brochures']
    },
    {
      title: 'Luxury Wedding Collection',
      category: 'wedding',
      description: 'Premium wedding invitation suite',
      image: '💒',
      client: 'Sharma Family',
      services: ['Invitations', 'RSVP Cards', 'Thank You Notes']
    },
    {
      title: 'Tech Conference Materials',
      category: 'events',
      description: 'Event branding and materials',
      image: '🎪',
      client: 'TechCon 2025',
      services: ['Banners', 'Badges', 'Brochures']
    },
    {
      title: 'Product Packaging Design',
      category: 'packaging',
      description: 'Premium product packaging solution',
      image: '📦',
      client: 'Organic Foods Ltd',
      services: ['Package Design', 'Labels', 'Boxes']
    },
    {
      title: 'Annual Report Design',
      category: 'corporate',
      description: 'Financial report design and print',
      image: '📊',
      client: 'Finance Corp',
      services: ['Report Design', 'Infographics', 'Print Production']
    },
    {
      title: 'Event Backdrop Design',
      category: 'events',
      description: 'Large format event materials',
      image: '🎭',
      client: 'Cultural Festival 2025',
      services: ['Backdrop Design', 'Banners', 'Promotional Materials']
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-white" style={{ background: '#ffffff' }}>
      {/* Solid white background with subtle decorative elements removed */}
      <div className="absolute inset-0 opacity-0 -z-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 opacity-0 -z-10" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-animate" ref={titleRef}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#0f172a' }}>
            Our Portfolio
          </h2>
          <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto scroll-animate" ref={subtitleRef} style={{ color: 'var(--text-on-light-muted)' }}>
            Showcasing our creative excellence and quality work.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20 max-w-7xl mx-auto">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-body transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[#2196F3] text-white shadow-lg border border-[#2196F3]'
                  : 'bg-[#E3F2FD] border border-[#BBDEFB] text-[#0b66d6] hover:border-[#2196F3] hover:bg-[#BBDEFB]'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}

        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl h-full transition-all duration-300 bg-white border border-[#BBDEFB] hover:border-[#2196F3] card-lift hover:shadow-lg"
            >
              <div className="relative h-48 sm:h-64 bg-[#E3F2FD] flex items-center justify-center overflow-hidden">
                <span className="text-6xl sm:text-8xl">{item.image}</span>
              </div>

              <div className="p-4 sm:p-8 relative z-10">
                <p className="text-xs sm:text-sm text-[#2196F3] mb-2 font-semibold uppercase tracking-wider">{item.client}</p>
                <h3 className="text-lg sm:text-2xl font-bold mb-3 sm:mb-4 group-hover:text-[#2196F3] transition-colors duration-300" style={{ color: '#0f172a' }}>
                  {item.title}
                </h3>
                <p className="text-xs sm:text-base mb-4 sm:mb-6" style={{ color: '#475569' }}>{item.description}</p>

                <div className="flex flex-wrap gap-2">
                  {item.services.map((service, i) => (
                    <span key={i} className="px-2 sm:px-3 py-1 bg-[#E3F2FD] border border-[#BBDEFB] rounded-full text-xs text-[#2196F3] hover:bg-[#2196F3] hover:text-white transition-all duration-300">
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;