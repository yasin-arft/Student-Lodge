/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': {
        'light': '#0c2649',
        'dark': '#091c34' ,
      } ,
      'dark': '#041120',
      'white': '#ffffff'
    },
    fontFamily: {
      poppins : ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"]
  },
}

