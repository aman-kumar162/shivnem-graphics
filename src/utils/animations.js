import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const animateCards = (selector, stagger = 0.2) => {
  return gsap.from(selector, {
    opacity: 0,
    y: 50,
    scale: 0.9,
    duration: 0.8,
    stagger,
    ease: 'back.out(1.7)'
  });
};

export const animateFromRight = (selector, delay = 0) => {
  return gsap.from(selector, {
    opacity: 0,
    x: 100,
    duration: 1,
    delay,
    ease: 'power3.out'
  });
};

export const animateFromLeft = (selector, delay = 0) => {
  return gsap.from(selector, {
    opacity: 0,
    x: -100,
    duration: 1,
    delay,
    ease: 'power3.out'
  });
};

export const animateIn = (selector, delay = 0) => {
  return gsap.from(selector, {
    opacity: 0,
    y: 30,
    duration: 1,
    delay,
    ease: 'power3.out'
  });
};

export const setupParallax = (selector) => {
  if (typeof window === 'undefined') return;

  try {
    return gsap.to(selector, {
      scrollTrigger: {
        trigger: selector,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      y: '20%',
      ease: 'none'
    });
  } catch (error) {
    console.warn('Parallax setup error:', error);
    return null;
  }
};

export const setupScrollReveal = (selector) => {
  if (typeof window === 'undefined') return;
  
  try {
    ScrollTrigger.batch(selector, {
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'back.out(1.7)'
      }),
      start: "top 85%",
      once: true
    });
  } catch (error) {
    console.warn('ScrollTrigger error:', error);
  }
};