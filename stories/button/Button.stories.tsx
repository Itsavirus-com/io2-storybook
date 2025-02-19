import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button'
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline'],
      description: 'Style variant of the button'
    },
    colorClass: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'danger',
        'dark',
      ],
      description: 'Color theme of the button'
    },
    label: {
      control: 'text',
      description: 'Button label text'
    },
    icon: {
      control: 'text',
      description: 'Icon name from KTIcon component'
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state of the button'
    },
    iconSize: {
      control: 'select',
      options: ['fs-1', 'fs-2', 'fs-3', 'fs-4', 'fs-5', 'fs-6'],
      description: 'Size of the icon'
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler'
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

/**
 * Default solid button with primary color
 */
export const Solid: Story = {
  args: {
    label: 'Solid Button',
    colorClass: 'success',
    variant: 'solid',
    size: 'md',
    activeColorClass:'success'
  }
}


/**
 * Outline variant with bordered style
 */
export const Outline: Story = {
  args: {
    label: 'Outline Button',
    colorClass: 'primary',
    variant: 'outline',
    size: 'md',
    activeColorClass: 'primary',
  },
};

/**
 * Icon-only button
 */
export const IconOnly: Story = {
  args: {
    icon: 'plus',
    colorClass: 'light',
    variant: 'solid',
    size: 'md',
    activeColorClass: 'light-primary',
    iconSize: 'fs-2',
  },
};

/**
 * Disabled button state
 */
export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    colorClass: 'primary',
    variant: 'solid',
    size: 'md',
    disabled: true
  }
}

/**
 * Loading button state
 */
export const Loading: Story = {
  args: {
    label: 'Loading Button',
    colorClass: 'success',
    variant: 'solid',
    size: 'md',
    loading: true,
  },
};
