const thonUI = require('./src/thon-ui');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './src/**/*.scss'],
  jit: true,
  plugins: [thonUI()],
};
