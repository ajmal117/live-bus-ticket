"use strict";

/** @type {import('tailwindcss').Config} */
var colors = require("tailwindcss/colors");

module.exports = {
  prefix: "dg-",
  content: [// "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}" // Or if using `src` directory:
  // './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      slate: colors.slate,
      zinc: colors.zinc,
      natural: colors.natural,
      stone: colors.stone,
      blue: colors.blue,
      sky: colors.sky,
      cyan: colors.cyan,
      green: colors.green,
      red: colors.red,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      orange: colors.orange
    },
    fontFamily: {
      sans: [""]
    },
    extend: {
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  container: {
    padding: {
      DEFAULT: "1rem",
      sm: "2rem",
      lg: "4rem",
      xl: "5rem",
      "2xl": "6rem"
    }
  },
  extend: {
    screens: {
      "2xl": {
        max: "1535px"
      },
      // => @media (max-width: 1535px) { ... }
      xl2: {
        max: "1279px"
      },
      // => @media (max-width: 1279px) { ... }
      lg2: {
        max: "1023px"
      },
      // => @media (max-width: 1023px) { ... }
      md2: {
        max: "767px"
      },
      // => @media (max-width: 767px) { ... }
      sm2: {
        max: "639px"
      } // => @media (max-width: 639px) { ... }

    }
  },
  plugins: [require("@tailwindcss/line-clamp"), require('@tailwindcss/forms') // ...
  ]
};
//# sourceMappingURL=tailwind.config.dev.js.map
