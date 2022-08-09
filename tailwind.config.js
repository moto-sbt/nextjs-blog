/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'link-blue': '#0070f3',
      'twitter': '#1DA1F2',
      'gray': {
        light: "#f5f5f5",
        DEFAULT:'#666',
        dark: '#a9a9a9'
      },
      'inherit': 'inherit',
    },
  },
  plugins: [],
}
