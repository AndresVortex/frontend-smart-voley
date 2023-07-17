const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
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
        secondaryColor: '#ffdf00',
        backgroundSoft: '#f1f3fb',
        primaryColor: '#f49030', 
        secondaryColor: '#35364a'
      },
      boxShadow: {
        'custom-md': '0 10px 20px 0px rgba(153, 153, 153, 0.25)',
      },
      borderRadius:{
        primaryButtonRadius: '6px'
      }
      
    },
    screens: {
      'xs': '200px',
      ...defaultTheme.screens,
    },

    
  },
  plugins: [],
}

