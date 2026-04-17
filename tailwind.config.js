/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        vanta: '#030303',
        emerald: {
          400: '#34d399',
          500: '#10b981',
        },
        indigo: {
          400: '#818cf8',
          500: '#6366f1',
        },
      },
    },
  },
  plugins: [],
}
