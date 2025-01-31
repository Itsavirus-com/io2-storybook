import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'
import { FormProvider, useForm } from 'react-hook-form'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const methods = useForm({
        defaultValues: {
          checkboxOption: false,
        },
      })
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      )
    },
  ],
  parameters: {
    layout: 'centered',
  },
}

export default meta
export type Story = StoryObj<typeof Switch>

export const Default: Story = {
  args: {
    name: 'switchOption',
    label: 'Switch Option',
  },
}



export const WithError: Story = {
  decorators: [
    (Story) => {
      const methods = useForm({
        defaultValues: {
          switchError: false,
        },
      })
      methods.setError('switchError', {
        type: 'manual',
        message: 'This field is required',
      })
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      )
    },
  ],
  args: {
    name: 'switchError',
    label: 'Switch with Error',
  },
}

export const Disabled: Story = {
  args: {
    name: 'switchDisabled',
    label: 'Disabled Switch',
    disabled: true,
  },
}
