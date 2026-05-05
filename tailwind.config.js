/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // JUGAT-GURU THEME — warm cream + saffron + indigo
        bg: {
          DEFAULT: '#F7EDD5',
          2: '#F0E1BD',
          3: '#EBD7A3',
        },
        cream: {
          DEFAULT: '#FCF6E4',
        },
        saffron: {
          DEFAULT: '#E88838',
          br: '#F4A95A',
          dp: '#B2611A',
        },
        indigo: {
          DEFAULT: '#1E1548',
          2: '#2F2368',
          3: '#463885',
        },
        ink: {
          DEFAULT: '#1C1610',
          2: '#3A3022',
          3: '#5E4F3A',
        },
        mute: {
          DEFAULT: '#806F56',
          strong: '#5B4E3A',
        },
        terra: {
          DEFAULT: '#9B3820',
        },
        // accent alias = saffron-dp
        accent: {
          DEFAULT: '#B2611A',
          hover: '#E88838',
          glow: 'rgba(232, 136, 56, 0.15)',
          glowStrong: 'rgba(232, 136, 56, 0.3)',
          subtle: 'rgba(232, 136, 56, 0.08)',
          border: 'rgba(232, 136, 56, 0.25)',
        },
        // legacy aliases — neutralized for jugat theme
        dark: {
          bg: '#F7EDD5',
          card: '#FCF6E4',
          cardHover: '#F0E1BD',
        },
        gold: {
          DEFAULT: '#E88838',
          soft: 'rgba(232, 136, 56, 0.15)',
        },
        success: { DEFAULT: '#6A7149', bg: 'rgba(106, 113, 73, 0.08)' },
        error: { DEFAULT: '#9B3820', bg: 'rgba(155, 56, 32, 0.08)' },
        warning: { DEFAULT: '#E88838', bg: 'rgba(232, 136, 56, 0.08)' },
        content: {
          primary: '#1C1610',
          secondary: '#3A3022',
          muted: '#806F56',
        },
        border: {
          DEFAULT: 'rgba(28, 22, 16, 0.16)',
          hover: 'rgba(28, 22, 16, 0.26)',
        },
        rule: {
          DEFAULT: 'rgba(28, 22, 16, 0.16)',
          str: 'rgba(28, 22, 16, 0.26)',
          cream: 'rgba(247, 237, 213, 0.22)',
        },
        tool: {
          primary: 'var(--tool-primary, #B2611A)',
          primaryGlow: 'var(--tool-primary-glow, rgba(232, 136, 56, 0.15))',
          accent: 'var(--tool-accent, #1E1548)',
        },
      },
      fontSize: {
        'display': ['clamp(58px, 9.5vw, 160px)', { lineHeight: '0.92', fontWeight: '400', letterSpacing: '-0.018em' }],
        'display-sm': ['clamp(40px, 6vw, 92px)', { lineHeight: '1', fontWeight: '400', letterSpacing: '-0.012em' }],
        'h1': ['clamp(2rem, 3.5vw, 2.75rem)', { lineHeight: '1.1', fontWeight: '400' }],
        'h2': ['clamp(26px, 3.4vw, 42px)', { lineHeight: '1.1', fontWeight: '400', letterSpacing: '-0.008em' }],
        'h3': ['1.5rem', { lineHeight: '1.3', fontWeight: '400' }],
        'h4': ['1.25rem', { lineHeight: '1.3', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.65', fontWeight: '400' }],
        'meta': ['0.6875rem', { lineHeight: '1.5', letterSpacing: '0.22em', fontWeight: '400' }],
        'nav': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
        mono: ['DM Mono', 'JetBrains Mono', 'SF Mono', 'monospace'],
      },
      maxWidth: {
        'content': '1440px',
        'prose': '720px',
      },
      spacing: {
        'section': '7rem',
        'section-lg': '10rem',
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'fadeUp': 'fadeUp 1s ease forwards',
        'scrollPulse': 'scrollPulse 2s ease-in-out infinite',
        'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -30px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'scaleY(1)' },
          '50%': { opacity: '1', transform: 'scaleY(1.3)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '14px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(232, 136, 56, 0.15)',
        'glow-lg': '0 0 60px rgba(232, 136, 56, 0.3)',
        'card': '0 4px 20px rgba(28, 22, 16, 0.08)',
      },
    },
  },
  plugins: [],
}
