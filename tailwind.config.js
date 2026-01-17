/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#381ce3',
          2: '#2a15ba',
          3: '#1c0e91',
          4: '#0e0768',
          5: '#00003f',
        },
      },
      fontFamily: {
        sans: ['var(--font-bree-serif)', 'serif'],
        bree: ['var(--font-bree-serif)', 'serif'],
      },
    },
  },
  plugins: [],
}