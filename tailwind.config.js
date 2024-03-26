/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors:{
        'darkMidnightBlue':'#02305F',
        'navyBlue':'#235384',
        'skyBlue':'#58AEDD',
        'babyBlue':'#B8E1F3',
        'baleBlue':'#DEF1FF',
        'lightsky':'#f3f9fd',
        'whiteSmoke':'#F9F9F9',







      }
    },
  },
  plugins: [require("flowbite/plugin")],
}

