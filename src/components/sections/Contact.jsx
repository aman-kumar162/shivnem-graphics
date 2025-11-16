'use client';
import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });
  const containerRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: true, message: 'Thank you! Your message has been sent.' });
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setFormStatus({ submitted: false, success: false, message: '' });
    }, 5000);
  };

  useGSAP(() => {
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 100,
      duration: 1,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section id="contact" className="w-full py-16 sm:py-20 lg:py-28 text-white" style={{ background: '#FF6B35' }}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white">Contact Us</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">Get in touch for premium printing solutions and consultation</p>
        </div>
        
        <div className="contact-content grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto" ref={containerRef}>
          {/* Contact Info Section */}
          <div className="space-y-6 sm:space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all border border-white/20" style={{ background: 'rgba(255,255,255,0.06)' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white flex-shrink-0 text-lg sm:text-xl" style={{ background: 'rgba(255,255,255,0.12)' }}>
                📍
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Visit Us</h3>
                <p className="text-sm sm:text-base text-white/90">Office No. 2, Mangalyaan Society, Vidya Niketan Marg, Goregaon West, Mumbai - 400062, India</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 p-4 sm:p-6 card-bg rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all border-accent border hover:border-teal-400/60">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white flex-shrink-0 text-lg sm:text-xl">
                📞
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Call Us</h3>
                <div className="text-sm sm:text-base text-gray-300 space-y-1">
                  <div>Office: +91-080-69752299</div>
                  <div>WhatsApp: +91-996-703-7158</div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 p-4 sm:p-6 card-bg rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all border-accent border hover:border-teal-400/60">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white flex-shrink-0 text-lg sm:text-xl">
                ✉️
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Email</h3>
                <p className="text-sm sm:text-base text-gray-300">print@shivamgraphics.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 p-4 sm:p-6 card-bg rounded-lg sm:rounded-xl shadow-md hover:shadow-lg transition-all border-accent border hover:border-teal-400/60">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center text-white flex-shrink-0 text-lg sm:text-xl">
                ⏰
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Hours</h3>
                <div className="text-xs sm:text-sm text-gray-300 space-y-1">
                  <div>Monday - Friday: 9:30 AM - 6:30 PM</div>
                  <div>Saturday: 10:00 AM - 4:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="card-bg p-6 sm:p-8 rounded-lg sm:rounded-xl shadow-lg border-accent border">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your full name"
                  className="w-full px-4 py-2 sm:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-700/50 text-white text-sm sm:text-base placeholder-gray-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2 sm:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-700/50 text-white text-sm sm:text-base placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-2 sm:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-700/50 text-white text-sm sm:text-base placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Service Required *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 sm:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-700/50 text-white text-sm sm:text-base"
                >
                  <option value="">Select a service</option>
                  <option value="business-cards">Business Cards & Stationery</option>
                  <option value="brochures">Brochures & Catalogs</option>
                  <option value="large-format">Large Format Printing</option>
                  <option value="packaging">Packaging Solutions</option>
                  <option value="signage">Signage & Displays</option>
                  <option value="corporate">Corporate Branding</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell us about your printing needs..."
                  className="w-full px-4 py-2 sm:py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-gray-700/50 text-white text-sm sm:text-base placeholder-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
              >
                Send Message
              </button>

              {formStatus.submitted && (
                <div
                  className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
                    formStatus.success
                      ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                      : 'bg-red-500/20 text-red-300 border border-red-500/50'
                  }`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
