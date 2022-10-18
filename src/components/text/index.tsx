import React from 'react';
import classNames from 'classnames';

type TextVariants =
  | 'label'
  | 'label-thin'
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'base'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | '8xl'
  | '9xl';

type FontSizes =
  | 'text-xxs'
  | 'text-xs'
  | 'text-sm'
  | 'text-base'
  | 'text-lg'
  | 'text-xl'
  | 'text-2xl'
  | 'text-3xl'
  | 'text-4xl'
  | 'text-5xl'
  | 'text-6xl'
  | 'text-7xl'
  | 'text-8xl'
  | 'text-9xl';

type FontWeights = 'font-medium' | 'font-bold' | 'font-extrabold';

type FontFamilies = 'font-sans';

type TextTransforms = 'uppercase' | 'lowercase';

type TextMapper = {
  [key in TextVariants]: {
    fontFamily: FontFamilies;
    fontSize: FontSizes;
    fontWeight: FontWeights;
    textTransform?: TextTransforms;
  };
};

const textMapper: TextMapper = {
  label: {
    fontFamily: 'font-sans',
    fontSize: 'text-xs',
    fontWeight: 'font-extrabold',
    textTransform: 'uppercase',
  },
  'label-thin': {
    fontFamily: 'font-sans',
    fontSize: 'text-xs',
    fontWeight: 'font-medium',
    textTransform: 'uppercase',
  },
  xxs: {
    fontFamily: 'font-sans',
    fontSize: 'text-xxs',
    fontWeight: 'font-medium',
  },
  xs: {
    fontFamily: 'font-sans',
    fontSize: 'text-xs',
    fontWeight: 'font-medium',
  },
  sm: {
    fontFamily: 'font-sans',
    fontSize: 'text-sm',
    fontWeight: 'font-medium',
  },
  base: {
    fontFamily: 'font-sans',
    fontSize: 'text-base',
    fontWeight: 'font-medium',
  },
  lg: {
    fontFamily: 'font-sans',
    fontSize: 'text-lg',
    fontWeight: 'font-bold',
  },
  xl: {
    fontFamily: 'font-sans',
    fontSize: 'text-xl',
    fontWeight: 'font-bold',
  },
  '2xl': {
    fontFamily: 'font-sans',
    fontSize: 'text-2xl',
    fontWeight: 'font-bold',
  },
  '3xl': {
    fontFamily: 'font-sans',
    fontSize: 'text-3xl',
    fontWeight: 'font-bold',
  },
  '4xl': {
    fontFamily: 'font-sans',
    fontSize: 'text-4xl',
    fontWeight: 'font-bold',
  },
  '5xl': {
    fontFamily: 'font-sans',
    fontSize: 'text-5xl',
    fontWeight: 'font-bold',
  },
  '6xl': {
    fontFamily: 'font-sans',
    fontSize: 'text-6xl',
    fontWeight: 'font-bold',
  },
  '7xl': {
    fontFamily: 'font-sans',
    fontSize: 'text-7xl',
    fontWeight: 'font-bold',
  },
  '8xl': {
    fontFamily: 'font-sans',
    fontSize: 'text-8xl',
    fontWeight: 'font-bold',
  },
  '9xl': {
    fontFamily: 'font-sans',
    fontSize: 'text-9xl',
    fontWeight: 'font-bold',
  },
};

type Props = {
  variant?: string;
  as?: React.ElementType;
  color?: string;
  fallback?: boolean | string;
  copyToastProps?: { background?: string };
};

export const Text = React.forwardRef<
  HTMLElement,
  Props & React.HTMLAttributes<HTMLElement>
>(
  (
    { variant = 'base', as = 'span', fallback = '-', children, ...props },
    ref,
  ) => {
    const variants = variant.split(' ');
    const textClasses = [];

    for (const index in variants) {
      let [breakpoint, value] = variants[index].split(':');

      if (!value) {
        value = breakpoint;
        breakpoint = '';
      }

      const textMap = textMapper[value as TextVariants];

      if (!textMap) {
        throw new Error(
          `Text Component Combination Error: There is no configuration for variant "${variant}".`,
        );
      }

      textClasses.push(
        Object.keys(textMap)
          .map(
            (key) =>
              `${breakpoint && `${breakpoint}:`}${
                textMap[key as keyof typeof textMap]
              }`,
          )
          .join(' '),
      );
    }

    const regexForColor = React.useMemo(
      () => new RegExp(/text-[a-z]+-\d+/),
      [props.className],
    );

    const className = classNames(
      {
        'text-gray-900 dark:text-gray-50': !regexForColor.test(
          props.className || '',
        ),
      },
      textClasses,
      props.className,
    );

    return React.createElement(
      as,
      { ref, ...props, className },
      fallback ? (children != null ? children : fallback) : children,
    );
  },
);

Text.displayName = 'Text';
