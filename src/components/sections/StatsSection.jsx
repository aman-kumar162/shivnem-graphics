// StatsSection.jsx
import React, { useEffect, useRef, forwardRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const stats = [
  { id: 1, value: 5000, label: "Projects Completed", emoji: "📊", color: "#14B8A6" },
  { id: 2, value: 15, label: "Years Experience", emoji: "📅", color: "#06B6D4" },
  { id: 3, value: 800, label: "Happy Clients", emoji: "👥", color: "#F59E0B" },
  { id: 4, value: 99, label: "Success Rate", emoji: "⭐", color: "#F97316" },
  { id: 5, value: 50, label: "Design Awards", emoji: "🎨", color: "#A78BFA" },
  { id: 6, value: 24, label: "Hour Support", emoji: "⚡", color: "#EF4444" },
];

const SvgGradients = () => (
    <svg aria-hidden="true" width="0" height="0" style={{ position: 'absolute', zIndex: -1 }}>
      <defs>
        {stats.map(stat => (
          <linearGradient key={stat.id} id={`g-${stat.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={stat.color} />
            <stop offset="100%" stopColor={stat.color} stopOpacity={0.5} />
          </linearGradient>
        ))}
      </defs>
    </svg>
  );

/* ----- StatCard (forwardRef so parent has direct DOM node) ----- */
const StatCard = forwardRef(({ stat }, ref) => {
  return (
    <article
      ref={ref}
      className="stat-card flex flex-col items-center p-4 sm:p-6 card-bg rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1 border-accent border"
      data-stat-id={stat.id}
      tabIndex={0}
      aria-labelledby={`stat-${stat.id}-label`}
      aria-describedby={`stat-${stat.id}-num`}
      style={{ perspective: 1000 }}
    >
      <div
        className="stat-icon mb-3 sm:mb-4 text-2xl sm:text-3xl w-10 h-10 sm:w-12 sm:h-12 rounded-full grid place-items-center text-white shadow-lg"
        style={{ background: `linear-gradient(135deg, ${stat.color}, rgba(0,0,0,0.12))` }}
      >
        <span aria-hidden>{stat.emoji}</span>
      </div>

      <div className="relative grid place-items-center mb-3 sm:mb-4">
        <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 100 100" aria-hidden>
          <circle cx="50" cy="50" r="40" stroke="rgba(148,163,184,0.2)" strokeWidth="10" fill="none" />
          <circle
            className="progress-ring"
            cx="50"
            cy="50"
            r="40"
            stroke={`url(#g-${stat.id})`}
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
            transform="rotate(-90 50 50)"
            strokeDasharray={Math.PI * 2 * 40}
            strokeDashoffset={Math.PI * 2 * 40}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div id={`stat-${stat.id}-num`} className="stat-number text-xl sm:text-2xl lg:text-3xl font-extrabold text-teal-300">
            0
          </div>
        </div>
      </div>

      <div id={`stat-${stat.id}-label`} className="stat-label text-xs sm:text-sm text-gray-300 text-center leading-tight">
        {stat.label}
      </div>
    </article>
  );
});
StatCard.displayName = "StatCard";

/* ----- StatsSection ----- */
const StatsSection = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]); // will hold DOM nodes for each card
  cardRefs.current = []; // ensure clean on re-render

  const setCardRef = (el, idx) => {
    cardRefs.current[idx] = el;
  };

  useEffect(() => {
    // safe guard for SSR
    if (typeof window === "undefined") return;

    // register plugin on client only
    if (!gsap.utils.toArray) {
      gsap.registerPlugin(ScrollTrigger);
    } else {
      // If not already registered, register
      try {
        gsap.registerPlugin(ScrollTrigger);
      } catch (e) {
        /* ignore if already registered */
      }
    }

    // safety: prefer reduced motion
    const reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // debug: show which cards were found
    console.log("StatsSection mounted. Found cards:", cardRefs.current.length);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });

    timeline.from(cardRefs.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",
    });

    const createdTriggers = [];

    cardRefs.current.forEach((cardEl, i) => {
      if (!cardEl) return;
      const numberEl = cardEl.querySelector(".stat-number");
      const ring = cardEl.querySelector(".progress-ring");
      const target = stats[i].value;

      // debugging attributes
      cardEl.dataset.found = "1";
      console.log(`card[${i}]`, { target, numberElExists: !!numberEl, ringExists: !!ring });

      const maxForFill = 5000;
      const ratio = Math.min(1, target / maxForFill);
      const circumference = Math.PI * 2 * 40;
      const finalOffset = circumference * (1 - ratio);

      const trig = ScrollTrigger.create({
        trigger: cardEl,
        start: "top 85%",
        onEnter: () => {
          if (cardEl.dataset.animated) return;
          cardEl.dataset.animated = "1";

          // If user prefers reduced motion, skip the animation and show final value
          if (reduceMotion) {
            if (numberEl) numberEl.textContent = Intl.NumberFormat().format(target);
            if (ring) ring.style.strokeDashoffset = finalOffset;
            trig.kill();
            return;
          }

          // safe numeric tween using closure object
          const countObj = { val: 0 };
          const duration = Math.min(2.2, 0.0005 * target + 1.2);

          gsap.to(countObj, {
            val: target,
            duration,
            ease: "power3.out",
            onUpdate: () => {
              if (numberEl) numberEl.textContent = Intl.NumberFormat().format(Math.round(countObj.val));
            },
            onComplete: () => {
              if (numberEl) numberEl.textContent = Intl.NumberFormat().format(target);
            },
          });

          if (ring) {
            gsap.to(ring, { strokeDashoffset: finalOffset, duration: 1.6, ease: "power3.out" });
          }

          // small pop
          gsap.fromTo(cardEl, { scale: 1 }, { scale: 1.02, duration: 0.12, yoyo: true, repeat: 1, ease: "power1.inOut" });

          // once fired, kill trigger
          trig.kill();
        },
      });

      createdTriggers.push(trig);

      // keyboard accessibility fallback: animate on focus
      const onFocus = () => {
        if (cardEl.dataset.animated) return;
        cardEl.dataset.animated = "1";
        const countObj = { val: 0 };
        const duration = Math.min(2.2, 0.0005 * target + 1.2);
        gsap.to(countObj, {
          val: target,
          duration,
          ease: "power3.out",
          onUpdate: () => {
            if (numberEl) numberEl.textContent = Intl.NumberFormat().format(Math.round(countObj.val));
          },
          onComplete: () => {
            if (numberEl) numberEl.textContent = Intl.NumberFormat().format(target);
          },
        });
        if (ring) gsap.to(ring, { strokeDashoffset: finalOffset, duration: 1.6, ease: "power3.out" });
      };
      cardEl.addEventListener("focusin", onFocus, { once: true });
    });

    return () => {
      createdTriggers.forEach((t) => t.kill && t.kill());
      ScrollTrigger.getAll().forEach((t) => t.kill && t.kill());
      timeline.kill();
      gsap.killTweensOf("*");
    };
  }, []);

  /* Render */
  return (
    <section id="stats" className="w-full py-16 sm:py-20 lg:py-24" style={{ background: 'linear-gradient(180deg, rgba(33, 150, 243, 0.06) 0%, rgba(255, 45, 149, 0.04) 100%)' }}>
      <SvgGradients />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full" ref={containerRef}>
        <div className="mb-12 sm:mb-16 lg:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">We're Proud of Our Numbers</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto">
            Results that show our experience — animated and interactive for better storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-0">
          {stats.map((s, idx) => (
            <div key={s.id} ref={(el) => setCardRef(el, idx)}>
              <StatCard stat={s} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;