/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        loading: {
          '0%': { opacity: '0.6' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        loading: 'loading 0.8s infinite alternate',
      },
    },
  },
  plugins: [],
};
