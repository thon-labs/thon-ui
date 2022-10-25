import React from 'react';
import classNames from 'classnames';
import styles from './card.styles';

type Props = {
  bordered?: boolean;
  clickable?: boolean;
  as?: React.ElementType;
  disabled?: boolean;
  withBackground?: boolean;
};

export const Card = React.forwardRef<
  HTMLElement,
  Props & React.HTMLAttributes<HTMLElement>
>(
  (
    {
      bordered,
      clickable,
      as = 'div',
      disabled,
      children,
      withBackground = true,
      ...props
    },
    ref
  ) => {
    const clickableClassName = classNames(styles.cardClickable, {
      [styles.cardClickableWithBackground]: withBackground,
    });

    const className = classNames(
      styles.card,
      {
        [clickableClassName]: clickable,
        [styles.cardBordered]: bordered,
        [styles.cardBackground]: withBackground,
        [styles.cardDisabled]: disabled,
      },
      props.className
    );

    return React.createElement(
      as,
      {
        ...props,
        className,
        ref,
      },
      <>{children}</>
    );
  }
);

Card.displayName = 'Card';
