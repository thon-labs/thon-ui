import React, { OptionHTMLAttributes } from 'react';
import classNames from 'classnames';
import { InputMessage } from '../input-message';
import styles from './input-select.styles';
import { InputLabel } from '../input-label';

type Props = {
  options: {
    label: any;
    value: any;
    isPlaceholder?: boolean;
  }[];
  error?: boolean | string;
  label?: React.ReactNode;
};

export const InputSelect = React.forwardRef<
  HTMLSelectElement,
  Props & React.SelectHTMLAttributes<HTMLSelectElement>
>(({ error, className, label, id, options, onChange, ...props }, ref) => {
  const [currentValue, setCurrentValue] = React.useState(props.defaultValue);
  const wrapperClassName = classNames(styles.inputSelectWrapper, className);
  const inputClassName = classNames(styles.inputSelect, {
    [styles.inputSelectError]: error,
    [styles.inputSelectPlaceholder]:
      currentValue === options[0].value && options[0].isPlaceholder,
  });

  return (
    <div className={wrapperClassName}>
      {label && (
        <InputLabel htmlFor={id} className={styles.inputLabel}>
          {label}
        </InputLabel>
      )}

      <select
        aria-disabled={props.disabled}
        id={id}
        ref={ref}
        {...props}
        onChange={(e) => {
          setCurrentValue(e.target.value);
          onChange?.(e);
        }}
        className={inputClassName}
      >
        {options.map(({ label, value, isPlaceholder }, index) => (
          <option
            key={`${label}_${index}`}
            value={value}
            hidden={isPlaceholder}
            className="data-[hidden=true]:text-red-500"
          >
            {label}
          </option>
        ))}
      </select>

      {typeof error === 'string' && (
        <InputMessage state="error" className={styles.inputSelectMessage}>
          {error}
        </InputMessage>
      )}
    </div>
  );
});

InputSelect.displayName = 'InputSelect';
