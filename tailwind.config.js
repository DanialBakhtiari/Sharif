/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./source/css/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "0",
      },
      center: true,
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1360px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      fontFamily: {
        iranSans: "iranSans",
      },
      // Font Size
      fontSize: {
        xxs: "0.625rem",
      },
      // Spacing
      spacing: {
        // Custom spacing values
        4.5: "1.125rem",
        8.5: "2.125rem",
        15: "3.75rem",
        25: "6.25rem",
        29: "7.25rem",
        31: "7.81rem",
        33: "8.25rem",
        39: "9.75rem",
        50: "12.5rem",
        54: "13.5rem",
        69: "17.25rem",
        72: "19.75rem",
        83: "20.75rem",
        91: "22.75rem",
      },
      colors: {
        // Primary colors
        primary: {
          white: "#FAF9F6",
          black: "#0B1215",
          blue: "#002051",
          background: "#F5F5F5",

        },
        // Secondary colors
        secondary: {
          white: "#F8F8FF",
          black: "#031602",
          blue:"#012E71",
        },
        accent: {
          navBarLineHover: "#FFC000",
          textHover: "#F93D52",

        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
