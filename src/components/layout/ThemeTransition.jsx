'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';

const ThemeTransition = () => {
  const { theme } = useTheme();
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 500);
    return () => clearTimeout(timer);
  }, [theme]);

  return (
    <div
      className={`
        fixed inset-0 pointer-events-none z-[9999]
        transition-opacity duration-500
        ${isTransitioning ? 'opacity-100' : 'opacity-0'}
      `}
      style={{
        background: theme === 'dark' ? '#5f69a3ff' : '#FFFFFF'
      }}
    />
  );
};

export default ThemeTransition;
