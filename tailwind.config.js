/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'lg': '992px',
        'xl': '1200px',
      },
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
      minHeight: {
        'screen-minus-80': 'calc(100dvh - 80px)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: '15px'
      },
      screens: {
        'sm': '100%',
        'md': '100%',
        'lg': '992px',
        'xl': '1200px'
      },
    },
  },
  plugins: [],
}

