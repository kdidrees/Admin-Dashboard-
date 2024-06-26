/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px'
        
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        roboto: ["Roboto", 'sans-serif'],
        inter: ["Inter", 'sans-serif']
      },
    },
  },
  plugins: [],
};
