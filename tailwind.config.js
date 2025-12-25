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
        serif: ['var(--font-playfair)', ...defaultTheme.fontFamily.serif],
        'neue-haas-text': ['var(--font-neue-haas-text)', ...defaultTheme.fontFamily.sans],
        'neue-haas-display': ['var(--font-neue-haas-display)', ...defaultTheme.fontFamily.sans],
        sans: ['FKGroteskNeue', 'Geist', 'Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#0A0E27', // Dark Navy
        accent: '#E63946', // Red/Crimson
        secondary: '#E63946', // Red/Crimson
        light: '#FFFFFF',
        'neon-cyan': '#E63946', // Changed to red
        'neon-magenta': '#E63946', // Changed to red
        'neon-pink': '#F14757', // Changed to bright red
        'navy-dark': '#0A0E27',
        'navy-light': '#1A1F3A',
        'navy-accent': '#252D47',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B8BCC8',
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
        'midnight-navy': '#0A0E27',
        'crimson-red': '#E63946',
        'bright-teal': '#E63946',
        'off-white': '#F5F5F5',
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