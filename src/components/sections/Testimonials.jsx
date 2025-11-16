'use client';
import { useState } from 'react';
import Carousel from '../shared/Carousel';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Testimonials = () => {
  const titleRef = useScrollAnimation();
  const subtitleRef = useScrollAnimation();

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Tech Startup India',
      role: 'Founder & CEO',
      text: 'Shivnem Graphics transformed our brand identity completely. The quality and attention to detail exceeded our expectations. Highly recommended!',
      rating: 5,
      avatar: '👨🏽‍💼',
      image: '⭐'
    },
    {
      name: 'Priya Singh',
      company: 'Luxury Weddings Co.',
      role: 'Creative Director',
      text: 'Outstanding work on our wedding collection designs. The team understood our vision perfectly and delivered premium quality materials.',
      rating: 5,
      avatar: '👩🏽‍🎨',
      image: '💒'
    },
    {
      name: 'Amir Patel',
      company: 'Organic Foods Ltd',
      role: 'Marketing Manager',
      text: 'The packaging design increased our sales by 40%. Shivnem Graphics really knows how to create products that sell!',
      rating: 5,
      avatar: '👨🏽‍💼',
      image: '📦'
    },
    {
      name: 'Deepti Sharma',
      company: 'Corporate Finance Corp',
      role: 'Executive Director',
      text: 'Professional, reliable, and creative. They handle large-scale projects with ease and maintain exceptional quality standards.',
      rating: 5,
      avatar: '👩🏽‍💼',
      image: '📊'
    },
    {
      name: 'Vikram Desai',
      company: 'Event Management Pro',
      role: 'Event Director',
      text: 'Best printing partner we have worked with. Quick turnaround, amazing quality, and incredible attention to detail!',
      rating: 5,
      avatar: '👨🏽‍🔧',
      image: '🎪'
    },
  ];

  const renderTestimonial = (testimonial) => (
    <div className="h-full w-full p-8 sm:p-12 flex flex-col justify-between">
      <div>
        {/* Rating Stars */}
        <div className="flex gap-1 mb-6">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i} className="text-2xl text-brand-2">★</span>
          ))}
        </div>

        {/* Testimonial Text */}
        <p className="text-lg sm:text-xl text-white mb-8 leading-relaxed">
          "{testimonial.text}"
        </p>
      </div>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-6 border-t border-white/10">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-2 to-brand-3 flex items-center justify-center text-3xl text-white">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-bold text-white text-lg">{testimonial.name}</p>
          <p className="text-brand-2 text-sm">{testimonial.role}</p>
          <p className="text-gray-400 text-sm">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-28">
      {/* Animated background */}
      <div className="absolute inset-0 bg-section-dark -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-brand-2 to-brand-1 opacity-5 blur-3xl -z-10" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-animate" ref={titleRef}>
          <h2 className="text-gradient text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            What Clients Say
          </h2>
          <p className="text-muted text-sm sm:text-base lg:text-lg max-w-2xl mx-auto scroll-animate" ref={subtitleRef}>
            Hear from our satisfied clients about their experience with Shivnem Graphics
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Carousel
            items={testimonials}
            renderItem={renderTestimonial}
            autoPlay={true}
            autoPlayInterval={6000}
            showDots={true}
            showArrows={true}
            allowKeyboard={true}
          />
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 sm:mt-16 lg:mt-20 scroll-animate">
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '10k+', label: 'Projects Delivered' },
            { number: '20+', label: 'Years Experience' }
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 text-center rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/30 transition-all duration-300 card-lift card-glow"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <p className="text-gray-300 text-sm sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
