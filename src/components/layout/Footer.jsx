'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative py-16 overflow-hidden bg-gradient-to-r from-navy-accent via-navy-light to-navy-accent border-t-2 border-neon-cyan/30">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-accent via-transparent to-neon-magenta/5 opacity-20"></div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/sg.png" alt="Shivnem Graphics Logo" className="w-12 h-12" />
              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">Shivnem Graphics</h3>
            </div>
            <p className="font-body max-w-md text-gray-300">
              Your complete printing partner in Ambala Cantt, delivering premium quality with creative excellence for all your business and personal needs.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="font-body space-y-2 text-gray-300">
              <li><Link href="/" className="hover:text-neon-cyan transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-neon-cyan transition-colors">About</Link></li>
              <li><Link href="/services" className="hover:text-neon-cyan transition-colors">Services</Link></li>
              <li><Link href="/contact" className="hover:text-neon-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xl font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl text-gray-300 hover:text-neon-cyan transition-colors"><FaFacebook /></a>
              <a href="#" className="text-2xl text-gray-300 hover:text-neon-cyan transition-colors"><FaInstagram /></a>
              <a href="#" className="text-2xl text-gray-300 hover:text-neon-cyan transition-colors"><FaTwitter /></a>
              <a href="#" className="text-2xl text-gray-300 hover:text-neon-cyan transition-colors"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-neon-cyan/10 pt-8 text-center">
          <p className="font-body text-gray-400">&copy; {new Date().getFullYear()} Shivnem Graphics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;