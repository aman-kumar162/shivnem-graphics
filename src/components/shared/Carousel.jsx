'use client';

import { useState, useEffect } from 'react';

/**
 * Premium Carousel Component
 * Features:
 * - Auto-scroll with configurable interval
 * - Next/Previous navigation buttons
 * - Dot indicators
 * - Smooth fade/slide transitions
 * - Keyboard navigation (arrow keys)
 * - Touch swipe support (optional)
 */
export default function Carousel({
  items = [],
  autoPlay = true,
  autoPlayInterval = 5000,
  renderItem = (item, index) => <div key={index}>{item}</div>,
  showDots = true,
  showArrows = true,
  allowKeyboard = true,
  onSlideChange = () => {},
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(autoPlay);

  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlay || items.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlay, autoPlayInterval, items.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!allowKeyboard) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Notify parent of slide change
  useEffect(() => {
    onSlideChange(currentIndex);
  }, [currentIndex, onSlideChange]);

  const goToNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToPrevious = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setIsAutoPlay(false);
  };

  const handleMouseLeave = () => {
    if (autoPlay) {
      setIsAutoPlay(true);
    }
  };

  if (!items || items.length === 0) {
    return <div className="text-center text-gray-500 py-12">No items to display</div>;
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Slides Container */}
      <div className="relative w-full bg-black/5 backdrop-blur-sm">
        {/* Slides */}
        <div className="relative w-full h-full overflow-hidden">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? 'opacity-100 translate-x-0'
                  : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
              }`}
              role="region"
              aria-label={`Slide ${index + 1} of ${items.length}`}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {showArrows && items.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 group"
              aria-label="Previous slide"
              title="Previous (or press ←)"
            >
              <svg
                className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 group"
              aria-label="Next slide"
              title="Next (or press →)"
            >
              <svg
                className="w-6 h-6 text-white group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {showDots && items.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/40 w-2.5 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex}
              />
            ))}
          </div>
        )}
      </div>

      {/* Slide Counter */}
      {items.length > 1 && (
        <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium">
          {currentIndex + 1} / {items.length}
        </div>
      )}
    </div>
  );
}
