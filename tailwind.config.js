/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}",
    "./src/**/*",
  ],
  theme: {
    colors: {
      'red': '#FF3366',
      'white': '#FCFCFF',
      'grey': '#D5D5D6',
      'darkblue': '#28283E',
    },
    extend: {
      fontFamily: {
        Euclid: "'Euclid Circular A'"
      }
    },
  },
  plugins: [],
}
