import React from 'react';
import { useLocalStorage } from '../../hooks';
import { useShortcut } from '../../hooks/use-shortcut';

export type Themes = 'dark' | 'light';
type ThemeModes = 'auto' | 'manual';

type ThemeConfiguration = { theme: Themes; mode: ThemeModes };

export interface IThemeContext {
  theme: Themes;
  themeConfiguration: ThemeConfiguration;
  setTheme: (theme: Themes) => void;
  setThemeFromSystem: () => void;
  toggleTheme: () => void;
}

const STORAGE_THEME_KEY = 'themeConfiguration';

const defaultThemeConfiguration: ThemeConfiguration = {
  theme: 'light',
  mode: 'auto',
};

/* istanbul ignore next */
export const ThemeContext = React.createContext<IThemeContext>({
  theme: defaultThemeConfiguration.theme,
  themeConfiguration: defaultThemeConfiguration,
  setTheme: () => void 0,
  setThemeFromSystem: () => void 0,
  toggleTheme: () => void 0,
});

type Props = {
  storageKey?: string;
};

export const ThemeProvider: React.FC<
  Props & React.HTMLAttributes<HTMLElement>
> = ({ storageKey = STORAGE_THEME_KEY, children }) => {
  const [themeConfiguration, setThemeConfiguration] =
    useLocalStorage<ThemeConfiguration>(storageKey, defaultThemeConfiguration);

  function setAndSaveTheme(themeConfiguration: ThemeConfiguration) {
    setThemeConfiguration(themeConfiguration);

    document.body.classList.remove('dark', 'light');
    document.body.classList.add(themeConfiguration.theme);
  }

  function setTheme(theme: Themes) {
    setAndSaveTheme({ theme, mode: 'manual' });
  }

  function toggleTheme() {
    setAndSaveTheme({
      theme: themeConfiguration.theme === 'dark' ? 'light' : 'dark',
      mode: 'manual',
    });
  }

  function setThemeFromSystem() {
    if (window.matchMedia) {
      const systemIsDarkMode = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      const systemTheme: Themes = systemIsDarkMode ? 'dark' : 'light';

      setAndSaveTheme({ theme: systemTheme, mode: 'auto' });
    } else {
      setAndSaveTheme(defaultThemeConfiguration);
    }
  }

  useShortcut([
    {
      keys: ['l'],
      addCtrlModifier: true,
      callback: () =>
        setTheme(themeConfiguration.theme === 'dark' ? 'light' : 'dark'),
    },
  ]);

  React.useEffect(() => {
    const manualChosenTheme =
      themeConfiguration.mode === 'manual' && themeConfiguration.theme;

    if (manualChosenTheme) {
      setAndSaveTheme({ theme: manualChosenTheme, mode: 'manual' });
    } else {
      setThemeFromSystem();
    }

    // Listener for storage changes
    function storageListener({ newValue, key }: StorageEvent) {
      if (key === STORAGE_THEME_KEY) {
        setThemeConfiguration(
          newValue ? JSON.parse(newValue) : defaultThemeConfiguration
        );
      }
    }

    window.addEventListener('storage', storageListener);

    return () => {
      window.removeEventListener('storage', storageListener);
    };
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme: themeConfiguration.theme,
        themeConfiguration,
        setTheme,
        setThemeFromSystem,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
