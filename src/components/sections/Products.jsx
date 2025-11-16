'use client';
import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Carousel from '../shared/Carousel';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();

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

  return (
    <section id="products" className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-28" style={{ background: '#FFF3E0' }}>
      {/* Light orange solid background */}
      <div className="absolute inset-0 opacity-0 -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-0 -z-10" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-animate" ref={titleRef}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#0f172a' }}>
            Product Gallery
          </h2>
          <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto scroll-animate" ref={subtitleRef} style={{ color: 'var(--text-on-light-muted)' }}>
            Explore our extensive range of printing products and solutions
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20 max-w-7xl mx-auto">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`px-6 py-2 rounded-full text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[#FF6B35] text-white shadow-lg border border-[#FF6B35]'
                  : 'bg-[#FFF3E0] border border-[#FFE3C9] text-[#FF6B35] hover:border-[#FF6B35] hover:bg-[#FFE3C9]'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {filteredProducts.map((product, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl transition-all duration-300
                         bg-white
                         border border-[#FFE3C9] hover:border-[#FF6B35]
                         card-lift"
              data-category={product.category}
            >
              <div className="relative aspect-video bg-[#FFF3E0] flex items-center justify-center overflow-hidden">
                <div className="text-6xl product-icon group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <button 
                    className="px-6 py-2 bg-[#FF6B35] text-white rounded-full font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105"
                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                  >
                    Get Quote
                  </button>
                </div>
              </div>

              <div className="p-6 relative z-10">
                <h4 className="text-xl font-bold mb-2 group-hover:text-[#FF6B35] transition-colors duration-300" style={{ color: '#0f172a' }}>
                  {product.title}
                </h4>
                <p className="mb-4 text-sm" style={{ color: 'var(--text-on-light-muted)' }}>
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="text-[#FF6B35] font-bold">
                  {product.price}
                  </div>
                  <span className="text-xs bg-[#FFF3E0] border border-[#FFE3C9] px-3 py-1 rounded-full text-[#FF6B35]">
                    {product.category.replace('-', ' ').toUpperCase()}
                  </span>
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