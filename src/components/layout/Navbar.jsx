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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-sm ${hasScrolled ? 'shadow-2xl py-3' : 'py-4'}`}
      style={{ backgroundColor: 'rgba(15,23,42,0.95)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl flex items-center justify-between">
          <div className="nav-logo flex items-center gap-3">
          <img src="/sg.png" alt="Shivnem Graphics Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
          <div className="flex flex-col">
            <h2 className="text-lg sm:text-xl font-bold text-white">Shivnem Graphics</h2>
            <span className="text-xs sm:text-sm" style={{ color: 'var(--brand-blue)' }}>Premium Solutions</span>
          </div>
        </div>
        
        <ul
          ref={menuRef}
          className={`nav-menu md:flex items-center space-x-1 lg:space-x-2 ${
            isMenuOpen
                ? 'absolute top-full left-0 w-full bg-gradient-to-r from-slate-900 via-[var(--theme-accent)] to-[var(--theme-accent-2)] shadow-2xl py-4 px-4 space-y-3 md:space-y-0 md:space-x-1 mt-0.5'
                : 'hidden md:flex'
          }`}
        >
          {['home', 'about', 'services', 'products', 'portfolio', 'process', 'team', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-white hover:text-white px-3 py-2 rounded-lg transition-all capitalize text-sm lg:text-base font-medium"
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

        <div className="flex items-center space-x-3 sm:space-x-4">
          <button 
            className="hidden md:block text-white px-6 py-2 rounded-lg transition-all font-medium text-sm"
            style={{ backgroundColor: 'var(--brand-orange)' }}
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Quote
          </button>

          <button
            className="md:hidden relative w-6 h-6 flex flex-col justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`}>
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`} />
              <span className={`block w-6 h-0.5 bg-white my-1.5 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
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