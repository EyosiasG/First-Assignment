/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'orange': '#FFCE22',
      'light-orange': '#FFD84D',
      'blue': '#2469F6',
      'light-blue': '#5087F8',
      'white': '#FFFFFF',
      'grey': '#BDBDBD',
      'dark-grey': '#E3E3E3'

    },
    extend : {
      fontFamily: {
        'montserrat': ['Montserrat'],
      },
    }
  },
  plugins: [],
}

