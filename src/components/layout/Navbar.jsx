'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SERVICES_DATA } from '../../data/servicesData';
import Image from 'next/image';
import '../css/navbar-hero.css'

const Navbar = () => {
  const pathname = usePathname();
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Navigation items for route-based navigation
  const navItems = [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
  ];

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
        setHasScrolled(window.scrollY > 100);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 max-h-[100px] left-0 w-full z-[999] transition-all duration-300 backdrop-blur-md bg-gradient-to-r from-navy-accent via-navy-light to-navy-accent border-b border-neon-cyan/20 ${hasScrolled ? 'shadow-2xl shadow-neon-cyan/30 py-3' : 'py-4'}`}
    >
      <div className="container mx-auto px-7 max-w-[1300px] flex items-center justify-between">
          <Link href="/">
            <div 
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            >
            <img src="/sg.png" alt="Shivnem Graphics Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
            <div className="flex flex-col" style={{ lineHeight: '1.2' }}>
              <h2 className="text-base sm:text-lg font-bold text-white" style={{ marginBottom: '2px' }}>Shivnem Graphics</h2>
            <span 
              className="text-xs font-semibold bg-gradient-to-r from-neon-cyan via-neon-pink to-neon-magenta bg-clip-text text-transparent" 
              style={{ textShadow: '0 2px 10px rgba(0, 217, 255, 0.4)' }}
            >
              Committed to Excellence
            </span>
          </div>
          </div>
          </Link>
        
        <ul
          ref={menuRef}
          className={`nav-menu md:flex items-center space-x-1 lg:space-x-2 ${
            isMenuOpen
                ? `absolute top-full left-0 w-full bg-gradient-to-r from-navy-accent via-navy-light to-navy-accent shadow-2xl py-4 px-4 space-y-3 md:space-y-0 md:space-x-1 mt-0.5 border-b border-neon-cyan/20`
                : 'hidden md:flex'
          }`}
        >
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                className={`px-3 py-2 rounded-lg transition-all text-sm lg:text-base font-medium ${
                  pathname === item.href 
                    ? 'text-neon-cyan' 
                    : 'text-gray-200 hover:text-neon-cyan'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/contact">
            <button 
              className="hidden md:block relative px-6 py-2 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 group shadow-lg hover:shadow-neon-cyan/50 bg-neon-cyan text-navy-dark"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: 'back.out(1.7)' });
                gsap.to(e.currentTarget, { boxShadow: '0 0 20px rgba(0, 217, 255, 0.8), 0 0 40px rgba(0, 217, 255, 0.4)', duration: 0.3 });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });
                gsap.to(e.currentTarget, { boxShadow: '0 4px 15px rgba(0, 217, 255, 0.4)', duration: 0.3 });
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </Link>

          <button
            className="md:hidden relative w-6 h-6 flex flex-col justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`}>
              <span className="block w-6 h-0.5 transition-all duration-300 bg-white" />
              <span className="block w-6 h-0.5 bg-white my-1.5 transition-all duration-300" />
              <span className="block w-6 h-0.5 transition-all duration-300 bg-white" />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;