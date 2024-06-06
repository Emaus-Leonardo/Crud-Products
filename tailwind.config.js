/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'celular': '425px',
      },
      boxShadow: {
        'custom': ' 0px 0px 33px 9px rgba(0,0,0,0.12)', 
      },
    },
  },
  plugins: [],
}
