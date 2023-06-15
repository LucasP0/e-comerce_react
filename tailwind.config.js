/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '730px',
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
        boxCin: '#D9D9D9',
        bluzinho: '#EEE8E8',
      },
      width: {
        inputmd: '25rem',
        inputl: '43.75rem',
        inputel: '57rem',
        box: '31.25rem',
        boxmd: '18.75rem',
        boximg: '9.375rem',
        boxel: '81.25rem',
        boxG: '57.5rem',
        boxGG: '62.5rem',
        boxGG2: '20%',
        boxGGG: '100rem',
      },
      height: {
        boxsx: '2.2rem',
        boximg: '9.375rem',
        boxl: '31.25rem',
        boxGG: '53.125rem',
      },
      margin: {
        mB: '50rem',
        mlg: '81.25rem',
        mxs: '4.688rem',
        mbMax: '130rem',
      },
      fontFamily: {
        inter: ['inter , sans-serif'],
      }
    },

  },
  plugins: [],
}

