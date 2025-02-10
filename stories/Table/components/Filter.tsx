import React from 'react';
import { Button } from 'react-bootstrap';
import { FormProvider, useForm } from 'react-hook-form';

import { KTIcon } from '../../KTICon/KTIcon';
import { FilterProps } from './filter.type';

export const Filter = ({ children, onFilter }: FilterProps) => {
  const methods = useForm({ defaultValues: {} });

  return (
    <FormProvider {...methods}>
      <form
        className={!children ? 'd-none' : ''}
        onSubmit={onFilter && methods.handleSubmit(onFilter)}
        onReset={() => onFilter && onFilter({})}
      >
        <KTIcon iconName='category' className='ms-2' />

        <div
          className='menu menu-sub menu-sub-dropdown w-250px w-md-300px'
          data-kt-menu='true'
        >
          <div className='px-7 py-5'>
            <div className='fs-5 text-gray-900 fw-bolder'>filter options</div>
          </div>

          <div className='separator border-gray-200'></div>

          <div className='px-7 py-5'>
            {children}

            <div className='d-flex justify-content-end'>
              <KTIcon iconName='cross-square' className='me-2' />

              <Button type='submit' />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
