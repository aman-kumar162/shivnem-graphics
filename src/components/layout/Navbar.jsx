'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(navRef.current.querySelector('.nav-logo'), {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: 'power3.out',
        delay: 0.5
      });

      gsap.from(navRef.current.querySelectorAll('.nav-menu li'), {
        opacity: 0,
        y: -20,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.8
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setHasScrolled(window.scrollY > 50);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        hasScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="nav-logo flex flex-col">
          <h2 className="text-xl font-bold text-gray-900">Shivnem Graphics</h2>
          <span className="text-sm text-gray-600">Premium Solutions</span>
        </div>
        
        <ul
          ref={menuRef}
          className={`nav-menu md:flex items-center space-x-6 ${
            isMenuOpen
              ? 'absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 space-y-4 md:space-y-0'
              : 'hidden md:flex'
          }`}
        >
          {['home', 'about', 'services', 'products', 'portfolio', 'process', 'team', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-gray-700 hover:text-teal-500 transition-colors capitalize"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-4">
          <button 
            className="hidden md:block bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Quote
          </button>

          <button
            className="md:hidden relative w-6 h-6"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`}>
              <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`} />
              <span className={`block w-6 h-0.5 bg-gray-900 my-1.5 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`} />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;