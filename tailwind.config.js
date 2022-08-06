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
      'gray': '#666',
      'inherit': 'inherit',
    },
  },
  plugins: [],
}
