import React from 'react';
import { ThemeContext } from '../../providers';

export function useTheme(): React.ComponentProps<
  typeof ThemeContext.Provider
>['value'] {
  const themeContext = React.useContext(ThemeContext);

  return themeContext;
}
