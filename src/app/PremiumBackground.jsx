// src/components/PremiumBackground.jsx
'use client';
import React from 'react';
import './page.css'; // optional - ensure global CSS imported somewhere; remove if imported globally

/**
 * PremiumBackground
 * Props:
 *  - children: content to render above patches
 *  - showDots: boolean to enable dotted overlay
 *  - pulse: boolean to add subtle float animation
 */
export default function PremiumBackground({ children, showDots = false, pulse = true }) {
  const dotClass = showDots ? ' show-dots' : '';
  return (
    <div className={`premium-bg${dotClass}`} aria-hidden="false">
      {/* decorative patches - order matters (z-index) */}
      <div className={`premium-blob blob-1 ${pulse ? 'pulse' : ''}`} aria-hidden="true" />
      <div className={`premium-blob blob-2 ${pulse ? 'pulse-slow' : ''}`} aria-hidden="true" />
      <div className="premium-blob blob-3" aria-hidden="true" />
      <div className="premium-blob blob-4" aria-hidden="true" />

      {/* multi-color subtle aura - behind content */}
      <div className="premium-aura" aria-hidden="true" />

      {/* micro shapes */}
      <div className="premium-shape s1" aria-hidden="true" />
      <div className="premium-shape s2" aria-hidden="true" />
      <div className="premium-shape s3" aria-hidden="true" />

      {/* dotted overlay (optional) */}
      <div className="premium-dots" aria-hidden="true" />

      {/* optional red accents (not necessary, but easy to enable) */}
      {/* <div className="premium-red-patch" style={{ right: '6%', top: '8%', width: 260, height: 260 }} aria-hidden="true" /> */}
      {/* <div className="premium-red-streak" style={{ right: '6%', top: '8%' }} aria-hidden="true" /> */}

      {/* site content (above the patches) */}
      <div className="premium-content">
        {children}
      </div>
    </div>
  );
}
