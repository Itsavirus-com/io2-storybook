import { Meta, StoryObj } from '@storybook/react';
import { KTIcon } from './KTIcon';

export default {
  title: 'Components/Icon',
  component: KTIcon,
  tags: ['autodocs'],
  argTypes: {
    iconName: { control: 'text' },
    className: { control: 'text' },
    onClick: { action: 'clicked' },
    color: { control: 'color' },
  },
} as Meta<typeof KTIcon>;

type Story = StoryObj<typeof KTIcon>;

export const Default: Story = {
  args: {
    iconName: 'user',
    className: 'fs-2',
  },
};

export const WithOnClick: Story = {
  args: {
    ...Default.args,
    onClick: () => {
      alert('Icon clicked!');
    },
  },
};
