'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapFadeIn = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const { delay = 0, duration = 1, from = { opacity: 0 }, to = { opacity: 1 } } = options;

    const animation = gsap.fromTo(element, from, {
      ...to,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      animation.kill();
    };
  }, [options]);

  return elementRef;
};

export const useGsapTextReveal = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const { delay = 0, stagger = 0.05, splitBy = 'chars' } = options;
    
    // Simple split, assuming no complex HTML inside
    const originalText = element.textContent;
    const splitContent = splitBy === 'chars' ? originalText.split('') : originalText.split(' ');
    
    element.innerHTML = ''; // Clear original content

    const fragments = splitContent.map(part => {
      const span = document.createElement('span');
      span.textContent = part + (splitBy === 'words' ? ' ' : '');
      span.style.display = 'inline-block'; // Important for transform
      span.style.opacity = 0;
      element.appendChild(span);
      return span;
    });

    const animation = gsap.to(fragments, {
      opacity: 1,
      y: 0,
      stagger,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      animation.kill();
      element.textContent = originalText; // Restore original on cleanup
    };
  }, [options]);

  return elementRef;
};

export const useGsapStaggerChildren = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const { delay = 0, stagger = 0.1 } = options;
    const children = Array.from(element.children);

    const animation = gsap.from(children, {
      opacity: 0,
      y: 50,
      stagger,
      delay,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 90%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      animation.kill();
    };
  }, [options]);

  return elementRef;
};


export const useGsapScrollReveal = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const {
      start = 'top 80%',
      end = 'bottom 20%',
      toggleActions = 'play none none none',
      scrub = false,
      ...animOptions
    } = options;

    const animation = gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start,
        end,
        toggleActions,
        scrub,
      },
      ...animOptions,
    });

    return () => {
      animation.kill();
    };
  }, [options]);

  return elementRef;
};
