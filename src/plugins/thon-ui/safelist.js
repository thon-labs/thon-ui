/**
 ***************************
 * 🎨 Thon Safelist 🎨
 * 🔗 Based on: https://www.figma.com/file/edj4xKq9yuo6XbxAc2SDOr/Thon-Product-UI?node-id=33%3A223
 *************************** *
 *
 * Object built for TailwindCSS (https://tailwindcss.com/) configuration file.
 *
 * ⚠️ NOTE ⚠️
 * Avoid use this object, insted use directly with Tailwind
 * For SCSS files use the `@apply` mixin (https://tailwindcss.com/docs/extracting-components#extracting-component-classes-with-apply)
 * and for components use classNames
 *
 */

const defaultTheme = require('tailwindcss/defaultTheme');

const breakpoints = ['', ...Object.keys(defaultTheme.screens)];
const safelistClasses = [
  'font-sans',
  'font-extrabold',
  'font-medium',
  'font-bold',
  'text-xs',
  'text-sm',
  'text-base',
  'text-lg',
  'text-xl',
  'text-2xl',
  'text-3xl',
  'text-4xl',
  'text-5xl',
  'text-6xl',
  'text-7xl',
  'text-8xl',
  'text-9xl',
  'uppercase',
];

const safelist = [];

breakpoints.forEach((breakpoint) => {
  safelistClasses.forEach((safelistClass) => {
    safelist.push(`${breakpoint && `${breakpoint}:`}${safelistClass}`);
  });
});

module.exports = safelist;
