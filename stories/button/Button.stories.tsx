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
      options: ['sm', 'lg'],
      description: 'Size of the button'
    },
    variant: {
      control: 'select',
      options: ['solid', 'light', 'outline-dashed'],
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
        'light',
        'dark',
      ],
      description: 'Color theme of the button'
    },
    activeColorClass: {
      control: 'select',
      options: [
        'light-primary',
        'light-secondary',
        'light-success',
        'light-info',
        'light-warning', 
        'light-danger',
        'light-dark'
      ],
      description: 'Active state color of the button'
    },
    label: {
      control: 'text',
      description: 'Button label text'
    },
    icon: {
      control: 'text',
      description: 'Icon name for the button'
    },
    iconSize: {
      control: 'select',
      options: ['fs-1', 'fs-2', 'fs-3', 'fs-4', 'fs-5', 'fs-6', 'fs-7', 'fs-8', 'fs-9', 'fs-10'],
      description: 'Size of the icon'
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: 'Button type attribute'
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler'
    }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Solid: Story = {
  args: {
    label: 'Base Button',
    icon: 'arrow-right',
    size: 'sm',
    variant: 'solid',
    colorClass: 'primary',
    activeColorClass: 'light-primary',
    iconSize: 'fs-2'
  }
}

export const Light: Story = {
  args: {
    label: 'Light Button',
    icon: 'arrow-right',
    size: 'sm',
    variant: 'light',
    colorClass: 'primary',
    activeColorClass: 'light-primary',
    iconSize: 'fs-2'
  }
}

export const OutlineDashed: Story = {
  args: {
    label: 'Outline Dashed',
    icon: 'arrow-right',
    size: 'sm',
    variant: 'outline-dashed',
    colorClass: 'primary',
    activeColorClass: 'light-primary',
    iconSize: 'fs-2'
  }
}

export const IconOnly: Story = {
  args: {
    icon: 'arrow-right',
    size: 'sm',
    variant: 'solid',
    colorClass: 'primary',
    activeColorClass: 'light-primary',
    iconSize: 'fs-2'
  }
}

export const Small: Story = {
  args: {
    label: 'Small Button',
    icon: 'arrow-right',
    size: 'sm',
    variant: 'solid',
    colorClass: 'primary',
    activeColorClass: 'light-primary',
    iconSize: 'fs-3'
  }
}

export const Large: Story = {
  args: {
    label: 'Large Button',
    icon: 'arrow-right',
    size: 'lg',
    variant: 'solid',
    colorClass: 'primary',
    activeColorClass: 'light-primary',
    iconSize: 'fs-2'
  }
}

