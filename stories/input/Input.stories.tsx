import { yupResolver } from '@hookform/resolvers/yup';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Input } from './Input';

/**
 * Input is a form input component that integrates with React Hook Form.
 * It provides validation, required field handling, and label support.
 */
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Unique identifier for the input field',
    },
    label: {
      control: 'text',
      description: 'Label text for the input field',
    },
    isRequired: {
      control: 'boolean',
      description: 'Whether the input field is required',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number'],
      description: 'HTML input type attribute',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input field is disabled',
    },
  },
  decorators: [
    (Story) => {
      const methods = useForm();
      return (
        <div style={{ maxWidth: '300px' }}>
          <FormProvider {...methods}>
            <Story />
          </FormProvider>
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Input>;

/**
 * Basic input field with a label.
 */
export const Default: Story = {
  args: {
    name: 'default-input',
    label: 'Default Input',
  },
};

/**
 * Example of an input field with form validation enabled.
 * This story demonstrates:
 * - Required field validation
 * - Real-time validation on change
 * - Form submission handling
 */
export const WithValidation: Story = {
  args: {
    name: 'validated-input',
    label: 'Input with Validation',
    isRequired: true,
  },
  decorators: [
    (Story) => {
      const methods = useForm({
        mode: 'onChange',
        defaultValues: {
          'validated-input': '',
        },
        resolver: yupResolver(
          yup.object({
            'validated-input': yup
              .string()
              .required('This field is required')
              .min(3, 'Minimum length is 3 characters'),
          })
        ),
      });

      const error = methods.formState.errors['validated-input'];

      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
};

/**
 * Example of a disabled input field that cannot be edited by users.
 */
export const Disabled: Story = {
  args: {
    name: 'disabled-input',
    label: 'Disabled Input',
    disabled: true,
    placeholder: 'This input is disabled',
  },
};

/**
 * Example of a textarea input field.
 */
export const TextArea: Story = {
  args: {
    name: 'text-area',
    label: 'Text Area',
    inputType: 'textarea',
    placeholder: 'This is a text area',
  },
};
