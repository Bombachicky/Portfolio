/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export const content = [];
export const theme = {
  extend: {
    fontFamily: {
      aquire: ['Aquire', 'sans-serif'],
      opensans: ['OpenSans', 'sans-serif'],
      cocomat: ['CocoMat', 'sans-serif'],
    },
    textShadow: {
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 0 150px var(--tw-shadow-color)',
    },
    boxShadow: {
      'glow': '0 0 100px 0 rgba(255,252,127,1)',
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

