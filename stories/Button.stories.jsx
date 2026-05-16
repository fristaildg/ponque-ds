import { expect } from 'storybook/test';

import { Button } from './Button';

const meta = {
  component: Button,
  tags: ['ai-generated'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Button' });
    await expect(button).toHaveClass('storybook-button--primary');
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const CssCheck = {
  args: {
    primary: true,
    label: 'Button',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: 'Button' });
    await expect(getComputedStyle(button).backgroundColor).toBe('rgb(85, 90, 185)');
  },
};
