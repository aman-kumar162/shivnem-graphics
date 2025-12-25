'use client';

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data:', formData);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <main className="min-h-screen bg-navy-dark pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Location */}
            <div className="bg-navy-light border border-neon-cyan/10 rounded-2xl p-6 hover:border-neon-cyan/40 transition-all">
              <div className="text-4xl text-neon-cyan mb-4">📍</div>
              <h3 className="text-white font-bold text-lg mb-2">Location</h3>
              <p className="text-gray-400 leading-relaxed">
                39, Gaushala Market,<br />
                Gandhi Nagar,<br />
                Ambala Cantt,<br />
                Ambala Sadar,<br />
                Haryana 133001
              </p>
            </div>

            {/* Email */}
            <div className="bg-navy-light border border-neon-cyan/10 rounded-2xl p-6 hover:border-neon-cyan/40 transition-all">
              <div className="text-4xl text-neon-cyan mb-4">✉️</div>
              <h3 className="text-white font-bold text-lg mb-2">Email</h3>
              <p className="text-gray-400">
                <a href="mailto:shivnemgraphics@gmail.com" className="hover:text-neon-cyan transition-colors">
                  shivnemgraphics@gmail.com
                </a>
              </p>
            </div>

            {/* Phone */}
            <div className="bg-navy-light border border-neon-cyan/10 rounded-2xl p-6 hover:border-neon-cyan/40 transition-all">
              <div className="text-4xl text-neon-cyan mb-4">📱</div>
              <h3 className="text-white font-bold text-lg mb-2">Phone</h3>
              <p className="text-gray-400">
                <a href="tel:+919876543210" className="hover:text-neon-cyan transition-colors">
                  +91 9315135551
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-2 bg-navy-light border border-neon-cyan/10 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label className="block text-white font-semibold mb-3">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-navy-dark border border-neon-cyan/20 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-semibold mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg bg-navy-dark border border-neon-cyan/20 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Phone */}
              <div>
                <label className="block text-white font-semibold mb-3">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-lg bg-navy-dark border border-neon-cyan/20 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white font-semibold mb-3">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-lg bg-navy-dark border border-neon-cyan/20 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label className="block text-white font-semibold mb-3">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                rows="6"
                className="w-full px-4 py-3 rounded-lg bg-navy-dark border border-neon-cyan/20 text-white placeholder-gray-500 focus:outline-none focus:border-neon-cyan transition-colors"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-3 bg-neon-cyan text-navy-dark font-semibold rounded-lg hover:shadow-lg hover:shadow-neon-cyan/50 transition-all duration-300 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="bg-navy-light border border-neon-cyan/10 rounded-2xl overflow-hidden">
          <div className="w-full h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.854283744724!2d76.84743757550107!3d30.328782874794753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fb7c03d3fb5dd%3A0x7badcf60e5894f2d!2sSHIVNEM%20GRAPHICS!5e0!3m2!1sen!2sin!4v1735134000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
