import React from 'react';
import classNames from 'classnames';
import { Text } from '../text';

type InputMessageStates = 'info' | 'success' | 'error';

type Props = {
  state: InputMessageStates;
};

export const InputMessage = React.forwardRef<
  HTMLDivElement,
  Props & React.HTMLAttributes<HTMLDivElement>
>(({ state, children, ...props }, ref) => {
  const className = classNames(
    'flex items-center gap-2 cursor-default',
    props.className,
  );

  return (
    <div ref={ref} {...props} className={className}>
      <Text variant="xs">{children}</Text>
    </div>
  );
});

InputMessage.displayName = 'InputMessage';
