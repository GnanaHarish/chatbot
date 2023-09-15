/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-violet-500': '#8B5CF6',
        'bg-violet-600': '#7C3AED'
      }
    },
  },
  plugins: [],
}