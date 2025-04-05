/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {

        customGreen: "#05FF59",
        customBlue: "#05C9FF",
        customWeakGreen: "#BBFFB2"

      },

      keyframes: {
        enter: {
          '0%': {
            opacity: '0',
            filter: 'blur(20px)',
            transform: 'translateX(-150%)',
          },
          '80%': {
            opacity: '1',
            filter: 'blur(5px)',
          },
          '100%': {
            filter: 'blur(0)',
            transform: 'translateX(0)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      },

      animation: {
        enter: 'enter 1s ease-in-out forwards', // Duração e curva de animação
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-glow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'gradient': 'gradient 3s ease infinite',
        'slide-in': 'slideIn 0.5s ease-out',
        'cursor-spin': 'spin 2s linear infinite',
      },

      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },

      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        '3d': 'preserve-3d',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      boxShadow: {
        'neon': '0 0 5px theme("colors.customGreen"), 0 0 20px theme("colors.customGreen")',
        '3d': '0 10px 30px -15px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(4px)',
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

