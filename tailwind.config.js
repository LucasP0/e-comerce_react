/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        pd: '#25262C',
        input: '#E9E9E9',
        search: '#737373',
        borderC: '#686868',
        button: '#0CD3D2',
        ff: '#FFFFFF',
      },
      width: {
        inputmd: '25rem',
        inputl: '43.75rem',
        box: '31.25rem',
        boxmd: '18.75rem',
      },
      height: {
        boxsx: '1.875rem',
        boxl: '31.25rem',
      },
      margin: {
        mB: '50rem',
      },
      fontFamily: {
        inter: ['inter , sans-serif'], 
      }
    },
   
  },
  plugins: [],
}

