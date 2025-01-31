import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Radio } from './Radio'
import { FormProvider, useForm } from 'react-hook-form'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      const methods = useForm({
        defaultValues: {
          radioOption: '',
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
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  args: {
    name: 'radioOption',
    label: 'Radio Option',
    value: 'option1',
  },
}

export const RadioGroup: Story = {
  render: () => {
    return (
      <div>
        <Radio
          name="radioGroup"
          label="Option 1"
          value="option1"
          containerClass="mb-2"
        />
        <Radio
          name="radioGroup"
          label="Option 2"
          value="option2"
          containerClass="mb-2"
        />
        <Radio
          name="radioGroup"
          label="Option 3"
          value="option3"
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
          radioError: '',
        },
      })
      methods.setError('radioError', {
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
    name: 'radioError',
    label: 'Radio with Error',
    value: 'option1',
  },
}
export const Disabled: Story = {
  args: {
    name: 'radioDisabled',
    label: 'Disabled Radio',
    disabled: true,
  },
}

