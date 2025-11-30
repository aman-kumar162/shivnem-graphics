'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import ThemeTransition from '@/components/layout/ThemeTransition';

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <ThemeTransition />
      {children}
    </ThemeProvider>
  );
}
