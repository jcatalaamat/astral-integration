/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm light backgrounds - Flodesk-inspired
        warm: {
          white: '#FAFAF8',    // Main background
          cream: '#FAF0E6',    // Alternating sections
          peach: '#F4DEC9',    // Hero gradients
          sand: '#EDE8E2',     // Cards/containers
        },
        // Accent colors - warm and inviting
        accent: {
          gold: '#C9A167',     // Primary CTA, highlights
          terracotta: '#D4A89F', // Secondary accent
          coral: '#E8B4A0',    // Hover states
          sage: '#A8B19C',     // Nature touches
        },
        // Text colors - warm neutrals
        text: {
          primary: '#1A1A1A',  // Primary text
          heading: '#0A0A0A',  // Headings
          secondary: '#4A4A4A', // Secondary text
          tertiary: '#8A8A8A', // Tertiary/placeholder
        },

        // Legacy color names (backwards compatibility - will gradually migrate)
        cosmic: {
          900: '#FAFAF8',  // → warm-white
          800: '#FAF0E6',  // → warm-cream
          700: '#EDE8E2',  // → warm-sand
          600: '#E0DAD2',  // Lighter sand
        },
        mystic: {
          purple: '#C9A167',   // → accent-gold
          indigo: '#B8905C',   // Darker gold
          violet: '#D4A89F',   // → accent-terracotta
          lavender: '#E8B4A0', // → accent-coral
        },
        sacred: {
          gold: '#C9A167',     // Keep as primary accent
          moon: '#FAFAF8',     // → warm-white
          glow: '#F4DEC9',     // → warm-peach
          green: '#A8B19C',    // → accent-sage
          cream: '#FAF0E6',    // → warm-cream
          sand: '#EDE8E2',     // → warm-sand
        },
        indigo: {
          deep: '#1A1A1A',     // → text-primary
          DEFAULT: '#4A4A4A',  // → text-secondary
          light: '#8A8A8A',    // → text-tertiary
        }
      },
      fontSize: {
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
        'breathe': 'breathe 6s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'glow': 'glow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.8s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
        '3xl': '24px',
      },
      boxShadow: {
        'warm': '0 4px 20px rgba(201, 161, 103, 0.1)',
        'warm-lg': '0 10px 40px rgba(201, 161, 103, 0.15)',
      },
    },
  },
  plugins: [],
}
