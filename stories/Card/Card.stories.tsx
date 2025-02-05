import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a card description',
    children: <div>Card content goes here</div>,
  },
};
