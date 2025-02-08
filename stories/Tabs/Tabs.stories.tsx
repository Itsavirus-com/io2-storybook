import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DynamicTabs } from './Tabs';

export default {
  title: 'Components/Tabs',
  component: DynamicTabs,
  tags: ['autodocs'],
  argTypes: {
    defaultActiveKey: { control: 'text' },
    tabs: { control: 'object' },
  },
  parameters: {
    layout: 'padded',
  },
} as Meta<typeof DynamicTabs>;

type Story = StoryObj<typeof DynamicTabs>;

/**
 * Basic tabs component.
 */
export const Default: Story = {
  args: {
    defaultActiveKey: 'tab1',
    tabs: [
      {
        eventKey: 'tab1',
        title: 'Tab 1',
        content: <div>Content for Tab 1</div>,
      },
      {
        eventKey: 'tab2',
        title: 'Tab 2',
        content: <div>Content for Tab 2</div>,
      },
      {
        eventKey: 'tab3',
        title: 'Tab 3',
        content: <div>Content for Tab 3</div>,
      },
    ],
  },
};
