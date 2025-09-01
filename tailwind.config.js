/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#0a0a0a',
        'secondary-bg': '#1a1a1a',
        'ink': '#f8f6f0',
        'subtle-ink': '#e8e6e0',
        'muted-ink': '#a8a6a0',
        'accent-1': '#c9a876',
        'accent-2': '#8b7355',
        'accent-warm': '#d4a574',
        'btn-bg': '#c9a876',
        'btn-text': '#0a0a0a',
        'btn-secondary': 'transparent',
        'link': '#f8f6f0',
        'link-hover': '#c9a876',
        'divider': '#2a2a2a',
        'overlay': 'rgba(10, 10, 10, 0.8)',
      },
      fontFamily: {
        'display': ['Playfair Display', 'Georgia', 'serif'],
        'accent': ['Cormorant Garamond', 'Georgia', 'serif'],
        'body': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '300' }],
        'h1': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '300' }],
        'h2': ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '400' }],
        'h3': ['clamp(1.5rem, 4vw, 2rem)', { lineHeight: '1.3', letterSpacing: '0', fontWeight: '400' }],
        'display-sm': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0.02em', fontWeight: '500' }],
      },
      spacing: {
        's-1': '4px',
        's-2': '8px',
        's-3': '12px',
        's-4': '16px',
        's-5': '20px',
        's-6': '24px',
        's-8': '32px',
        's-10': '40px',
        's-12': '48px',
        's-16': '64px',
        's-20': '80px',
        's-24': '96px',
        's-32': '128px',
        's-40': '160px',
        's-48': '192px',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 3s linear infinite',
        'rotate-slow': 'rotate-slow 30s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 1s ease-out',
        'slide-in-right': 'slideInRight 1s ease-out',
        'type-writer': 'typeWriter 4s steps(40) infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 20px rgba(201, 168, 118, 0.4)' },
          '100%': { boxShadow: '0 0 40px rgba(201, 168, 118, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        typeWriter: {
          '0%': { width: '0ch' },
          '50%': { width: '20ch' },
          '100%': { width: '0ch' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-10px) rotate(1deg)' },
          '66%': { transform: 'translateY(5px) rotate(-1deg)' },
        },
        'rotate-slow': {
          '0%': { transform: 'rotate(45deg)' },
          '100%': { transform: 'rotate(405deg)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'elegant': '0 10px 40px rgba(0, 0, 0, 0.3)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}