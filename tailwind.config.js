/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extend: {
      screens: {
        "md2": "767px"
      }
    },
    fontSize: {
      "xsm": "12px",
      "sm": "13px",
      "reg": "15px",
      "lg": "18px",
      "2xl": "22px",
      "3xl": "25px",
      "4xl": "32px",
      "5xl": "36px",
      "6xl": "40px",
      "6xl": "50px",
      "6xl": "70px",
      "7xl": "90px"
    }
  },
  plugins: [],
}
