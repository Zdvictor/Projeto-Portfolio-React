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
      },

      animation: {
        enter: 'enter 1s ease-in-out forwards', // Duração e curva de animação
      },

    },
  },
  plugins: [],
}

