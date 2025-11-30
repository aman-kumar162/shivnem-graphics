'use client';
import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

/**
 * PageTransition - Main page transition wrapper
 */
export const PageTransition = ({ children, type = 'fade' }) => {
  const ref = useRef(null);
  const pathname = usePathname();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (children === displayChildren) return;
    setTransitioning(true);
    const element = ref.current;
    if (!element) return;

    const exitTimeline = gsap.timeline({
      onComplete: () => {
        setDisplayChildren(children);
        const enterTimeline = gsap.timeline({
          onComplete: () => {
            setTransitioning(false);
          }
        });
        switch (type) {
          case 'fade':
            enterTimeline.fromTo(element, { opacity: 0 }, { opacity: 1, duration: 0.5 });
            break;
          case 'slide':
            enterTimeline.fromTo(element, { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.5 });
            break;
          case 'scale':
            enterTimeline.fromTo(element, { scale: 1.05, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 });
            break;
          case 'curtain':
            enterTimeline.fromTo(element, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 });
            break;
          default:
            break;
        }
      }
    });

    switch (type) {
      case 'fade':
        exitTimeline.to(element, { opacity: 0, duration: 0.3 });
        break;
      case 'slide':
        exitTimeline.to(element, { x: -100, opacity: 0, duration: 0.3 });
        break;
      case 'scale':
        exitTimeline.to(element, { scale: 0.95, opacity: 0, duration: 0.3 });
        break;
      case 'curtain':
        exitTimeline.to(element, { y: 50, opacity: 0, duration: 0.4 });
        break;
      default:
        break;
    }

  }, [pathname, children, type]);

  return (
    <div ref={ref} className="will-change-transform">
      {displayChildren}
    </div>
  );
};

/**
 * CurtainTransition - Curtain reveal effect
 */
export const CurtainTransition = ({ children, color = 'var(--brand-deep-navy)' }) => {
  const curtainRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const curtain = curtainRef.current;
    if (!curtain) return;

    const tl = gsap.timeline();

    // Curtain drops down
    tl.fromTo(
      curtain,
      { scaleY: 0, transformOrigin: 'top' },
      { scaleY: 1, duration: 0.5, ease: 'power3.inOut' }
    );

    // Curtain lifts up
    tl.to(curtain, {
      scaleY: 0,
      transformOrigin: 'bottom',
      duration: 0.5,
      ease: 'power3.inOut',
      delay: 0.2
    });

  }, [pathname]);

  return (
    <>
      <div
        ref={curtainRef}
        className="fixed inset-0 z-[9999] pointer-events-none"
        style={{ 
          backgroundColor: color,
          transform: 'scaleY(0)'
        }}
      />
      {children}
    </>
  );
};

/**
 * SplitTransition - Split screen reveal
 */
export const SplitTransition = ({ children }) => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const left = leftRef.current;
    const right = rightRef.current;
    if (!left || !right) return;

    const tl = gsap.timeline();

    // Splits close
    tl.fromTo(
      left,
      { x: '-100%' },
      { x: 0, duration: 0.6, ease: 'power3.inOut' }
    );

    tl.fromTo(
      right,
      { x: '100%' },
      { x: 0, duration: 0.6, ease: 'power3.inOut' },
      '<'
    );

    // Splits open
    tl.to(left, { x: '-100%', duration: 0.6, ease: 'power3.inOut', delay: 0.2 });
    tl.to(right, { x: '100%', duration: 0.6, ease: 'power3.inOut' }, '<');

  }, [pathname]);

  return (
    <>
      <div
        ref={leftRef}
        className="fixed inset-y-0 left-0 w-1/2 z-[9999] pointer-events-none bg-brand-blue"
        style={{ transform: 'translateX(-100%)' }}
      />
      <div
        ref={rightRef}
        className="fixed inset-y-0 right-0 w-1/2 z-[9999] pointer-events-none bg-brand-purple"
        style={{ transform: 'translateX(100%)' }}
      />
      {children}
    </>
  );
};

/**
 * CircleTransition - Circular reveal
 */
export const CircleTransition = ({ children }) => {
  const circleRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    const tl = gsap.timeline();

    // Circle expands
    tl.fromTo(
      circle,
      { scale: 0 },
      { scale: 3, duration: 0.8, ease: 'power3.inOut' }
    );

    // Circle contracts
    tl.to(circle, {
      scale: 0,
      duration: 0.8,
      ease: 'power3.inOut',
      delay: 0.2
    });

  }, [pathname]);

  return (
    <>
      <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden">
        <div
          ref={circleRef}
          className="w-screen h-screen rounded-full bg-gradient-hero"
          style={{ transform: 'scale(0)' }}
        />
      </div>
      {children}
    </>
  );
};

/**
 * MorphTransition - Morphing shape transition
 */
export const MorphTransition = ({ children }) => {
  const shapeRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const shape = shapeRef.current;
    if (!shape) return;

    const tl = gsap.timeline();

    // Morph in
    tl.fromTo(
      shape,
      {
        clipPath: 'circle(0% at 50% 50%)',
        opacity: 0
      },
      {
        clipPath: 'circle(150% at 50% 50%)',
        opacity: 1,
        duration: 0.8,
        ease: 'power4.inOut'
      }
    );

    // Morph out
    tl.to(shape, {
      clipPath: 'circle(0% at 50% 50%)',
      opacity: 0,
      duration: 0.8,
      ease: 'power4.inOut',
      delay: 0.2
    });

  }, [pathname]);

  return (
    <>
      <div
        ref={shapeRef}
        className="fixed inset-0 z-[9999] pointer-events-none bg-gradient-hero"
        style={{ clipPath: 'circle(0% at 50% 50%)' }}
      />
      {children}
    </>
  );
};

/**
 * SectionTransitionTrigger - Trigger animations on scroll
 */
export const SectionTransitionTrigger = ({ 
  children, 
  from = 'bottom',
  threshold = 0.3 
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  useEffect(() => {
    if (!isVisible || !ref.current) return;

    const directions = {
      bottom: { y: 50, x: 0 },
      top: { y: -50, x: 0 },
      left: { x: -50, y: 0 },
      right: { x: 50, y: 0 }
    };

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        ...directions[from]
      },
      {n        opacity: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      }
    );
  }, [isVisible, from]);

  return <div ref={ref}>{children}</div>;
};

/**
 * StaggerChildren - Stagger animation for child elements
 */
export const StaggerChildren = ({ 
  children, 
  staggerDelay = 0.1,
  from = 'bottom' 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const childElements = containerRef.current.children;

    const directions = {
      bottom: { y: 30 },
      top: { y: -30 },
      left: { x: -30 },
      right: { x: 30 }
    };

    gsap.fromTo(
      childElements,
      {n        opacity: 0,
        ...directions[from]
      },
      {n        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.8,
        stagger: staggerDelay,
        ease: 'power3.out'
      }
    );
  }, [staggerDelay, from]);

  return <div ref={containerRef}>{children}</div>;
};

/**
 * RouteChangeProgress - Progress bar for route changes
 */
export const RouteChangeProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);

    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 100);

    // Complete progress
    const timeout = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 300);
    }, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-magenta transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/50 animate-shimmer" />
      </div>
    </div>
  );
};

/**
 * ScrollProgress - Scroll progress indicator
 */
export const ScrollProgress = ({ color = 'var(--brand-blue)' }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1">
      <div
        className="h-full transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          background: color
        }}
      />
    </div>
  );
};

export default PageTransition;