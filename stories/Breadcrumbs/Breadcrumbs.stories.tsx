import type { Meta, StoryObj } from '@storybook/react';

import { BreadcrumbItem, Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array of breadcrumb items',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const sampleItems: BreadcrumbItem[] = [
  {
    name: 'Enterprise Root',
    path: '/enterprise-root',
    type: 'enterprise-root',
  },
  { name: 'Address', path: '/address', type: 'address' },
  {
    name: 'Business Partner',
    path: '/business-partner',
    type: 'business-partner',
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
  },
};

export const ActiveItem: Story = {
  args: {
    items: [sampleItems[0]],
  },
};
