import React from 'react';

import { StaticTableBodyProps } from './staticTableBody.type';
import { TableActions, TableActionsHead } from './TableActions';
import { TableEmpty } from './TableEmpty';

export const StaticTableBody = <TableValues extends Record<string, any>>(
  props: StaticTableBodyProps<TableValues>
) => {
  const { columns, data, actions, customActions, actionBasePath } = props;
  const hasActions = !!actions?.length || !!customActions?.length;

  if (!columns?.length) return null;

  return (
    <div className='table-responsive mt-4'>
      <table className='table table-row-dashed table-row-gray-400 align-middle gs-0 gy-4'>
        <thead>
          <tr className='fw-bold text-gray-500'>
            {columns.map((column) => (
              <th key={column.id} className={column.headClassName}>
                {column.title}
              </th>
            ))}

            <TableActionsHead actions={actions} customActions={customActions} />
          </tr>
        </thead>

        <tbody>
          {!!data?.length &&
            data?.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => (
                  <td key={column.id} className={column.bodyClassName}>
                    {column.render ? column.render(row) : row[column.id]}
                  </td>
                ))}

                <TableActions
                  actions={actions}
                  customActions={customActions}
                  actionBasePath={actionBasePath}
                  dataId={row.id}
                />
              </tr>
            ))}

          <TableEmpty
            visible={!data?.length}
            hasActions={hasActions}
            columnLength={columns.length}
          />
        </tbody>
      </table>
    </div>
  );
};
