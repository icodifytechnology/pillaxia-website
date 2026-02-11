
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./App.tsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#252872',
          light: '#3538a0',
          dark: '#1a1d54',
          50: '#eef0ff',
          100: '#dde1ff'
        },
        secondary: {
          DEFAULT: '#d91f22',
          light: '#ef4444',
          dark: '#b91c1c',
          50: '#fef2f2',
          100: '#fee2e2'
        }
      }
    },
  },
  plugins: [],
}
