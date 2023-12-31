/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#03051b",
      },
      fontFamily: {
        poppins: ["Nosifer", "Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "652px",
      sm: "769px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}

