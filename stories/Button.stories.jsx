import { expect } from 'storybook/test';

import { Button } from '../src/components/Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['default', 'small'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    showIconLeft: { control: 'boolean' },
    showIconRight: { control: 'boolean' },
  },
};

export default meta;

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Añadir al carrito',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /añadir al carrito/i });
    await expect(button).toHaveClass('pq-button--primary');
    const inner = button.querySelector('.pq-button__inner');
    await expect(getComputedStyle(inner).backgroundColor).toBe('rgb(236, 234, 85)');
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
    children: 'Añadir al carrito',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
    children: 'Añadir al carrito',
  },
};

export const Danger = {
  args: {
    variant: 'danger',
    children: 'Añadir al carrito',
  },
};

export const Small = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Añadir al carrito',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /añadir al carrito/i });
    await expect(button).toHaveClass('pq-button--small');
  },
};

export const Loading = {
  args: {
    variant: 'primary',
    loading: true,
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-busy', 'true');
    await expect(button).toBeDisabled();
  },
};

export const Disabled = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Añadir al carrito',
  },
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button', { name: /añadir al carrito/i });
    await expect(button).toBeDisabled();
  },
};

export const TextOnly = {
  args: {
    variant: 'primary',
    showIconLeft: false,
    showIconRight: false,
    children: 'Añadir al carrito',
  },
};

export const IconOnly = {
  args: {
    variant: 'primary',
    showIconLeft: true,
    showIconRight: false,
    children: '',
  },
};

const variants = ['primary', 'secondary', 'ghost', 'danger'];

export const AllVariants = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, auto)',
        gap: '16px',
        alignItems: 'start',
      }}
    >
      {variants.map((variant) => (
        <div key={variant} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Button variant={variant} size="default">
            Añadir al carrito
          </Button>
          <Button variant={variant} size="small">
            Añadir al carrito
          </Button>
        </div>
      ))}
    </div>
  ),
};
