import React from 'react';
import classNames from 'classnames';
import { InputMessage } from '../input-message';
import styles from './input-text.styles';
import { InputLabel } from '../input-label';

type Props = {
  error?: boolean | string;
  label?: React.ReactNode;
};

export const InputText = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>(({ error, className, label, id, ...props }, ref) => {
  const wrapperClassName = classNames(styles.inputTextWrapper, className);

  const inputClassName = classNames(styles.inputText, {
    [styles.inputTextError]: error,
  });

  return (
    <div className={wrapperClassName}>
      {label && (
        <InputLabel htmlFor={id} className={styles.inputLabel}>
          {label}
        </InputLabel>
      )}

      <input
        ref={ref}
        aria-disabled={props.readOnly || props.disabled}
        id={id}
        {...props}
        className={inputClassName}
      />

      {typeof error === 'string' && (
        <InputMessage state="error" className={styles.inputTextMessage}>
          {error}
        </InputMessage>
      )}
    </div>
  );
});

InputText.displayName = 'InputText';
