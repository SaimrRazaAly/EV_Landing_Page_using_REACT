/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend :{

      screens: {
        'res-600': '600px',
        'res-69': '690px',
        'res-70': '750px',
        'res-30': '300px',
        'res-1000': '1000px',
        'res-1280': '1280px',
        // => @media (min-width: 640px) { ... }
        
        
      },
    },
    },
  plugins: [],
}