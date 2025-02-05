import clsx from 'clsx';
import React from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';

import { ConfirmationModalProps } from './confirmationModal.type';

export const ConfirmationModal = (props: ConfirmationModalProps) => {
  const {
    title,
    body,
    visible,
    onCancel,
    onConfirm,
    cancelLabel = 'Cancel',
    confirmLabel = 'Yes Continue',
    variant = 'success',
    isLoading,
  } = props;

  return (
    <Modal show={visible} onHide={onCancel} centered backdrop='static'>
      <Modal.Header
        onHide={onCancel}
        className={clsx('text-white', `bg-${variant}`)}
      >
        <h4 className='modal-title mt-0'>
          <i className='mdi mdi-exclamation-thick me-2' />
          {title}
        </h4>
      </Modal.Header>
      <Modal.Body>
        <h5>{body}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant={variant} onClick={onConfirm}>
          {isLoading ? (
            <>
              {' '}
              <Spinner size='sm' /> Loading...
            </>
          ) : (
            confirmLabel
          )}
        </Button>
        <Button variant='light' onClick={onCancel}>
          {cancelLabel}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
