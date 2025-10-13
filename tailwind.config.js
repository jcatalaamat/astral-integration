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
          gold: '#f6e05e',
          moon: '#f3f4f6',
          glow: '#fef3c7',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}