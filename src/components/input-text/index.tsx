import React from 'react';
import classNames from 'classnames';
import { InputMessage } from '../input-message';
import styles from './input-text.styles';

type Props = {
  error?: boolean | string;
};

export const InputText = React.forwardRef<
  HTMLInputElement,
  Props & React.InputHTMLAttributes<HTMLInputElement>
>(({ error, className, ...props }, ref) => {
  const wrapperClassName = classNames(styles.inputTextWrapper, className);

  const inputClassName = classNames(styles.inputText, {
    [styles.inputTextError]: error,
  });

  return (
    <div className={wrapperClassName}>
      <input
        {...props}
        className={inputClassName}
        ref={ref}
        aria-disabled={props.readOnly || props.disabled}
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
