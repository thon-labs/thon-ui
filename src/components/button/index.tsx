import React from 'react';
import classNames from 'classnames';
import { Text } from '../text';
import { Spinner } from '../spinner';
import styles from './button.styles';

type Variants = 'primary' | 'secondary' | 'ghost' | 'danger';

type Sizes = 'small' | 'medium' | 'large';

type Props = {
  variant: Variants;
  size?: Sizes;
  as?: 'a' | 'button';
  loading?: boolean;
  locked?: boolean;
};

export const Button = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  Props &
    React.AnchorHTMLAttributes<HTMLAnchorElement> &
    React.ButtonHTMLAttributes<HTMLButtonElement>
>(
  (
    {
      variant,
      size = 'medium',
      loading,
      locked,
      children,
      as = 'button',
      ...props
    },
    ref
  ) => {
    const className = classNames(styles.button, {
      [styles.buttonSmall]: size === 'small',
      [styles.buttonMedium]: size === 'medium',
      [styles.buttonLarge]: size === 'large',
      [styles.buttonPrimary]: variant === 'primary',
      [styles.buttonSecondary]: variant === 'secondary',
      [styles.buttonGhost]: variant === 'ghost',
      [styles.buttonDanger]: variant === 'danger',
      [styles.buttonDisabled]: props.disabled,
      [styles.buttonLoading]: loading,
      [styles.buttonLocked]: locked,
    });
    const textClassName = classNames(styles.buttonText, {
      [styles.buttonPrimaryText]: variant === 'primary',
      [styles.buttonSecondaryText]: variant === 'secondary',
      [styles.buttonDangerText]: variant === 'danger',
      [styles.buttonTextLoading]: loading,
    });

    return React.createElement(
      as,
      {
        ref,
        'aria-disabled': props.disabled || loading || locked,
        ...props,
        className,
      },
      <>
        <Spinner className="!absolute" hidden={!loading} />
        <Text variant="sm" className={textClassName}>
          {children}
        </Text>
      </>
    );
  }
);

Button.displayName = 'Button';
