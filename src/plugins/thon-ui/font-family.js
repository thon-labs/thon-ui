/**
 ***************************
 * 🎨 Thon Font Family 🎨
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

const fontFamily = {
  ...defaultTheme.fontFamily,
  sans: ['Inter', ...defaultTheme.fontFamily.sans],
};

module.exports = fontFamily;
