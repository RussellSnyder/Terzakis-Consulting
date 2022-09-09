/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Titillium Web', 'sans-serif']
    },
    lineHeight: {
      default: '2.7em'
    }
  },
  plugins: [],
}
