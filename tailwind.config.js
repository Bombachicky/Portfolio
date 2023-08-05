/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export const content = [];
export const theme = {
  extend: {
    fontFamily: {
      aquire: ['Aquire', 'sans-serif'],
      opensans: ['OpenSans', 'sans-serif'],
      cocomat: ['CocoMat', 'sans-serif'],
      cocomatreg: ['CocoMatReg', 'sans-serif'],
    },
    textShadow: {
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 0 150px var(--tw-shadow-color)',
    },
    boxShadow: {
      'glow': '0 0 100px 0 rgba(255,252,127,1)',
    },
    animation: {
      fadeDown: "fadeDown 1s ease-in-out",
      fadeIn: "fadeIn 0.5s ease-in-out",
      fadeOut: "fadeOut 0.5s ease-in-out",
    },
    keyframes: {
      fadeDown: {
        "0%": { transform: "translateY(-1rem)", opacity: 0 },
        "100%": { transform: "translateY(0rem)", opacity: 1 },
      },
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
      fadeOut: {
        "0%": { opacity: 1 },
        "100%": { opacity: 0 },
      },
    },
  },
};
export const plugins = [
  plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),
];

