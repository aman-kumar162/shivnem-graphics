import { useEffect, useRef } from 'react';

/**
 * Hook to trigger animations when elements scroll into view
 * Usage:
 *   const ref = useScrollAnimation();
 *   <div ref={ref} className="scroll-animate">Content</div>
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          // Optional: unobserve after animation to prevent re-triggering
          // observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px', // trigger 100px before element enters viewport
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return ref;
}

/**
 * Hook to add staggered animations to multiple elements
 * Usage:
 *   const refs = useScrollAnimationStagger(4);
 *   {items.map((item, i) => <div key={i} ref={refs[i]} className="scroll-animate animate-delay-{i*100}">...</div>)}
 */
export function useScrollAnimationStagger(count = 1, options = {}) {
  const refs = useRef(Array(count).fill(null).map(() => ({ current: null })));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
      ...options,
    });

    refs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [options]);

  return refs.current;
}
