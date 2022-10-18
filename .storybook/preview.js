import '../src/core/fonts.css';
import '../src/core/base.css';
import './storybook.css';

const systemIsDarkMode =
  window.matchMedia &&
  window.matchMedia('(prefers-color-scheme: dark)').matches;

localStorage.setItem('theme', systemIsDarkMode ? 'dark' : 'light');

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: systemIsDarkMode ? 'Dark' : 'Light',
    list: [
      { name: 'Light', color: '#f3f4fa' },
      { name: 'Dark', class: 'dark', color: '#1c1c1c' },
      { name: 'White', class: 'white', color: '#ffffff' },
    ],
    onChange: ({ name }) => {
      localStorage.setItem('theme', name.toLowerCase());
    },
  },
};
