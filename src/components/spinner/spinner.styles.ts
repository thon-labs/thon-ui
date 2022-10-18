export default {
  spinnerRing: `
    inline-block 
    relative 
    transition-all 
    duration-200
    ease-in-out 
    opacity-100 
    visible
    before:content-[''] 
    before:block
    before:absolute
    before:border-solid
  before:border-white/[.20]
    before:rounded-[50%]
    dark:before:border-gray-900/[.20]
    after:content-['']
    after:block
    after:absolute
    after:border-solid
  after:border-t-gray-50 
    after:border-l-transparent 
    after:border-r-transparent 
    after:border-b-transparent 
    after:rounded-[50%] 
    after:animate-spinner-ring
    dark:after:border-t-gray-900
  `,
  spinnerRingHidden: `
    opacity-0
    invisible
  `,
  spinnerRingSmall: `
    w-6
    h-6
    before:w-6
    before:h-6
    before:border-3
    after:w-6
    after:h-6
    after:border-3
  `,
  spinnerRingMedium: `
    w-8
    h-8
    before:w-8
    before:h-8
    before:border-4
    after:w-8
    after:h-8
    after:border-4
  `,
  spinnerRingLarge: `
    w-12
    h-12
    before:w-12
    before:h-12
    before:border-6
    after:w-12
    after:h-12
    after:border-6
  `,
  spinnerRingOppositeColor: `
    before:border-gray-900/[.20]
    dark:before:border-white/[.20]
    after:border-t-gray-900
    dark:after:border-t-gray-50 
  `,
};
