/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],
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
      fontSize: {
        '23':'1.438rem',
        '26':'1.625rem',
        'responsive-1': 'clamp(3.125rem, 2.2321rem + 4.4643vw, 4.375rem)',
        'responsive-2': 'clamp(2.25rem, 1.8036rem + 2.2321vw, 2.875rem)',
        'responsive-3': 'clamp(3.25rem, 2.8036rem + 2.2321vw, 3.875rem)',
      },
      colors: {
        'dark':'#1E1E1E',
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
        DEFAULT: '10px',
        md: '15px',
        lg: '20px'
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

