# Thon UI

This is an UI library React Tailwind based created from the [Thon Labs](https://thonlabs.io) Team.

This is a working in progress project.

## How to Install

First you can install using npm or yarn into your project.

```
npm i @thonlabs/ui
# or
yarn add @thonlabs/ui
```

On your project create a tailwind config file on root with this configuration below:

```javascript
const { thonUI, thonUIContent } = require('@thonlabs/ui/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['<your-contents>', thonUIContent()],
  jit: true,
  plugins: [thonUI()],
};
```

Then you may create the `postcss.config.js` file with the following content:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

_Note: The tailwind, postcss and autoprefixer libraries is already installed by @thonlabs/ui_

## How to Use

You can import components, hooks or providers following those patterns below

### Core

On the main file off your application add the base styles from Thon.

```javascript
import '@thonlabs/ui/core/base.css';
import '@thonlabs/ui/core/fonts.css'; // Exclude in case of using other fronts
```

_Note: the default font from Thon UI is ["Inter"](https://fonts.google.com/specimen/Inter) from Google Fonts._

### Components

```javascript
import { Text, Card } from '@thonlabs/ui';
```

**Current Available Components**

- Avatar
- Badge
- Button
- Card
- InputLabel
- InputMessage
- InputSelect
- InputText
- InputTextArea
- RenderMarkdown
- Spinner
- Text

### Providers

```javascript
import { ThemeProvider } from '@thonlabs/ui/providers';
```

**Current Available Providers**

- ThemeProvider
- ToastProvider

### Hooks

```javascript
import { useTheme } from '@thonlabs/ui/hooks';
```

**Current Available Hooks**

- useLocalStorage
- useShortcut
- useTheme
- useToast
