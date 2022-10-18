export default {
  button: `
    flex 
    items-center 
    justify-center 
    rounded-lg 
    outline-none
    text-sm
    transition-all 
    duration-500 
    ease-in-out
    select-none 
    relative
    border
    border-solid
    border-transparent
  `,
  buttonSmall: `
    h-9
    px-4 
    py-1 
  `,
  buttonMedium: `
    h-12
    px-9 
    py-2 
  `,
  buttonLarge: `
    h-14
    px-11 
    py-4 
  `,
  buttonText: `
    font-bold
    transition-all
    duration-200 
    ease-in-out
    opacity-100 
    visible
  `,
  buttonTextLoading: `
    opacity-0
    invisible
  `,
  buttonPrimary: `
    bg-primary
    hover:bg-primary/[.9]
    active:bg-primary/[.8]
    shadow-xl
  `,
  buttonPrimaryText: `
    text-gray-50
  `,
  buttonSecondary: `
    bg-gray-800 
    hover:bg-gray-950 
    active:bg-gray-950 
    dark:bg-gray-200 
    dark:hover:bg-white 
    dark:active:bg-white
    shadow-xl
  `,
  buttonSecondaryText: `
    text-gray-50 
    dark:text-gray-900
  `,
  buttonGhost: `
    hover:border-gray-950/[0.1]
    active:border-gray-950/[0.2]
    dark:hover:border-white/[0.1]
    dark:active:border-white/[0.2]
  `,
  buttonDanger: `
  bg-red-500 
  border-red-500
  hover:border-red-400
  hover:bg-red-400
  active:border-red-300
  active:bg-red-300
    shadow-xl
  `,
  buttonDangerText: `
    text-gray-50 
  `,
  buttonDisabled: `
    pointer-events-none
    opacity-30
  `,
  buttonLoading: `
    pointer-events-none
  `,
  buttonLocked: `
    pointer-events-none
  `,
};
