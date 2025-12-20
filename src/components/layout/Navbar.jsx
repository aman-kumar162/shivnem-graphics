'use client';

import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../../context/ThemeContext';
import '../css/navbar-hero.css'

const Navbar = () => {
  const pathname = usePathname();
  const { isDark } = useTheme();
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

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
        
        // Detect active section
        const sections = ['about', 'services', 'products', 'portfolio', 'process', 'team', 'contact'];
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial check
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 max-h-[100px] left-0 w-full z-[999] transition-all duration-300 backdrop-blur-sm ${
        isDark ? 'bg-midnight-navy/95' : 'bg-[#e7d9cc]/95'
      } ${hasScrolled ? 'shadow-2xl py-3' : 'py-4'}`}
    >
      <div className="container mx-auto px-7 max-w-[1300px] flex items-center justify-between">
          <div 
            className="flex items-center gap-3 "
          >
          <img src="/sg.png" alt="Shivnem Graphics Logo" className="w-10 h-10 sm:w-12 sm:h-12" />
          <div className="flex flex-col" style={{ lineHeight: '1.2' }}>
            <h2 className={`text-base sm:text-lg font-bold ${isDark ? 'text-white' : 'text-[#4a4e4d]'}`} style={{ marginBottom: '2px' }}>Shivnem Graphics</h2>
            <span 
              className="text-xs font-semibold bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent" 
              style={{ textShadow: '0 2px 10px rgba(100, 181, 246, 0.4)' }}
            >
              Committed to Excellence
            </span>
          </div>
      </div>
        
        <ul
          ref={menuRef}
          className={`nav-menu md:flex items-center space-x-1 lg:space-x-2 ${
            isMenuOpen
                ? `absolute top-full left-0 w-full ${isDark ? 'bg-midnight-navy' : 'bg-[#e7d9cc]'} shadow-2xl py-4 px-4 space-y-3 md:space-y-0 md:space-x-1 mt-0.5`
                : 'hidden md:flex'
          }`}
        >
          {['about', 'services', 'products', 'portfolio', 'process', 'team', 'contact'].map((item) => (
            <li key={item}>
              {item === 'about' ? (
                <Link
                  href="/about"
                  className={`px-3 py-2 rounded-lg transition-all capitalize text-sm lg:text-base font-medium ${
                    isDark 
                      ? `text-off-white hover:text-bright-teal ${pathname === '/about' ? 'text-bright-teal' : ''}`
                      : `text-[#4a4e4d] hover:text-bright-teal ${pathname === '/about' ? 'text-bright-teal font-bold' : ''}`
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              ) : (
                <a
                  href={`#${item}`}
                  className={`px-3 py-2 rounded-lg transition-all capitalize text-sm lg:text-base font-medium ${
                    isDark
                      ? `text-off-white hover:text-bright-teal ${activeSection === item && pathname === '/' ? 'text-bright-teal' : ''}`
                      : `text-[#4a4e4d] hover:text-bright-teal ${activeSection === item && pathname === '/' ? 'text-bright-teal font-bold' : ''}`
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (pathname === '/') {
                      document.getElementById(item)?.scrollIntoView({ behavior: 'smooth' });
                      setActiveSection(item);
                    } else {
                      window.location.href = `/#${item}`;
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <button 
            className={`hidden md:block relative px-6 py-2 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 group shadow-lg hover:shadow-xl ${
              isDark ? 'bg-crimson-red' : 'bg-gradient-to-r from-crimson-red to-orange-500'
            }`}

            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onMouseEnter={(e) => {
              gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: 'back.out(1.7)' });
              gsap.to(e.currentTarget, { boxShadow: '0 0 20px rgba(194, 24, 91, 0.6), 0 0 40px rgba(230, 81, 0, 0.4)', duration: 0.3 });
            }}
            onMouseLeave={(e) => {
              gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });
              gsap.to(e.currentTarget, { boxShadow: '0 4px 15px rgba(194, 24, 91, 0.4)', duration: 0.3 });
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Get Quote
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-magenta opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            className="md:hidden relative w-6 h-6 flex flex-col justify-center"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`hamburger-icon ${isMenuOpen ? 'active' : ''}`}>
              <span className={`block w-6 h-0.5 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-[#4a4e4d]'} ${
                isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`} />
              <span className={`block w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-[#4a4e4d]'} my-1.5 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`} />
              <span className={`block w-6 h-0.5 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-[#4a4e4d]'} ${
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