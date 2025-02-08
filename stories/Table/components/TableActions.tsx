import React from 'react';

import { Button } from '../../Button/Button';

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
          <Button key={index} {...customAction} />
        ))}

        {actions?.includes('view') && (
          /**
           * Renders a view button that navigates to the detailed view of a data entry
           * @param actionBasePath - Base URL path for the view action (optional)
           * @param dataId - Unique identifier for the data record
           * @param queryParams - Additional query parameters to append to the URL
           */
          <Button
            href={`${actionBasePath ? `${actionBasePath}/${dataId}` : dataId}${
              queryParams
                ? `?${new URLSearchParams(queryParams).toString()}`
                : ''
            }`}
            icon='book'
            colorClass='light'
            // activeColorClass='info'
            iconSize='fs-4'
            className='me-1'
            variant='outline'
          />
        )}

        {actions?.includes('edit') && (
          <Button
            href={`${actionBasePath}/${dataId}/edit${
              queryParams
                ? `?${new URLSearchParams(queryParams).toString()}`
                : ''
            }`}
            icon='pencil'
            colorClass='light'
            // activeColorClass='primary'
            iconSize='fs-4'
            className='me-1'
            variant='outline'
          />
        )}

        {actions?.includes('delete') && (
          <Button
            icon='trash'
            colorClass='light'
            // activeColorClass='danger'
            iconSize='fs-4'
            variant='outline'
          />
        )}
      </div>
    </td>
  );
};
