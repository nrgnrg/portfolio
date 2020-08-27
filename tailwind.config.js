module.exports = {
  future: {
    removeDeprecatedGapUtilities: true
  },
  purge: ["./src/**/*.vue", "./src/**/*.ts"],
  theme: {
    extend: {},
    screens: {
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1280px" // => @media (min-width: 1280px) { ... }
    },
    colors: {}
  },
  variants: {},
  plugins: []
};
