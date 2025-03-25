import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { SelectDropdown } from './SelectDropdown';

// Mock data
const mockOptions = [
  { id: '1', name: 'Option 1', code: 'OPT1' },
  { id: '2', name: 'Option 2', code: 'OPT2' },
  { id: '3', name: 'Option 3', code: 'OPT3' },
];

// Wrapper component to provide form context
const FormWrapper = ({
  children,
  defaultValues = { select: '' },
}: {
  children: React.ReactNode;
  defaultValues?: any;
}) => {
  const methods = useForm({
    defaultValues,
  });

  return (
    <div style={{ maxWidth: '300px' }}>
      <FormProvider {...methods}>{children}</FormProvider>
    </div>
  );
};

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
} satisfies Meta<typeof SelectDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

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
      value: (value) => value.id,
    },
    isRequired: true,
  },
};

/**
 * Example of a disabled Select component.
 */
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

/**
 * Example of a Select component with loading state.
 */
export const WithLoading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

/**
 * Example of a multi-select component.
 */
export const MultiSelect: Story = {
  args: {
    ...Default.args,
    name: 'multiSelect',
    label: 'Multi Select',
    isMulti: true,
  },
  decorators: [
    (Story) => (
      <FormWrapper defaultValues={{ multiSelect: [] }}>
        <div style={{ maxWidth: '300px' }}>
          <Story />
          <pre className='mt-4'>Selected values will be an array</pre>
        </div>
      </FormWrapper>
    ),
  ],
};
