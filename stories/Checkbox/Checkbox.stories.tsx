import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { FormProvider, useForm } from 'react-hook-form'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
export type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {
    name: 'checkboxOption',
    label: 'Checkbox Option',
  },
}

export const CheckboxGroup: Story = {
  render: () => {
    return (
      <div>
        <Checkbox
          name="checkboxGroup1"
          label="Option 1"
          containerClass="mb-2"
        />
        <Checkbox
          name="checkboxGroup2"
          label="Option 2"
          containerClass="mb-2"
        />
        <Checkbox
          name="checkboxGroup3"
          label="Option 3"
        />
      </div>
    )
  },
}

export const WithError: Story = {
  decorators: [
    (Story) => {
      const methods = useForm({
        defaultValues: {
          checkboxError: false,
        },
      })
      methods.setError('checkboxError', {
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
    name: 'checkboxError',
    label: 'Checkbox with Error',
  },
}

export const Disabled: Story = {
  args: {
    name: 'checkboxDisabled',
    label: 'Disabled Checkbox',
    disabled: true,
  },
}
