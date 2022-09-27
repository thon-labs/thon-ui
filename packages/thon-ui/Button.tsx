import * as React from 'react';

type Props = {
  children: React.ReactNode;
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  Props & React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children }, ref) => {
  return <button ref={ref}>{children}</button>;
});

Button.displayName = 'Button';
