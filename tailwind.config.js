/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image_primary': "url(/src/assets/voley.png)"
      },
      colors: {
        secondaryColor: '#ffdf00'
      }
      
    },
    screens: {
      'xs': '200px',
      ...defaultTheme.screens,
    },
    
  },
  plugins: [],
}

