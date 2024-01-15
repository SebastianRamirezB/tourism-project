/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4169E1',
        secondary: '#404040',
        disabled: '#CDCCCC'
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(328px, 1fr))'
      }
    }

  },
  plugins: []
};
