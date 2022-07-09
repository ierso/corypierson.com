/** @type {import('tailwindcss').Config} */

const container = {
  center: true,
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container,
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        html: {
          fontFamily: '"IBM Plex Sans", sans-serif',
        },
      })
    },
  ],
}
