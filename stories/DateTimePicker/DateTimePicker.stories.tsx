import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { DateTimePicker } from './DateTimePicker';

const meta: Meta<typeof DateTimePicker> = {
  title: 'Components/Date & Time Picker',
  component: DateTimePicker,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Unique identifier for the datetime field',
    },
    label: {
      control: 'text',
      description: 'Label text for the datetime field',
    },
    isRequired: {
      control: 'boolean',
      description: 'Whether the datetime field is required',
    },
    enableTime: {
      control: 'boolean',
      description: 'Whether to enable time selection',
    },
    dateFormat: {
      control: 'text',
      description: 'Format of the displayed date',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the datetime field is disabled',
    },
  },
  decorators: [
    (Story) => {
      const methods = useForm();
      return (
        <FormProvider {...methods}>
          <Story />
        </FormProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const Default: Story = {
  args: {
    label: 'Select Date',
    name: 'date',
  },
};

export const DateWithTime: Story = {
  args: {
    label: 'Select Date and Time',
    name: 'datetime',
    enableTime: true,
  },
};

export const TimeOnly: Story = {
  args: {
    label: 'Select Time',
    name: 'time',
    options: {
      noCalendar: true,
      enableTime: true,
      dateFormat: 'H:i',
      time_24hr: true,
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Date Picker',
    name: 'disabledDate',
    disabled: true,
  },
};
