import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        text: {
          DEFAULT: 'var(--text, #000)',
          muted: 'var(--text-muted, #64748b)',
        },
      },
    },
  },
  safelist: [
    'grid-cols-1',
    'grid-cols-2',
    'grid-cols-3',
    'grid-cols-4',
    'grid-cols-5',
    'grid-cols-6',
    'grid-cols-7',
    'grid-cols-8',
    'grid-cols-9',
    'grid-cols-10',
    'grid-cols-11',
    'grid-cols-12',
    'gap-4',
    'gap-6',
    'gap-8',
    'md:grid-cols-1',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'md:grid-cols-4',
    'md:grid-cols-5',
    'md:grid-cols-6',
    'md:grid-cols-7',
    'md:grid-cols-8',
    'md:grid-cols-9',
    'md:grid-cols-10',
    'md:grid-cols-11',
    'md:grid-cols-12',
    'md:gap-4',
    'md:gap-6',
    'md:gap-8',
    'lg:grid-cols-1',
    'lg:grid-cols-2',
    'lg:grid-cols-3',
    'lg:grid-cols-4',
    'lg:grid-cols-5',
    'lg:grid-cols-6',
    'lg:grid-cols-7',
    'lg:grid-cols-8',
    'lg:grid-cols-9',
    'lg:grid-cols-10',
    'lg:grid-cols-11',
    'lg:grid-cols-12',
    'lg:gap-4',
    'lg:gap-6',
    'lg:gap-8',
  ],
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.hover-link': {
          '@apply hover:underline transition-all duration-300 underline-offset-4 cursor-pointer':
            {},
        },
        '.shadow-around': {
          boxShadow: 'var(--shadow-around)',
        },
        '.shadow-around-hover': {
          boxShadow: 'var(--shadow-around-hover)',
        },
        '.section-border': {
          '@apply border-t border-gray-200 pt-10 md:pt-16 mt-10 md:mt-16': {},
        },
      });
    }),
  ],
} satisfies Config;
