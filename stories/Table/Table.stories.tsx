import { Meta, StoryObj } from '@storybook/react';

import { Table } from './Table';

export default {
  title: 'Components/Table',
  component: Table,
} as Meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    title: 'Users',
    description: 'List of all users',
    columns: [
      { id: 'name', title: 'Name' },
      { id: 'email', title: 'Email' },
      { id: 'role', title: 'Role' },
    ],
    data: [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
      // Add more sample data as needed
    ],
  },
};

export const WithActions: Story = {
  args: {
    ...Default.args,
    actions: ['view', 'edit', 'delete'],
    actionBasePath: '/users',
  },
};

export const Empty: Story = {
  args: {
    ...Default.args,
    data: [],
  },
};

// export const WithFilters: Story = {
//   args: {
//     ...Default.args,
//     filters: (
//       <>
//         <div className='mb-5'>
//           <label htmlFor='role' className='form-label fw-bold'>
//             Role
//           </label>
//           <select id='role' className='form-select form-select-solid'>
//             <option value=''>All</option>
//             <option value='admin'>Admin</option>
//             <option value='user'>User</option>
//           </select>
//         </div>
//         {/* Add more filters as needed */}
//       </>
//     ),
//   },
// };
