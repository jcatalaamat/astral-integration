/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark cosmic backgrounds - refined for depth
        cosmic: {
          900: '#0B0A1F',      // Deep midnight blue-black
          800: '#15132E',      // Subtle lift from base
          700: '#1F1D3D',      // Mid-dark for variety
          600: '#2A274C',      // Lighter cosmic overlay
        },
        // Mystical accent colors - refined for harmony
        mystic: {
          purple: '#8B7FD9',   // Softer lavender-purple
          indigo: '#6B68B3',   // Dusty indigo
          violet: '#AFA3E6',   // Light mystical violet
          lavender: '#C8BFF0', // Pale lavender for text
        },
        // Sacred earth tones - warm, grounded, elegant
        sacred: {
          gold: '#C9A55C',     // Warmer, softer gold
          moon: '#F7F5F0',     // Warm off-white
          glow: '#F4E9D4',     // Soft golden glow
          green: '#9CAF88',    // Sage green (nature, grounding)
          cream: '#FAF7F2',    // Warm cream for light sections
          sand: '#E8E3DA',     // Warm sand beige
        },
        // Primary indigo - the core brand color
        indigo: {
          deep: '#2C1654',     // Rich deep indigo (primary brand)
          DEFAULT: '#3D2565',  // Mid indigo
          light: '#4E3677',    // Lighter indigo
        }
      },
      fontSize: {
        // Add larger editorial sizes
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
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