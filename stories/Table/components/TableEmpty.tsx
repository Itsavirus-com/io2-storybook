import React from 'react';
import { KTIcon } from '../../KTICon/KTIcon';

import { TableEmptyProps } from './tableEmpty.type';

export const TableEmpty = ({
  visible,
  hasActions,
  columnLength,
}: TableEmptyProps) => {
  if (!visible) return null;

  const colSpan = hasActions ? columnLength + 1 : columnLength;

  return (
    <tr>
      <td colSpan={colSpan} className='text-center'>
        <div className='pt-5 pb-3'>
          <div className='d-flex justify-content-center align-items-center'>
            <KTIcon
              iconName='information-4 me-2'
              iconType='solid'
              className='fs-1'
            />
            <span className='fs-3 fw-semibold'>table empty title</span>
          </div>
          <p className='text-gray-600 mt-2 mb-0 fs-5'>
            table empty description
          </p>
        </div>
      </td>
    </tr>
  );
};
