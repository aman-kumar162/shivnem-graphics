import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Scene } from '../three/Scene';
import { PortfolioGallery } from '../three/PortfolioGallery';
import { SectionContainer } from '../shared/SectionContainer';
import { useTheme } from '../../context/ThemeContext';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

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

  useGSAP(() => {
    // Animate portfolio items when filter changes
    const tl = gsap.timeline();

    tl.from('.portfolio-item', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });

    // Setup scroll animations
    ScrollTrigger.batch('.portfolio-item', {
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out'
      }),
      once: true
    });
  }, [activeFilter]);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-neue-haas-display font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
            Our Portfolio
          </h2>
          <p className="text-lg font-neue-haas-text text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing our creative excellence and quality work
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`px-6 py-2 rounded-full text-sm font-neue-haas-text transition-all duration-300 
                ${activeFilter === filter.id 
                  ? 'bg-teal-500 text-white shadow-lg' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div 
              key={index} 
              className="portfolio-item bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group"
              data-category={item.category}
            >
              <div className="relative aspect-video bg-gradient-to-br from-teal-500/10 to-teal-700/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl transform transition-transform duration-300 group-hover:scale-110">
                    {item.image}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-6 h-full flex flex-col justify-between text-white">
                    <div>
                      <h4 className="text-xl font-neue-haas-display font-bold mb-2">{item.title}</h4>
                      <p className="text-sm font-neue-haas-text mb-4">{item.description}</p>
                      <ul className="space-y-1">
                        {item.services.map((service, idx) => (
                          <li key={idx} className="text-sm font-neue-haas-text text-gray-300">• {service}</li>
                        ))}
                      </ul>
                    </div>
                    <button 
                      className="mt-4 px-6 py-2 bg-teal-500 text-white rounded-full font-neue-haas-text hover:bg-teal-600 transition-colors duration-300"
                      onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                    >
                      Request Similar
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-neue-haas-display font-bold mb-2 dark:text-white">
                  {item.client}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 font-neue-haas-text">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;