'use client';

import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}
import { Scene } from '../three/Scene';
import { ServiceIcons } from '../three/ServiceIcons';
import { useTheme } from '../../context/ThemeContext';
import FadeIn from '../shared/FadeIn';
import ScrollReveal from '../shared/ScrollReveal';
import ParallaxContainer from '../shared/ParallaxContainer';
import FloatingGallery from '../shared/FloatingGallery';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('digital');
  const { theme, isDark } = useTheme();
  
  const categories = [
    { id: 'digital', label: 'Digital Printing' },
    { id: 'offset', label: 'Offset Printing' },
    { id: 'large', label: 'Large Format' },
    { id: 'design', label: 'Design Services' }
  ];

  const services = {
    digital: [
      {
        title: 'Business Cards',
        description: 'Professional business cards with premium finish options',
        price: 'Starting from ₹499',
        features: ['Premium Paper Options', '24-Hour Turnaround', 'Custom Designs', 'Spot UV Available'],
        icon: '💼',
        id: 'business-cards',
        image: 'https://images.unsplash.com/photo-1589041127168-9b1915731dc2?q=80&w=500&h=500&fit=crop'
      },
      {
        title: 'Flyers & Brochures',
        description: 'High-quality marketing materials that demand attention',
        price: 'Starting from ₹999',
        features: ['Multiple Size Options', 'Full Color Printing', 'Fast Delivery', 'Bulk Discounts'],
        icon: '📄',
        id: 'flyers-brochures',
        image: 'https://images.unsplash.com/photo-1600469546186-c0d98657f1ae?q=80&w=500&h=500&fit=crop'
      }
      // Add more digital printing services...
    ],
    offset: [
      {
        title: 'Catalogs',
        description: 'Professional product catalogs and magazines',
        price: 'Starting from ₹2999',
        features: ['High Volume Printing', 'Superior Quality', 'Custom Sizes', 'Premium Binding'],
        icon: '📚',
        id: 'catalogs',
        image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=500&h=500&fit=crop'
      },
      {
        title: 'Packaging',
        description: 'Custom packaging solutions for your products',
        price: 'Custom Quote',
        features: ['Custom Dies', 'Multiple Materials', 'Proof Samples', 'Bulk Orders'],
        icon: '📦'
      }
      // Add more offset printing services...
    ],
    large: [
      {
        title: 'Banners',
        description: 'Eye-catching banners for indoor and outdoor use',
        price: 'Starting from ₹1499',
        features: ['Weather Resistant', 'Multiple Sizes', 'Premium Materials', 'Installation Available'],
        icon: '🎯'
      },
      {
        title: 'Vehicle Graphics',
        description: 'Transform your vehicle into a moving billboard',
        price: 'Custom Quote',
        features: ['3M Materials', 'Professional Install', 'Custom Design', 'Warranty Available'],
        icon: '🚗'
      }
      // Add more large format services...
    ],
    design: [
      {
        title: 'Logo Design',
        description: 'Professional logo design and branding solutions',
        price: 'Starting from ₹4999',
        features: ['Multiple Concepts', 'Unlimited Revisions', 'Source Files', 'Brand Guidelines'],
        icon: '✏️'
      },
      {
        title: 'Marketing Design',
        description: 'Complete marketing collateral design services',
        price: 'Custom Quote',
        features: ['Brand Consistency', 'Multi-Platform', 'Expert Design', 'Quick Turnaround'],
        icon: '🎨'
      }
      // Add more design services...
    ]
  };

  useGSAP(() => {
    // Floating animation for icons
    gsap.to('.service-icon', {
      y: 10,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: {
        each: 0.2,
        from: 'random'
      }
    });
  }, [activeCategory]);

  return (
    <section id="services" className="py-20 relative min-h-screen overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <ParallaxContainer className="services-background absolute inset-0">
        <Scene>
          <ServiceIcons position={[0, 0, -5]} />
        </Scene>
      </ParallaxContainer>
      <div className="container relative z-10">
        <FadeIn delay={0.2} className="text-center mb-16">
          <h2 className="font-display font-bold text-display-md md:text-display-lg bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent
            [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] transform hover:scale-105 transition-transform duration-300">
            Our Services
          </h2>
          <p className="font-sans text-body-lg md:text-heading-sm dark:text-gray-400 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Comprehensive printing and design solutions for all your needs
          </p>
        </FadeIn>
        
        <div className="services-categories backdrop-blur-sm bg-white/30 dark:bg-gray-900/30 rounded-2xl p-8 shadow-2xl">
          <div className="category-tabs flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <FadeIn key={category.id} delay={0.1 * index} direction="down">
                <button
                  className={`category-tab px-6 py-3 rounded-full font-display font-medium text-body-md transition-all duration-300
                    ${activeCategory === category.id 
                      ? 'bg-teal-500 text-white shadow-lg scale-105' 
                      : 'bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-gray-700'}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              </FadeIn>
            ))}
          </div>
          
          <div className="services-content mt-8">
            <FloatingGallery 
              items={services[activeCategory].map(service => ({
                title: service.title,
                price: service.price,
                image: service.image || `/images/services/${service.id}.jpg` // You'll need to add images
              }))}
            />
            <ScrollReveal selector=".service-card" className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8 mt-24">
              {services[activeCategory].map((service, index) => (
                <div 
                  key={index} 
                  className="service-card group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg 
                    transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                    border border-gray-100 dark:border-gray-700"
                >
                  <div className="service-header flex items-center gap-4 mb-4">
                    <div className="service-icon text-4xl bg-teal-100 dark:bg-teal-900/50 p-4 rounded-lg
                      transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-heading-sm font-bold text-gray-900 dark:text-white mb-1">
                        {service.title}
                      </h3>
                      <div className="service-price font-display text-body-md text-teal-600 dark:text-teal-400 font-medium">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  
                  <p className="font-sans text-body-md text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="service-features space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-sans text-body-sm text-gray-700 dark:text-gray-300">
                        <svg className="w-5 h-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button 
                    className="w-full py-3 px-6 bg-gradient-to-r from-teal-500 to-teal-600 
                      text-white rounded-lg font-display text-body-md font-medium shadow-md hover:shadow-xl 
                      transform transition-all duration-300 hover:-translate-y-1
                      focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Quote
                  </button>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;