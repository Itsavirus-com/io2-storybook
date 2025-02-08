import { Meta, StoryObj } from '@storybook/react';
import { TablePagination } from './TablePagination';

export default {
  title: 'Components/TablePagination',
  component: TablePagination,
  tags: ['autodocs'],
  docs: {
    description: {
      component:
        'TablePagination is a component that displays a table of data with pagination.',
    },
  },
  argTypes: {
    currentPage: { control: 'number' },
    totalPage: { control: 'number' },
    perPage: { control: 'number' },
  },
} as Meta<typeof TablePagination>;

type Story = StoryObj<typeof TablePagination>;

/**
 * Basic table pagination component.
 */
export const Default: Story = {
  args: {
    currentPage: 1,
    totalPage: 10,
    perPage: 20,
  },
};
