'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_DATA } from '@/data/servicesData';
import { ArrowRight, Check, FileText, Zap } from 'lucide-react';

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Group services by category
  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'graphic-designing', name: 'Graphic Designing' },
    { id: 'web-software', name: 'Web/Software Designing' },
    { id: 'digital-printing', name: 'Digital Printing' },
    { id: 'offset-printing', name: 'Offset Printing' },
    { id: 'dtf-uv', name: 'DTF UV Transfer Stickers' },
    { id: 'flex-printing', name: 'Flex Printing' },
    { id: 'eco-vinyl', name: 'Eco-Vinyl Gum Sheet' },
    { id: 'screen-printing', name: 'Screen Printing' }
  ];

  // Service categories mapping - based on service ID
  const serviceCategoryMap = {
    'graphic-designing': 'graphic-designing',
    'web-software-designing': 'web-software',
    'digital-printing': 'digital-printing',
    'offset-printing': 'offset-printing',
    'dtf-uv-transfer-stickers': 'dtf-uv',
    'flex-printing': 'flex-printing',
    'eco-friendly-corn-sheet': 'eco-vinyl',
    'screen-printing': 'screen-printing'
  };

  const filteredServices = selectedCategory === 'all' 
    ? SERVICES_DATA 
    : SERVICES_DATA.filter(service => serviceCategoryMap[service.id] === selectedCategory);

  return (
    <main className="bg-navy-dark pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 mb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/20 rounded-full blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl opacity-20" />
        </div>

        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-playfair)' }}>
            Our Services
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Comprehensive printing and design solutions tailored to your business needs. Explore our full range of services and get a custom quote.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-24 bg-navy-light/80 backdrop-blur-md border-b border-red-500/20 z-40 py-4">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/50'
                    : 'bg-navy-accent text-gray-300 border border-red-500/20 hover:border-red-500/50 hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group relative bg-navy-light border border-red-500/20 rounded-2xl overflow-hidden hover:border-red-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-red-500/20 transform hover:scale-105"
              >
                {/* Left Gradient Accent */}
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 to-red-600 group-hover:w-1.5 transition-all duration-500" />

                {/* Image Container */}
                <div className="relative h-48 bg-navy-accent overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title || 'Service image'}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent group-hover:from-red-500/30 transition-all duration-500" />
                  
                  {/* Service Type Badge */}
                  <div className="absolute top-4 right-4 bg-red-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.title}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors duration-500">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    {service.shortDescription}
                  </p>

                  {/* Sub-services list */}
                  {service.subServices && service.subServices.length > 0 && (
                    <div className="mb-4 space-y-2">
                      {service.subServices.slice(0, 3).map((sub, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                          <Check className="w-4 h-4 text-red-400 flex-shrink-0" />
                          <span>{sub}</span>
                        </div>
                      ))}
                      {service.subServices.length > 3 && (
                        <div className="text-xs text-gray-500 pt-2">
                          +{service.subServices.length - 3} more options
                        </div>
                      )}
                    </div>
                  )}

                  {/* CTA Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-red-500/10 group-hover:border-red-500/30 transition-colors duration-500">
                    <Link
                      href={`/services/${service.id}/quote`}
                      className="flex-1 bg-red-500 text-white py-2 px-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300 flex items-center justify-center gap-2 text-sm transform hover:scale-105"
                    >
                      <FileText className="w-4 h-4" />
                      Get Quote
                    </Link>
                    <Link
                      href={`/services/${service.id}`}
                      className="flex-1 border border-red-500/40 text-red-400 py-2 px-3 rounded-lg font-semibold hover:border-red-500 hover:text-red-300 transition-colors duration-300 flex items-center justify-center gap-2 text-sm transform hover:scale-105"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Details
                    </Link>
                  </div>
                </div>

                {/* Hover Highlight Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <Zap className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No services found in this category</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-500/10 via-transparent to-red-500/10 border-t border-red-500/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? Our team can create custom solutions tailored to your specific requirements.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
