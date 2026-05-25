import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-archivo)', 'sans-serif'],
        body: ['var(--font-space-grotesk)', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float':           'float 6s ease-in-out infinite',
        'float-delayed':   'float 7s ease-in-out 1.5s infinite',
        'float-slow':      'float 9s ease-in-out 3s infinite',
        'pulse-slow':      'pulse 3s ease-in-out infinite',
        'gradient-x':      'gradient-x 5s ease infinite',
        'gradient-x-fast': 'gradient-x 3s ease infinite',
        'border-spin':     'border-spin 4s linear infinite',
        'shimmer':         'shimmer 2.5s linear infinite',
        'fade-up':         'fade-up 0.5s ease-out',
        'draw-line':       'draw-line 1.5s ease-out forwards',
        'ping-slow':       'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-16px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        'border-spin': {
          '0%':   { '--angle': '0deg' },
          '100%': { '--angle': '360deg' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-line': {
          '0%':   { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
