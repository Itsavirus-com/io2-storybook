import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'A customizable toast component for displaying success, warning, danger, and info messages.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'danger', 'warning', 'info'],
      description: 'Variant of the alert',
    },
    displayTitle: {
      control: 'text',
      description: 'Title of the alert',
    },
    body: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    variant: 'success',
    displayTitle: 'Success',
    body: 'This is a success toast message.',
    visible: true,
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    displayTitle: 'Danger',
    body: 'This is a danger toast message.',
    visible: true,
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    displayTitle: 'Warning',
    body: 'This is a warning toast message.',
    visible: true,
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    displayTitle: 'Info',
    body: 'This is an info toast message.',
    visible: true,
  },
};
