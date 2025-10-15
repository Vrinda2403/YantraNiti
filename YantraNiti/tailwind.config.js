/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#0f0c29',
        'primary-mid': '#302b63',
        'primary-light': '#24243e',
        'accent-gold': '#ffd700',
        'accent-teal': '#00f2fe',
        'text-light': '#f0f0f0',
        'text-dark': '#333',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'teal-glow': '0 0 10px rgba(0, 242, 254, 0.6)',
        'teal-glow-hover': '0 0 18px rgba(0, 242, 254, 0.8)',
      },
      animation: {
        'spin-slow': 'spin 1s linear infinite',
      },
    },
  },
  plugins: [],
}