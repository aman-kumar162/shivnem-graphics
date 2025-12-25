'use client';

import { Inter, Playfair_Display } from 'next/font/google';

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '900'],
  variable: '--font-playfair',
  display: 'swap',
});

export const neueHaasText = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-neue-haas-text',
  display: 'swap',
});

export const neueHaasDisplay = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-neue-haas-display',
  display: 'swap',
});