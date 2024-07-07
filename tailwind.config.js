/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '125': '1.25',  // Adding custom scale value
      }
    },
  },
  variants: {
    extend: {
      scale: ['group-hover'],  // Ensure group-hover variant is enabled for scale
    }
  },

  plugins: [],
}