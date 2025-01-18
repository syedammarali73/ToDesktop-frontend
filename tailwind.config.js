/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3238f2',
        'secondary': '#01ee91',
        'text-color-primary': '#2F3033',
        'color-secondary': '#1C1C1F',
        'custom-gray': '#FBFBFD'
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
    animation: {
      gradient: "gradient 5s ease infinite",
    },
    keyframes: {
      gradient: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
    },
    backgroundSize: {
      full: "200% 200%",
    },

  },
  plugins: [],
}

