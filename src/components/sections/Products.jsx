import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Scene } from '../three/Scene';
import { FloatingProducts } from '../three/FloatingProducts';
import { SectionContainer } from '../shared/SectionContainer';
import { useTheme } from '../../context/ThemeContext';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Products' },
    { id: 'business-cards', label: 'Business Cards' },
    { id: 'wedding-invitations', label: 'Wedding Items' },
    { id: 'brochures', label: 'Brochures' },
    { id: 'banners', label: 'Banners' },
    { id: 'packaging', label: 'Packaging' },
    { id: 'promotional', label: 'Promotional' }
  ];

  const products = [
    {
      title: 'Premium Business Cards',
      category: 'business-cards',
      description: 'High-quality business cards with spot UV',
      price: '₹499/100pcs',
      image: '🃏'
    },
    {
      title: 'Luxury Wedding Cards',
      category: 'wedding-invitations',
      description: 'Elegant wedding invitations',
      price: '₹50/pc',
      image: '💌'
    },
    {
      title: 'Corporate Brochures',
      category: 'brochures',
      description: 'Professional company brochures',
      price: '₹999/100pcs',
      image: '📔'
    },
    {
      title: 'Outdoor Banners',
      category: 'banners',
      description: 'Weather-resistant vinyl banners',
      price: '₹80/sqft',
      image: '🎯'
    },
    {
      title: 'Custom Packaging',
      category: 'packaging',
      description: 'Branded product packaging',
      price: 'Custom Quote',
      image: '📦'
    },
    {
      title: 'Promotional Items',
      category: 'promotional',
      description: 'Custom promotional products',
      price: 'Varies',
      image: '🎁'
    },
    // Add more products...
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  useGSAP(() => {
    // Animate products when filter changes
    const tl = gsap.timeline();

    tl.from('.product-card', {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out'
    });

    // Setup scroll animations
    ScrollTrigger.batch('.product-card', {
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
    <section id="products" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-neue-haas-display font-bold mb-4 bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">
            Product Gallery
          </h2>
          <p className="text-lg font-neue-haas-text text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our extensive range of printing products and solutions
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`px-6 py-2 rounded-full text-sm font-neue-haas-text transition-all duration-300 
                ${activeFilter === filter.id 
                  ? 'bg-teal-500 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={index} 
              className="product-card bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
              data-category={product.category}
            >
              <div className="relative group aspect-video bg-gradient-to-br from-teal-500/10 to-teal-700/10 flex items-center justify-center">
                <div className="text-6xl product-icon group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    className="px-6 py-2 bg-teal-500 text-white rounded-full font-neue-haas-text transform -translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Quote
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-neue-haas-display font-bold mb-2 dark:text-white">
                  {product.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 font-neue-haas-text">
                  {product.description}
                </p>
                <div className="text-teal-500 font-neue-haas-display font-bold">
                  {product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;