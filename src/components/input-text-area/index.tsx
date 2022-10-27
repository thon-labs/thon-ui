import React from 'react';
import classNames from 'classnames';
import { InputMessage } from '../input-message';
import styles from './input-text-area.styles';
import { InputLabel } from '../input-label';

type Props = {
  error?: boolean | string;
  label?: React.ReactNode;
  inputClassName?: string;
};

export const InputTextArea = React.forwardRef<
  HTMLTextAreaElement,
  Props & React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ error, className, label, id, inputClassName, ...props }, ref) => {
  const wrapperClassName = classNames(styles.inputTextAreaWrapper, className);

  const textAreaClassName = classNames(
    styles.inputTextArea,
    {
      [styles.inputTextAreaError]: error,
    },
    inputClassName
  );

  return (
    <div className={wrapperClassName}>
      {label && (
        <InputLabel htmlFor={id} className={styles.inputLabel}>
          {label}
        </InputLabel>
      )}

      <textarea
        ref={ref}
        aria-disabled={props.readOnly || props.disabled}
        id={id}
        {...props}
        className={textAreaClassName}
      />

      {typeof error === 'string' && (
        <InputMessage state="error" className={styles.inputTextAreaMessage}>
          {error}
        </InputMessage>
      )}
    </div>
  );
});

InputTextArea.displayName = 'InputTextArea';
