/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-hero': "url('/images/background-hero.png')" 
      },
      colors: {
      primary: '#4169E1',
      secondary: '#404040',
      disabled: '#CDCCCC'
    },
    gridTemplateColumns: {
      'auto': 'repeat(auto-fit, minmax(386px, 386px))'
    }
    },
    
  },
  plugins: [],
}
