/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 320px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        'primary': '#131A35',
        'secondary': '#0EE6B7',
        'body': '8892B0'
      }
    },
  },
  plugins: [],
};
