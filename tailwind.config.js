/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'clicker' : ['"Clicker Script"', 'sans-serif'],
        'work' : ['"Work Sans"', 'san-serif'],
        'clash' : ['"Clash Display"', 'san-serif'],
      },
      colors: {
        'back': '#F6F4ED',
        'primary': '#FDC400',
        'secondary': '#7B29DD'
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '10px',
        lg: '0px'
      },
      screens: {
          lg: '992px',
          xl: '1180px'
      },
    },
  },
  plugins: [],
}

