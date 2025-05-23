import type { Config } from 'tailwindcss';

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
  plugins: [],
} satisfies Config;
