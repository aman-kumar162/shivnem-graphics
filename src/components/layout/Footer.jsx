'use client';
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-primary text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-accent opacity-20"></div>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/sg.png" alt="Shivnem Graphics Logo" className="w-12 h-12" />
              <h3 className="font-heading text-2xl sm:text-3xl font-bold">Shivnem Graphics</h3>
            </div>
            <p className="font-body text-gray-400 max-w-md">
              Your complete printing partner in Ambala Cantt, delivering premium quality with creative excellence for all your business and personal needs.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="font-body space-y-2">
              <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-2xl hover:text-accent transition-colors"><FaFacebook /></a>
              <a href="#" className="text-2xl hover:text-accent transition-colors"><FaInstagram /></a>
              <a href="#" className="text-2xl hover:text-accent transition-colors"><FaTwitter /></a>
              <a href="#" className="text-2xl hover:text-accent transition-colors"><FaLinkedin /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="font-body text-gray-500">&copy; {new Date().getFullYear()} Shivnem Graphics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;