import { Meta, StoryObj } from '@storybook/react';
import { ConfirmationModal } from './ConfirmationModal';

export default {
  title: 'Components/ConfirmationModal',
  component: ConfirmationModal,
} as Meta<typeof ConfirmationModal>;

type Story = StoryObj<typeof ConfirmationModal>;

export const Default: Story = {
  args: {
    title: 'Confirmation',
    body: 'Are you sure you want to proceed?',
    visible: true,
    onCancel: () => {},
    onConfirm: () => {},
    variant: 'info',
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const Success: Story = {
  args: {
    ...Default.args,
    variant: 'success',
  },
};

export const Danger: Story = {
  args: {
    ...Default.args,
    variant: 'danger',
  },
};

export const CustomLabels: Story = {
  args: {
    ...Default.args,
    cancelLabel: 'No, go back',
    confirmLabel: 'Yes, I am sure',
  },
};
