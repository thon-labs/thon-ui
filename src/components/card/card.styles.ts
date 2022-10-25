export default {
  card: `
    rounded
  `,
  cardClickable: `
    cursor-pointer
  `,
  cardClickableWithBackground: `
    transition-shadow
    duration-500
    ease-in-out
    hover:shadow-2xl
    active:shadow-lg
    dark:hover:shadow-lg
    dark:active:shadow-xl
    select-none
  `,
  cardBordered: `
    border
    border-solid
    border-gray-200
    dark:border-gray-700
  `,
  cardBackground: `
    bg-white
    dark:bg-gray-800
    shadow-xl
    dark:shadow-sm
  `,
  cardDisabled: `
    pointer-events-none
  `,
};
