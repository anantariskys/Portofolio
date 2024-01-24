/** @type {import('tailwindcss').Config} */

import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Monomaniac-One': ['Monomaniac One','sans-serif'],
      'Leckerli-One': ['Leckerli One', 'cursive'],
    },
  },
  plugins: [daisyui],
}


