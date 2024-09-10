/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '390px',
        'md': '576px',
        'lg': '768px',
        'xl': '992px',
        '2xl': '1200px',
        '3xl': '1440px',
    
      },
      fontFamily:{
        inter: ['var(--inter)'],
        josefin: ['var(--josefin)'],
        poppins: ['var(--poppins)'],
      },
      colors:{
        'black-1': '#0F0F0F',
        'black-2': '#2A3342',
        'black-3': '#363636',
        'black-4': '#252B42',
        'black-5': '#2E2E2E',
        'gray-1': '#575757',
        'gray-2': '#667085',
        'gray-3': '#D5DAE1',
        'gray-4': '#E7E7E7',
        'gray-5': '#737373',
        'gray-6': '#EAEAEA',
        'gray-7': '#EEF0F3',
        'gray-8': '#B4B4B4',
        'green-1': '#62CC79',
      },
      fontSize:{
        '62px': ['62px','110%'],
        '18px': ['18px','110%'],
        '17px': ['17px','24px'],
        '56px': ['56px','100%'],
      }
    },
  },
  plugins: [],
};
