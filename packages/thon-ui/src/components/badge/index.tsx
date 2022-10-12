import React from 'react';
import classNames from 'classnames';
import { Text } from '../text';
import styles from './badge.styles';

type Variants = 'red';

type Sizes = 'small' | 'medium' | 'large';

type Props = {
  variant?: Variants;
  size?: Sizes;
};

const stylesMapper: { [key in Sizes]: { fontSize: string } } = {
  small: {
    fontSize: 'xxs',
  },
  medium: {
    fontSize: 'label',
  },
  large: {
    fontSize: 'label',
  },
};

export const Badge = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>(({ variant, size = 'small', children, ...props }, ref) => {
  const className = classNames(
    styles.badge,
    {
      [styles.badgeRed]: variant === 'red',
      [styles.badgeMedium]: size === 'medium',
      [styles.badgeLarge]: size === 'large',
    },
    props.className
  );

  return (
    <span ref={ref} {...props} className={className}>
      <Text variant={stylesMapper[size].fontSize} className={styles.badgeText}>
        {children}
      </Text>
    </span>
  );
});

Badge.displayName = 'Badge';
