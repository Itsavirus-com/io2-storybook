import React from 'react';

import { Button } from 'react-bootstrap';

import { KTIcon } from '../../KTICon/KTIcon';
import { TableActionsHeadProps, TableActionsProps } from './tableActions.type';

export const TableActionsHead = ({
  actions,
  customActions,
}: TableActionsHeadProps) => {
  if (!actions?.length && !customActions?.length) return null;

  return <th className='text-end'>Actions</th>;
};

export const TableActions = (props: TableActionsProps) => {
  const { actions, customActions, actionBasePath, dataId, queryParams } = props;

  if (!actions?.length && !customActions?.length) return null;

  return (
    <td>
      <div className='d-flex justify-content-end flex-shrink-0'>
        {customActions?.map((customAction, index) => (
          <Button key={index} />
        ))}

        {actions?.includes('view') && (
          <button className='btn btn-sm'>
            <KTIcon iconName='book' className='fs-4' />
          </button>
        )}

        {actions?.includes('edit') && (
          <button className='btn btn-sm'>
            <KTIcon iconName='pencil' className='fs-4' />
          </button>
        )}

        {actions?.includes('delete') && (
          <button className='btn btn-sm'>
            <KTIcon iconName='trash' className='fs-4' />
          </button>
        )}
      </div>
    </td>
  );
};
