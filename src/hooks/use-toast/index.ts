import React from 'react';
import { ToastContext } from '../../providers';

export function useToast(): React.ComponentProps<
  typeof ToastContext.Provider
>['value'] {
  const toastContext = React.useContext(ToastContext);

  return toastContext;
}
