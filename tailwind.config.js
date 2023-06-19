/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors : {
        blacklight : "hsl(240, 12%, 13%)",
        detaillight: "hsl(250, 3%, 61%)",
        buttondiv : "hsl(240, 17%, 12%)",
        iconcolor: "hsl(325, 84%, 88%)"
      }
    },
  },
  plugins: [],
};
