import clsx from 'clsx';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { Form, FormControlProps } from 'react-bootstrap';
import Flatpickr from 'react-flatpickr';
import { useController, useFormContext } from 'react-hook-form';

type DateTimePickerProps = FormControlProps & {
  label?: string;
  name: string;
  containerClass?: string;
  step?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  options?: Object;
  isRequired?: boolean;
  enableTime?: boolean;
  dateFormat?: string;
  customSubmitDateFormat?: string;
  onChange?: ([value]: any) => void;
};

export const DateTimePicker = (props: DateTimePickerProps) => {
  const {
    label,
    name,
    containerClass,
    className,
    children,
    step,
    isRequired,
    enableTime,
    dateFormat = enableTime ? 'Y-m-d H:i' : 'Y-m-d',
    customSubmitDateFormat,
  } = props;

  const { control, setValue } = useFormContext();
  const {
    field,
    fieldState: { error, invalid },
  } = useController({ control, name });
  const [datetime, setDatetime] = useState<Date | null>(null);

  return (
    <Form.Group className={containerClass}>
      {label && (
        <Form.Label className={clsx('fw-bold', { required: isRequired })}>
          {label}
        </Form.Label>
      )}
      <Form.Control isInvalid={invalid} type='hidden' />
      <Flatpickr
        id={name}
        step={step}
        className={clsx('form-control', { 'is-invalid': invalid })}
        disabled={props.disabled}
        value={datetime || undefined}
        onChange={([date]: any) => {
          const formattedDate = customSubmitDateFormat
            ? format(date, customSubmitDateFormat)
            : format(date, 'yyyy-MM-dd HH:mm:ss');

          setDatetime(date);
          setValue(name, formattedDate);
          field.onChange(formattedDate);

          if (props.onChange) props.onChange([date]);
        }}
        autoComplete={name}
        data-test-id={name}
        options={{
          enableTime: enableTime,
          dateFormat: dateFormat,
          ...props.options,
        }}
      >
        {children}
      </Flatpickr>
      {invalid && error && (
        <Form.Control.Feedback type='invalid'>
          {error.message}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  );
};
