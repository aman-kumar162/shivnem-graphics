'use client';

import { useEffect } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { metadata } from './metadata';
import MouseTrail from '../components/shared/MouseTrail';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./globals.css";
import "../styles/effects.css";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="antialiased min-h-screen transition-colors duration-300">
        <ThemeProvider>
          <div className="relative">
            <MouseTrail />
            {children}
          </div>
        </ThemeProvider>
        <div id="portal-root" />
      </body>
    </html>
  );
}
