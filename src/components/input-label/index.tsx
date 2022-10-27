import React from 'react';
import classNames from 'classnames';
import styles from './input-label.styles';
import { Text } from '../text';

type Props = {
  variant?: React.ComponentProps<typeof Text>['variant'];
  error?: boolean | string;
};

export const InputLabel = React.forwardRef<
  HTMLLabelElement,
  Props & React.LabelHTMLAttributes<HTMLLabelElement>
>(({ error, children, variant = 'sm', ...props }, ref) => {
  const className = classNames(styles.inputLabel, props.className);

  return (
    <Text
      as="label"
      variant={variant}
      ref={ref}
      {...props}
      className={className}
    >
      {children}
    </Text>
  );
});

InputLabel.displayName = 'InputLabel';
