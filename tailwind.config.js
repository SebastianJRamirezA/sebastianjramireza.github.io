/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#820000',
          dark: '#5b0000'
        },
        dark: {
          bg: '#1a202c',
          text: '#e2e8f0',
          card: '#2d3748'
        },
        light: {
          bg: '#ffffff',
          text: '#1a202c',
          card: '#f7fafc'
        }
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
      minHeight: {
        '60vh': '60vh',
      }
    }
  },
  plugins: [],
};