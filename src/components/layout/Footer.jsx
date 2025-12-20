'use client';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  return (
    <footer className={`relative py-16 overflow-hidden transition-colors duration-300 ${
      isDark ? 'bg-midnight-navy text-off-white' : 'bg-[#e7d9cc] text-[#4a4e4d]'
    }`}>
      <div className={`absolute inset-0 transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-midnight-navy via-transparent to-bright-teal/20 opacity-20' 
          : 'bg-gradient-to-br from-gray-200 via-transparent to-bright-teal/10 opacity-40'
      }`}></div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/sg.png" alt="Shivnem Graphics Logo" className="w-12 h-12" />
              <h3 className={`font-heading text-2xl sm:text-3xl font-bold ${isDark ? 'text-white' : 'text-[#4a4e4d]'}`}>Shivnem Graphics</h3>
            </div>
            <p className={`font-body max-w-md ${isDark ? 'text-off-white/80' : 'text-[#4a4e4d]/80'}`}>
              Your complete printing partner in Ambala Cantt, delivering premium quality with creative excellence for all your business and personal needs.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="font-body space-y-2">
              <li><a href="#" className="hover:text-bright-teal transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-bright-teal transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-bright-teal transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-bright-teal transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-bright-teal transition-colors"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-bright-teal transition-colors"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-bright-teal transition-colors"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-bright-teal transition-colors"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className={`mt-12 border-t pt-8 text-center ${isDark ? 'border-gray-800' : 'border-[#4a4e4d]/20'}`}>
          <p className={`font-body ${isDark ? 'text-off-white/60' : 'text-[#4a4e4d]/60'}`}>&copy; {new Date().getFullYear()} Shivnem Graphics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;