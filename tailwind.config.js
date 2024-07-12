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
        inter:[ 'Inter', 'sans-serif'],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        medium: 500,
        bold: 700,
        black: 900,
      },
      screens: {
        'sm': '500px',
        // Add custom breakpoints if needed
      },
      colors: {
        black: '#0D1116',
        1:'#D6D7DB',
        2:'#FFFFFF',
        3:'#CBCBCB',
        4:'#8E8F93',
        5:'#A9A9A9',
        6:'#D0D9DD',
        7:"#E9EFEF",
        8:'#0D1116',
        9:'#000000',
        br:"#E4E7EC",
        gradientstart: '#A3C4F1',
        gradientend: '#E680E8',
        active:"#E480EB",
        bg:'radial-gradient(circle, #E680E8 0%, #A3C4F1 15%, #A3C4F1 39%, #E480EB 80%)',
         },

    },
  },
  plugins: [ flowbite.plugin(),],
}

