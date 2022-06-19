/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "film-dark": "#0D0D0D",
        "film-primary": "#463F38",
        "film-secondary": "#7A7D81",
        "film-accent": "#BBC1BF",
        "film-light": "#EFEFEF",
      },
    },
  },
  plugins: [],
};
