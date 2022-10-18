export default {
  button: `
    flex 
    items-center 
    justify-center 
    h-12 
    rounded-lg 
    shadow-xl 
    outline-none
    px-9 
    py-2 
    text-sm
    transition-all 
    duration-500 
    ease-in-out
    select-none 
    relative
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
    bg-gray-800 
    hover:bg-gray-950 
    active:bg-gray-950 
    dark:bg-gray-200 
    dark:hover:bg-white 
    dark:active:bg-white
  `,
  buttonPrimaryText: `
    text-gray-50 
    dark:text-gray-900
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
