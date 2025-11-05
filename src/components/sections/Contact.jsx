import { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Scene } from '../three/Scene';
import { ContactParticles } from '../three/ContactParticles';
import { SectionContainer } from '../shared/SectionContainer';
import { useTheme } from '../../context/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });

  useEffect(() => {
    // Register GSAP plugins on client-side only
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }, []);

  useGSAP(() => {
    // Only run animations on client-side
    if (typeof window === 'undefined') return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top center',
        once: true
      }
    });

    tl.fromTo('.contact-heading', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
    )
    .fromTo('.contact-form',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      '-=0.4'
    );
  }, []);

  const services = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'business-cards', label: 'Business Cards & Stationery' },
    { value: 'brochures', label: 'Brochures & Catalogs' },
    { value: 'large-format', label: 'Large Format Printing' },
    { value: 'packaging', label: 'Packaging Solutions' },
    { value: 'signage', label: 'Signage & Displays' },
    { value: 'corporate', label: 'Corporate Branding' }
  ];

  const contactInfo = {
    address: {
      line1: 'Office No. 2, Mangalyaan Society,',
      line2: 'Vidya Niketan Marg, Mahatma Gandhi Rd,',
      line3: 'Goregaon West, Mumbai - 400062',
      country: 'India'
    },
    phones: [
      { number: '+91-080-69752299', type: 'Office' },
      { number: '+91-996-703-7158', type: 'WhatsApp' }
    ],
    email: 'print@shivamgraphics.com',
    workingHours: {
      weekdays: 'Monday - Friday: 9:30 AM - 6:30 PM',
      saturday: 'Saturday: 10:00 AM - 4:00 PM',
      sunday: 'Sunday: Closed'
    }
  };
   

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message. We will get back to you shortly!'
    });
    // Here you would typically send the form data to your backend
  };

  useGSAP(() => {
    // Contact section animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.from('.contact-info', {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.contact-form', {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.8');
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene>
          <ContactParticles />
        </Scene>
      </div>
      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-title bg-gradient-to-r from-teal-500 to-teal-700 bg-clip-text text-transparent">Contact Us</h2>
          <p className="section-subtitle dark:text-gray-400">Get in touch for premium printing solutions</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="contact-info space-y-8">
            <div className="info-block flex items-start space-x-4 p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-lg">
              <div className="info-icon text-4xl bg-teal-100 dark:bg-teal-900 p-3 rounded-full">📍</div>
              <div className="info-text">
                <h4 className="text-xl font-semibold mb-2 text-teal-600 dark:text-teal-400">Visit Us</h4>
                <p className="text-gray-600 dark:text-gray-400">123 Print Street, Ambala Cantt<br />Haryana, India 133001</p>
              </div>
            </div>
            
            <div className="info-block flex items-start space-x-4 p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-lg">
              <div className="info-icon text-4xl bg-teal-100 dark:bg-teal-900 p-3 rounded-full">📞</div>
              <div className="info-text">
                <h4 className="text-xl font-semibold mb-2 text-teal-600 dark:text-teal-400">Call Us</h4>
                <p className="text-gray-600 dark:text-gray-400">+91 98765 43210<br />+91 12345 67890</p>
              </div>
            </div>
            
            <div className="info-block flex items-start space-x-4 p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-lg">
              <div className="info-icon text-4xl bg-teal-100 dark:bg-teal-900 p-3 rounded-full">✉️</div>
              <div className="info-text">
                <h4 className="text-xl font-semibold mb-2 text-teal-600 dark:text-teal-400">Email Us</h4>
                <p className="text-gray-600 dark:text-gray-400">info@shivnemgraphics.com<br />sales@shivnemgraphics.com</p>
              </div>
            </div>
            
            <div className="info-block flex items-start space-x-4 p-6 bg-white/50 dark:bg-gray-800/50 rounded-xl shadow-lg">
              <div className="info-icon text-4xl bg-teal-100 dark:bg-teal-900 p-3 rounded-full">⏰</div>
              <div className="info-text">
                <h4 className="text-xl font-semibold mb-2 text-teal-600 dark:text-teal-400">Business Hours</h4>
                <p className="text-gray-600 dark:text-gray-400">Monday - Saturday: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div className="contact-form bg-white/50 dark:bg-gray-800/50 p-8 rounded-2xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="service">Service Required</label>
                <select
                  id="service"
                  name="service"
                  className="form-control"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="digital">Digital Printing</option>
                  <option value="offset">Offset Printing</option>
                  <option value="large">Large Format</option>
                  <option value="design">Design Services</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-teal-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-teal-700 transition-colors duration-300">
                Send Message
              </button>
              
              {formStatus.submitted && (
                <div className={`p-4 rounded-lg ${formStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
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