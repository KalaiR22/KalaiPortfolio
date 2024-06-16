const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        mysoul: ['My Soul', 'cursive'],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
      colors: {
        black: '#000000',
        1:'#D6D7DB',
        2:'#FFFFFF',
        3:'#CBCBCB',
        4:'#8E8F93',
        5:'#A9A9A9',
        6:'#D0D9DD',
        7:"#E9EFEF",
        gradientstart: '#A3C4F1',
        gradientend: '#E680E8',
        active:"#E480EB",
      
      },

    },
  },
  plugins: [ flowbite.plugin(),],
}

