/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,pug,js}"],
  theme: {
    extend: {
      fontFamily: ["Montserrat", "sans-serif"],
      colors: {
        main: "#5900e6",
        grey: {
          1: "#333333",
          2: "#4F4F4F",
          3: "#828282",
          4: "#BDBDBD",
          5: "#E0E0E0",
          6: "#ECEDEE",
          7: "#F2F2F2",
        },
        text: {
          primary: "#242424",
          secondary: "#828282",
          placeholder: "#BDBDBD",
        },
      },
      screens: {
        xs: "375px",
        // => @media (min-width: 475px) { ... }

        sm: "576px",
        // => @media (min-width: 576px) { ... }

        ms: "650px",
        // => @media (min-width: 650px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 992px) { ... }

        "2xl": "1200px",
        // => @media (min-width: 1200px) { ... }

        "4xl": "1300px",
        // => @media (min-width: 1200px) { ... }

        "6xl": "1440px",
        // => @media (min-width: 1440px) { ... }

        "8xl": "1540px",
        // => @media (min-width: 1540px) { ... }
      },
    },
  },
  plugins: [],
};
