/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Clash Display', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
        'neue-haas-text': ['var(--font-neue-haas-text)', ...defaultTheme.fontFamily.sans],
        'neue-haas-display': ['var(--font-neue-haas-display)', ...defaultTheme.fontFamily.sans],
        sans: ['FKGroteskNeue', 'Geist', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#0F172A',
        accent: '#4F46E5',
        secondary: '#9333EA',
        light: '#F9FAFB',
        'cream-50': 'var(--color-cream-50)',
        'cream-100': 'var(--color-cream-100)',
        'gray-200': 'var(--color-gray-200)',
        'gray-300': 'var(--color-gray-300)',
        'gray-400': 'var(--color-gray-400)',
        'gray-500': 'var(--color-gray-500)',
        'slate-500': 'var(--color-slate-500)',
        'slate-900': 'var(--color-slate-900)',
        'teal-300': 'var(--color-teal-300)',
        'teal-400': 'var(--color-teal-400)',
        'teal-500': 'var(--color-teal-500)',
        'teal-600': 'var(--color-teal-600)',
        'teal-700': 'var(--color-teal-700)',
        'teal-800': 'var(--color-teal-800)',
      },
      fontSize: {
        ...defaultTheme.fontSize,
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
}