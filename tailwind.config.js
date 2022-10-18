const { thonUI } = require('./src/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  jit: true,
  plugins: [thonUI()],
};
