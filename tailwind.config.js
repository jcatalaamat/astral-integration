/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ASTRAL INTEGRATION DESIGN SYSTEM
        // Warm Paper Background
        studio: {
          bg: '#FAF9F7',
          bgAlt: '#F5F4F2',
          divider: '#E6E4E1',
          // Dark section for contrast
          dark: '#1C1C1C',
          darkAlt: '#252525',
          darkDivider: '#3A3A3A',
        },
        // Text Colors
        content: {
          primary: '#1F1F1F',
          heading: '#1F1F1F',
          secondary: '#6B6B6B',
          tertiary: '#9A9A9A',
        },
        // Accent - Slate Blue (intelligence, not emotion)
        accent: {
          DEFAULT: '#3F4A5A',
          hover: '#2F3A4A',
          // Legacy for other pages
          gold: '#C9A167',
          terracotta: '#D4A89F',
          coral: '#E8B4A0',
          sage: '#A8B19C',
        },

        // Legacy colors for /private/oracle and other pages
        warm: {
          white: '#FAFAF8',
          cream: '#FAF0E6',
          peach: '#F4DEC9',
          sand: '#EDE8E2',
        },
        cosmic: {
          900: '#FAFAF8',
          800: '#FAF0E6',
          700: '#EDE8E2',
          600: '#E0DAD2',
        },
        mystic: {
          purple: '#C9A167',
          indigo: '#B8905C',
          violet: '#D4A89F',
          lavender: '#E8B4A0',
        },
        sacred: {
          gold: '#C9A167',
          moon: '#FAFAF8',
          glow: '#F4DEC9',
          green: '#A8B19C',
          cream: '#FAF0E6',
          sand: '#EDE8E2',
        },
        indigo: {
          deep: '#1A1A1A',
          DEFAULT: '#4A4A4A',
          light: '#8A8A8A',
        },
        // Legacy text colors
        text: {
          primary: '#1F1F1F',
          secondary: '#6B6B6B',
          heading: '#1F1F1F',
        }
      },
      fontSize: {
        // Strict typographic hierarchy
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '500', letterSpacing: '-0.02em' }],
        'display-sm': ['2.5rem', { lineHeight: '1.15', fontWeight: '500', letterSpacing: '-0.01em' }],
        'h1': ['2rem', { lineHeight: '1.2', fontWeight: '500' }],
        'h2': ['1.75rem', { lineHeight: '1.25', fontWeight: '500' }],
        'h3': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1.0625rem', { lineHeight: '1.6' }],
        'body-sm': ['0.9375rem', { lineHeight: '1.6' }],
        'meta': ['0.8125rem', { lineHeight: '1.5' }],
        // Legacy sizes
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        '10xl': ['10rem', { lineHeight: '1' }],
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'Cambria', 'serif'],
      },
      maxWidth: {
        'content': '1120px',
        'prose': '640px',
      },
      spacing: {
        // Consistent spacing scale
        'section': '7rem',
        'section-lg': '10rem',
        '18': '4.5rem',
        '22': '5.5rem',
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
