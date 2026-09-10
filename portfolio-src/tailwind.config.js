/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#3b82f6',
        'accent-light': '#60a5fa',
        'accent-dark': '#1d4ed8',
        navy: {
          600: '#0d1f3c',
          700: '#0a1628',
          800: '#060f1e',
          900: '#030712',
          950: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}
