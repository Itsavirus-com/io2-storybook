import React from 'react';
import { Toast as RBToast, ToastContainer } from 'react-bootstrap';

import { KTIcon } from '../KTICon/KTIcon';

type AlertProps = {
  variant?: 'success' | 'danger' | 'warning' | 'info';
  title?: string;
  body?: string;
  visible?: boolean;

  readonly displayTitle?: string;
  readonly icon?: string;
};

export const Alert = ({
  variant,
  title,
  body,
  visible,
  displayTitle,
  icon,
}: AlertProps) => {
  const getIcon = (variant?: string) => {
    switch (variant) {
      case 'warning':
        return 'information';
      case 'danger':
        return 'cross-circle';
      case 'info':
        return 'information-3';
      case 'success':
      default:
        return 'verify';
    }
  };

  return (
    <ToastContainer
      containerPosition='fixed'
      position='top-end'
      className='p-3 h-100'
    >
      <RBToast
        bg={variant}
        autohide
        delay={2500}
        show={visible}
        onClose={() => {}}
      >
        <RBToast.Body className='text-white p-4'>
          <div className='d-flex align-items-center'>
            <KTIcon
              className='fs-2'
              iconName={getIcon(variant)}
              onClick={() => {}}
            />
            <strong className='ms-2 me-auto text-capitalize fs-7'>
              {displayTitle}
            </strong>
            <KTIcon className='fs-2' iconName='cross' onClick={() => {}} />
          </div>

          <div className='ms-1 mt-1 fs-8'>{body}</div>
        </RBToast.Body>
      </RBToast>
    </ToastContainer>
  );
};
