/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      translate: {
        0.125: "0.5px",
      },
      letterSpacing: {
        extrawidest: "0.175em",
      },
    },
  },
  plugins: [],
};
