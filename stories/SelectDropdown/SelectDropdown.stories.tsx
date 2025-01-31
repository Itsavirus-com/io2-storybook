import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { FormProvider, useForm } from 'react-hook-form'
import { SelectDropdown } from './SelectDropdown'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '../Button/Button'

// Mock data
const mockOptions = [
  { id: '1', name: 'Option 1', code: 'OPT1' },
  { id: '2', name: 'Option 2', code: 'OPT2' },
  { id: '3', name: 'Option 3', code: 'OPT3' },
]

// Wrapper component to provide form context
const FormWrapper = ({ children }: { children: React.ReactNode }) => {
  const methods = useForm({
    defaultValues: {
      select: ''
    }
  })
  
  return (
    <FormProvider {...methods}>
      {children}
    </FormProvider>
  )
}

const meta = {
  title: 'Components/Select Dropdown',
  component: SelectDropdown,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <FormWrapper>
        <Story />
      </FormWrapper>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof SelectDropdown>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Default Select component with options.
 */
export const Default: Story = {
  args: {
    label: 'Select Option',
    name: 'select',
    options: mockOptions,
    option: {
      label: (value) => value.name,
      value: (value) => value.id
    },
    isRequired: true,
  },
}

/**
 * Example of a disabled Select component.
 */
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
}

/**
 * Example of a Select component with loading state.
 */
export const WithLoading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
}

/**
 * Example of a Select component with form validation enabled.
 * This story demonstrates:
 * - Required field validation
 * - Real-time validation on change
 * - Form submission handling
 */
export const WithValidation: Story = {
  args: {
    ...Default.args,
    name: 'select',
    label: 'Select Dropdown with Validation',
    isRequired: true,
  },
  decorators: [
    (Story) => {
      const methods = useForm({
        mode: 'onChange',
        defaultValues: {
          'select': ''
        },
        resolver: yupResolver(yup.object({
          'select': yup.string()
            .required('This field is required')
            .test('not-zero', 'Please select an option', value => value !== '0')
        }))
      })

      return (
        <FormProvider {...methods}>
          <div style={{ maxWidth: '300px' }}>
            <Story />
            <button
              type="button"
              className="btn btn-success"
              onClick={() => methods.handleSubmit((data) => console.log(data))()}
            >
              Submit
            </button>
          </div>
        </FormProvider>
      )
    },
  ],
}