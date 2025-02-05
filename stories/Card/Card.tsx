import React from 'react';
import { Card as CardWrapper, CardBody, CardHeader , CardTitle} from 'react-bootstrap'


export const Card = ({ children, className, title, description, toolbars }) => {
  const hasHeader = !!title || !!description || toolbars;

  return (
    <CardWrapper className={`app-container container-fluid ${className}`}>
      {hasHeader && (
        <CardHeader className='card-header border-0 pt-3'>
          <CardTitle className='card-title align-items-start flex-column'>
              {title && (
                <span className='card-label fw-bold fs-3 mb-1'>{title}</span>
              )}
              {description && (
                <span className='text-muted fw-semibold fs-7'>
                  {description}
                </span>
              )}
            </CardTitle>
          </CardHeader>
        )}
      <CardBody className='card-body py-5'>{children}</CardBody>
    </CardWrapper>
  );
};
