const plugin = require('tailwindcss/plugin');

// Theme Area
const colors = require('./colors');
const fontFamily = require('./font-family');
const fontSize = require('./font-size');
const safelist = require('./safelist');

module.exports = plugin(
  function ({ addBase, addUtilities, theme }) {
    addBase({
      body: { fontWeight: theme('fontWeight.medium') },
    });
    addUtilities({
      ...fontSize,
    });
  },
  {
    darkMode: 'class',
    theme: {
      extend: {
        colors,
        fontFamily,
        keyframes: {
          'spinner-ring': {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(360deg)' },
          },
          enter: {
            '0%': { transform: 'scale(0.9)', opacity: 0 },
            '100%': { transform: 'scale(1)', opacity: 1 },
          },
          leave: {
            '0%': { transform: 'scale(1)', opacity: 1 },
            '100%': { transform: 'scale(0.9)', opacity: 0 },
          },
        },
        animation: {
          'spinner-ring': 'spinner-ring 1.2s linear infinite',
          enter: 'enter 200ms ease-out',
          leave: 'leave 150ms ease-in forwards',
        },
        borderWidth: {
          3: '3px',
          6: '6px',
        },
        spacing: {
          1.5: '0.375rem',
        },
        fontSize: {
          xxs: '0.625rem',
        },
        screens: {
          'xs-max': { max: '639px' },
          'sm-max': { max: '1023px' },
          phone: { max: '639px' },
          tablet: { min: '640px', max: '1023px' },
          desktop: { min: '1024px' },
        },
        backgroundImage: {
          'arrow-down':
            'linear-gradient(45deg,transparent 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,transparent 50%)',
        },
        backgroundPosition: {
          'arrow-down':
            'calc(100% - 20px) calc(1px + 50%),calc(100% - 16px) calc(1px + 50%)',
        },
        backgroundSize: {
          'arrow-down': '4px 4px,4px 4px',
        },
      },
    },
    safelist,
  }
);
