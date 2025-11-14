/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#f9d2d2',
          300: '#f5b1b1',
          400: '#ee8585',
          500: '#e35c5c',
          600: '#80060a',
          700: '#80060a',
          800: '#80060a',
          900: '#80060a',
        },
        secondary: {
          50: '#f0f4ff',
          100: '#e0ebff',
          200: '#c7d8ff',
          300: '#a3b9ff',
          400: '#7a96ff',
          500: '#4f6fff',
          600: '#00245a',
          700: '#00245a',
          800: '#00245a',
          900: '#00245a',
        },
        // Keep medical and surgical colors for backwards compatibility
        medical: {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#f9d2d2',
          300: '#f5b1b1',
          400: '#ee8585',
          500: '#e35c5c',
          600: '#80060a',
          700: '#80060a',
          800: '#80060a',
          900: '#80060a',
        },
        surgical: {
          50: '#f0f4ff',
          100: '#e0ebff',
          200: '#c7d8ff',
          300: '#a3b9ff',
          400: '#7a96ff',
          500: '#4f6fff',
          600: '#00245a',
          700: '#00245a',
          800: '#00245a',
          900: '#00245a',
        },
        platinum: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        'shine': 'shine 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        }
      },
      boxShadow: {
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'primary': '0 20px 40px -12px rgba(128, 6, 10, 0.15)',
        'secondary': '0 20px 40px -12px rgba(0, 36, 90, 0.15)',
        'medical': '0 20px 40px -12px rgba(128, 6, 10, 0.15)',
        'surgical': '0 20px 40px -12px rgba(0, 36, 90, 0.15)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}