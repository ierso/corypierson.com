/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    function ({ addBase }) {
      addBase({
        html: {
          fontFamily: { sans: ['var(--font-ibm)'] },
        },
      })
    },
  ],
}
