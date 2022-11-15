/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'blue': '#0070f3',
      'link-blue': '#0070f3',
      'twitter': '#1DA1F2',
      'youtube': '#E62117',
      'tiktok': '#6a76ac',
      'instagram': '#c13584',
      'gray': {
        light: "#f5f5f5",
        DEFAULT: '#666',
        dark: '#a9a9a9'
      },
      'inherit': 'inherit',
    },
  },
  plugins: [],
}
