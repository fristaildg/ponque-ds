import { expect } from 'storybook/test';

import { Page } from './Page';

const meta = {
  component: Page,
  tags: ['ai-generated'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const LoggedOut = {};

export const LoggedIn = {
  play: async ({ canvas, userEvent }) => {
    const loginButton = canvas.getByRole('button', { name: /log in/i });
    await userEvent.click(loginButton);
    await expect(canvas.getByRole('button', { name: /log out/i })).toBeVisible();
  },
};
