/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF6B35',
          light: '#FF8659',
          dark: '#E55A2B'
        },
        dark: {
          DEFAULT: '#121212',
          card: '#1E1E1E',
          lighter: '#252525'
        },
        accent: {
          DEFAULT: '#FF6B35',
          muted: 'rgba(255, 107, 53, 0.1)'
        }
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(to bottom right, #121212, #1E1E1E)',
      }
    },
  },
  plugins: [],
};