import React from 'react';
import classNames from 'classnames';
import styles from './spinner.styles';

type Variants = 'ring';

type Sizes = 'small' | 'medium' | 'large';

type Props = {
  variant?: Variants;
  size?: Sizes;
  hidden?: boolean;
  oppositeColor?: boolean;
  keepLightMode?: boolean;
};

export const Spinner = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>(
  (
    {
      variant = 'ring',
      size = 'small',
      hidden,
      oppositeColor = true,
      keepLightMode = false,
      ...props
    },
    ref
  ) => {
    const spinnerRingClassName = {
      [styles.spinnerRing]: variant === 'ring',
      [styles.spinnerRingSmall]: size === 'small',
      [styles.spinnerRingMedium]: size === 'medium',
      [styles.spinnerRingLarge]: size === 'large',
      [styles.spinnerRingHidden]: hidden,
      [styles.spinnerRingOppositeColor]: oppositeColor,
      [styles.spinnerRingAlwaysLight]: keepLightMode,
    };

    const className = classNames(spinnerRingClassName, props.className);

    return (
      // eslint-disable-next-line react/jsx-no-useless-fragment
      <>
        {variant === 'ring' && (
          <div aria-hidden="true" ref={ref} {...props} className={className} />
        )}
      </>
    );
  }
);

Spinner.displayName = 'Spinner';
