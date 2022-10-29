import React from 'react';
import classNames from 'classnames';
import { Text } from '../text';
import { Spinner } from '../spinner';
import styles from './button.styles';

type Variants = 'primary' | 'secondary' | 'ghost' | 'danger' | 'custom';

type Sizes = 'small' | 'medium' | 'large';

type Props = {
  variant: Variants;
  size?: Sizes;
  as?: 'a' | 'button';
  loading?: boolean;
  locked?: boolean;
  textClassName?: string;
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
      textClassName: customTextClassName,
      ...props
    },
    ref
  ) => {
    const className = classNames(
      styles.button,
      {
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
      },
      props.className
    );
    const textClassName = classNames(
      styles.buttonText,
      {
        [styles.buttonTextLoading]: loading,
        [styles.buttonSecondaryText]: variant === 'secondary',
        [styles.buttonTextWhite]: variant === 'primary' || variant === 'danger',
      },
      customTextClassName
    );

    return React.createElement(
      as,
      {
        ref,
        'aria-disabled': props.disabled || loading || locked,
        ...props,
        className,
      },
      <>
        <Spinner
          className="!absolute"
          hidden={!loading}
          oppositeColor={!(variant === 'secondary')}
          keepLightMode={variant === 'primary' || variant == 'danger'}
        />
        <Text variant="sm" className={textClassName}>
          {children}
        </Text>
      </>
    );
  }
);

Button.displayName = 'Button';
