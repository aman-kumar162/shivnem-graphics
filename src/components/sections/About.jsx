// src/components/AboutSection.jsx
'use client';
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import '../css/about.css';


const AboutParticles = dynamic(() => import('../three/AboutParticles'), { ssr: false });

export default function AboutSection() {
  const rootRef = useRef(null);
  const visualFrameRef = useRef(null);
  const [imageOffset, setImageOffset] = React.useState(0);

  useEffect(() => {
    /* ========== REVEAL ANIMATION ON SCROLL ========= */
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
          else entry.target.classList.remove("in-view");
        });
      },
      { threshold: 0.2 }
    );

    rootRef.current?.querySelectorAll(".reveal").forEach(el => io.observe(el));

    /* ========== PARALLAX ON SCROLL ========= */
    const onScroll = () => {
      const el = rootRef.current?.querySelector(".visual-inner");
      if (!el) return;

      const r = el.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight - r.top) / (window.innerHeight + r.height)));

      el.style.transform = `translateY(${(p - 0.5) * 20 + imageOffset}px) scale(${1 + (p - 0.5) * 0.02})`;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    /* ========== TILT ON HOVER (FRAME) ========= */
    const frame = visualFrameRef.current;
    const onMove = e => {
      const rect = frame.getBoundingClientRect();
      const dx = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const dy = (e.clientY - rect.top - rect.height / 2) / rect.height;

      frame.style.transform = `perspective(900px)
                               rotateX(${dy * -6}deg)
                               rotateY(${dx * 6}deg)
                               scale(1.015)`;
    };
    const onLeave = () =>
      (frame.style.transform =
        "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)");

    if (frame) {
      frame.addEventListener("pointermove", onMove);
      frame.addEventListener("pointerleave", onLeave);
    }

    /* ========== TILT ON HOVER (CARDS) ========= */
    const cards = rootRef.current?.querySelectorAll(".feature-card");
    const cardHandlers = [];

    cards?.forEach((card, index) => {
      const onCardMove = e => {
        const rect = card.getBoundingClientRect();
        const dx = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const dy = (e.clientY - rect.top - rect.height / 2) / rect.height;
        card.style.transform = `perspective(800px) rotateX(${dy * -8}deg) rotateY(${dx * 8}deg) translateZ(20px)`;
        card.style.zIndex = "10";
      };
      const onCardLeave = () => {
        card.style.transform = "";
        card.style.zIndex = "1";
      };
      
      // Click handler to move image
      const onCardClick = () => {
        setImageOffset(prev => prev + 30);
        setTimeout(() => setImageOffset(0), 1000);
      };
      
      card.addEventListener("pointermove", onCardMove);
      card.addEventListener("pointerleave", onCardLeave);
      card.addEventListener("click", onCardClick);
      cardHandlers.push({ element: card, move: onCardMove, leave: onCardLeave, click: onCardClick });
    });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) {
        frame.removeEventListener("pointermove", onMove);
        frame.removeEventListener("pointerleave", onLeave);
      }
      cardHandlers.forEach(h => {
        h.element.removeEventListener("pointermove", h.move);
        h.element.removeEventListener("pointerleave", h.leave);
        h.element.removeEventListener("click", h.click);
      });
    };
  }, [imageOffset]);

  return (
    <section ref={rootRef} className="about-section">
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">
          <h1 className="title reveal">
            <span className="title-accent"> <span className='text-black'> Shivnem</span> Graphics</span>
          </h1>

          <p className="subtitle reveal">
            We combine craft and technology to deliver high-fidelity print for
            brands & creators — from colour-precision proofing to large-format print.
          </p>

          <div className="card-grid">

            <div className="feature-card reveal delay-1">
              <h4>Premium Quality</h4>
              <p>Superior detail and rich color depth for lasting results.</p>
            </div>

            <div className="feature-card reveal delay-2">
              <h4>Fast Turnaround</h4>
              <p>Agile workflows ensure fast delivery without sacrificing quality.</p>
            </div>

            <div className="feature-card reveal delay-3">
              <h4>Creative Design</h4>
              <p>In-house designers craft visuals that amplify your brand.</p>
            </div>

            
  <div className="feature-card reveal delay-4">
    <h4>Custom Solutions</h4>
    <p>Tailored print systems designed around your brand's needs.</p>
  </div>

  <div className="feature-card reveal delay-5">
    <h4>Sustainable Printing</h4>
    <p>Eco-responsible materials delivering exceptional quality.</p>
  </div>

  <div className="feature-card reveal delay-6">
    <h4>Color Proofing</h4>
    <p>Advanced proofing ensures perfect color matching every time.</p>
  </div>

          </div>

        </div>

        {/* RIGHT SIDE VISUAL */}
        <div className="about-right reveal delay-3">
          <div className="visual-frame" ref={visualFrameRef}>
            <div className="visual-inner">
              <img src="/cover.png" alt="Shivnem Graphics Work" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
