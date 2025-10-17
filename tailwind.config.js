/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          900: '#0a0118',
          800: '#130628',
          700: '#1f0b3a',
          600: '#2d1152',
        },
        mystic: {
          purple: '#8b5cf6',
          indigo: '#6366f1',
          violet: '#a78bfa',
          lavender: '#c4b5fd',
        },
        sacred: {
          gold: '#D4AF37',      // Updated to match design specs
          moon: '#F5F5F0',      // Updated to off-white
          glow: '#fef3c7',
          green: '#9CAF88',     // New sage green for grounding
        },
        // Design spec colors for reference
        indigo: {
          deep: '#2C1654',      // Deep Indigo from design specs
        }
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.6s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
}