'use client';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const titleRef = useScrollAnimation();
  const formRef = useScrollAnimation();

  return (
    <section id="contact" className="w-full relative overflow-hidden py-16 sm:py-20 lg:py-28">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 scroll-animate" ref={titleRef}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#000080' }}>
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-on-light-muted)' }}>
            Ready to start your project? Contact us today for a free quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 scroll-animate" ref={formRef}>
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <div className="bg-white/80 p-6 sm:p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20">
              <h3 className="text-xl sm:text-2xl font-bold mb-6" style={{ color: '#000080' }}>Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl sm:text-2xl text-blue-600">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Visit Us</p>
                    <p className="text-gray-600 text-sm sm:text-base">123 Printing Press Road,<br />Ambala City, Haryana 134003</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl sm:text-2xl text-blue-600">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <p className="text-gray-600 text-sm sm:text-base">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center text-xl sm:text-2xl text-blue-600">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <p className="text-gray-600 text-sm sm:text-base">info@shivnemgraphics.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 p-6 sm:p-8 rounded-2xl shadow-lg backdrop-blur-sm border border-white/20">
            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input type="tel" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white" placeholder="Your Phone" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
