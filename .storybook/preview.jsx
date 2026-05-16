import '../stories/button.css';
import '../stories/header.css';
import '../stories/page.css';

import { initialize, mswLoader } from 'msw-storybook-addon';

import { mswHandlers } from './msw-handlers';

initialize({ onUnhandledRequest: 'bypass' });

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  loaders: [mswLoader],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    msw: {
      handlers: mswHandlers,
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
