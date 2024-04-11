// tailwind.config.js

module.exports = {
  content: [
    "./**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        transparent: "transparent",
        current: "currentColor",
        dashlinkbg: "#FFFFFF66",
        green: "#335f32",
        white: "#ffffff",
        lightash: "#838282",
        midnightash: "#323131",
        purple: "#680DB3",
        purple2: "#7402BA",
        contactustext: "#000000",
        borderLight: "#A1A1A1",
        dark: "#000000",
        blue: "#3D3DE6",
        extend: {},
      },
      screens: {
        xs: "400px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }
        md: "768px",
        // => @media (min-width: 768px) { ... }
        lg: "1024px",
        // => @media (min-width: 1024px) { ... }
        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
        "2xl": "1536px",
        // // => @media (min-width: 1536px) { ... }
        mod: { max: "639px" },
        minlg: { max: "1023px" },
        minilg: { min: "850px" },
        mid: { max: "767px" },
        contQ1: { max: "980px" },
        // => @media (min-width: 0px and max-width: 639px) { ... }
      },

      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
