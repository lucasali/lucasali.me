/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#3b7080',
        secondary: '#dddbcb',
        accent: '#a31621',
        text: '#32322c',
        background: '#f5f1e3',
      },
    },
  },
  plugins: [],
}
