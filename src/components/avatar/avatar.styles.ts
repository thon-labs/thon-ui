export default {
  avatar: `
    rounded-full
  `,
  avatarImage: `
    bg-cover
    bg-no-repeat
    bg-center
  `,
  avatarWithHover: `
    transition
    duration-200
    ease-in-out
    hover:opacity-80
    cursor-pointer
  `,
  avatarGrayscale: `
    grayscale
  `,
  avatarInitialsWrapper: `
  bg-gray-200 
  dark:bg-gray-700
    flex
    items-center
    justify-center
    transition
    duration-200
    ease-in-out
  `,
  avatarInitialsText: `
  text-gray-900
  dark:text-gray-50
    uppercase
    select-none
    font-bold
  `,
  avatarInitialsWrapperWithHover: `
    hover:bg-gray-300 
    dark:hover:bg-gray-600
    cursor-pointer
  `,
  avatarInitialsWrapperWithoutHover: `
    pointer-events-none
  `,
};
