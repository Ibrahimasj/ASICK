/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#070A12',
          900: '#0B0F19',
          850: '#0E1424',
          800: '#0F172A',
          700: '#1E293B',
        },
        asick: {
          blue: '#2563EB',
          'blue-light': '#3B82F6',
          'blue-dark': '#1D4ED8',
          cyan: '#00D2FF',
          'cyan-light': '#38BDF8',
          'cyan-dark': '#0284C7',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 210, 255, 0.45)',
        'glow-blue': '0 0 25px -5px rgba(37, 99, 235, 0.45)',
        'glow-badge': '0 0 35px rgba(0, 210, 255, 0.4)',
        'glow-sm': '0 0 15px rgba(56, 189, 248, 0.35)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.04)' },
        }
      }
    },
  },
  plugins: [],
}
