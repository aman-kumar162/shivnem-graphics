// src/components/AboutSection.jsx
'use client';
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import '../css/about.css';
import StatsSection from './StatsSection';

// keep your Three.js background (lazy load to avoid SSR)
const AboutParticles = dynamic(() => import('../three/AboutParticles'), { ssr: false });

export default function AboutSection() {
  const rootRef = useRef(null);
  const visualFrameRef = useRef(null);
  const ioRef = useRef(null);

  useEffect(() => {
    // IntersectionObserver: add/remove 'in-view' for enter/exit animations
    const opts = { root: null, rootMargin: '0px 0px -12% 0px', threshold: [0.06, 0.4] };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.intersectionRatio > 0.06) el.classList.add('in-view');
        else el.classList.remove('in-view');
      });
    }, opts);
    ioRef.current = io;

    if (rootRef.current) {
      rootRef.current.querySelectorAll('.reveal').forEach((n) => io.observe(n));
    }

    // Subtle parallax on scroll for visual-bg
    const onScroll = () => {
      const el = rootRef.current?.querySelector('.visual-bg');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const p = Math.max(0, Math.min(1, (windowH - rect.top) / (windowH + rect.height)));
      const y = (p - 0.5) * 20; // move up/down
      const s = 1.01 + (p - 0.5) * 0.008;
      el.style.transform = `translateY(${y}px) scale(${s})`;
    };

    // interactive tilt for visual-frame
    const vf = visualFrameRef.current;
    let raf = null;
    const onPointerMove = (e) => {
      if (!vf) return;
      const rect = vf.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      const rx = Math.max(-1, Math.min(1, dy * 8));
      const ry = Math.max(-1, Math.min(1, dx * -8));
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        vf.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) scale(1.01)`;
      });
    };
    const onPointerLeave = () => { if (vf) vf.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'; };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    if (vf) {
      vf.addEventListener('pointermove', onPointerMove);
      vf.addEventListener('pointerleave', onPointerLeave);
    }

    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (vf) {
        vf.removeEventListener('pointermove', onPointerMove);
        vf.removeEventListener('pointerleave', onPointerLeave);
      }
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={rootRef} className="about-stunning">
      {/* background particles (Three.js) - DISABLED to show fixed background */}
      {/* <AboutParticles /> */}

      <div className="about-inner">
        <div className="about-grid">

          {/* LEFT */}
          <div className="col-left">
            <h2 className="heading reveal reveal-1">
              <p className="heading-accent">Shivnem Graphics</p>
            </h2>

            <p className="lead reveal reveal-2">
              has combined craft and technology to deliver high-fidelity print for brands and creators.
              From precise color proofing to large-format artistry — we make your ideas tangible and striking.
            </p>

            <div className="cards-grid">
              <article tabIndex={0} className="card reveal animate-delay-100">
                <h4 className="card-title">Premium Quality</h4>
                <p className="card-desc">State-of-the-art printing technology ensuring superior detail, rich color depth and lasting results.</p>
              </article>

              <article tabIndex={0} className="card reveal animate-delay-250">
                <h4 className="card-title">Fast Turnaround</h4>
                <p className="card-desc">Agile production flows and dedicated finishing ensure fast delivery without sacrificing quality.</p>
              </article>

              <article tabIndex={0} className="card reveal animate-delay-400">
                <h4 className="card-title">Creative Design</h4>
                <p className="card-desc">In-house designers craft briefs that preserve brand voice and amplify visual impact in print.</p>
              </article>
            </div>
            <StatsSection />
          </div>
          <div className="floating-dot floating-dot-1" aria-hidden="true"></div>
          <div className="floating-dot floating-dot-2" aria-hidden="true"></div>
          <div className="floating-dot floating-dot-3" aria-hidden="true"></div>
          
          {/* RIGHT VISUAL */}
          <div className="col-right reveal reveal-5">
            <div className="visual-frame" ref={visualFrameRef}>
              <img 
                src="/cover.png" 
                alt="Shivnem Graphics Work" 
                className="visual-img"
              />
              
              <div className="floating-dot floating-dot-1" aria-hidden="true"></div>
              <div className="floating-dot floating-dot-2" aria-hidden="true"></div>
              <div className="floating-dot floating-dot-3" aria-hidden="true"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
