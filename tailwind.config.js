/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'royal-blue': '#4169E1',
      'royal-blue-dark': '#2e4f8b',
      'dark': '#041120',
      'white': '#ffffff',
      'gray': '#d3d3d3',
      'error': '#ed4337'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"]
  },
}

