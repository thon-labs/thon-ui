export default {
  inputTextWrapper: `
    w-full
  `,
  inputText: `
    w-full 
    h-12 
    px-4 
    py-2
    bg-white/[0.5] 
    dark:bg-white/[0.15]
    border 
    border-solid 
    border-gray-950/[0.2] 
    dark:border-white/[0.2]
    rounded-lg 
    shadow-xl 
    dark:shadow-sm 
    outline-none
    text-sm 
    text-gray-900/[0.7] 
    dark:text-gray-50/[0.7] 
    placeholder:text-gray-900/[0.4] 
    dark:placeholder:text-gray-50/[0.4]
    transition-all 
    duration-200 
    ease-in-out
    hover:border-gray-950/[0.6]
    hover:text-gray-900/[0.9] 
    dark:hover:border-white/[0.6] 
    dark:hover:text-gray-50/[0.9]
    focus:border-gray-950/[0.8] 
    focus:text-gray-900 
    dark:focus:border-white/[0.8] 
    dark:focus:text-gray-50
  `,
  inputTextError: `
    bg-pink-50 
    border-pink-500
    hover:border-pink-500
    focus:border-pink-500
    dark:bg-pink-500/[0.12]
    dark:border-pink-500
    dark:hover:border-pink-500
    dark:focus:border-pink-500
  `,
  inputTextMessage: `
    mt-1
    ml-1
  `,
};
