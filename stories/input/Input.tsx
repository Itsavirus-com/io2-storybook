import clsx from 'clsx'
import { Form, FormControlProps } from 'react-bootstrap'
import { useController, useFormContext } from 'react-hook-form'
import React from 'react'
import { InputProps } from './input.type'

export const Input = (props: InputProps) => {
  const { label, name, containerClass, children, step, isRequired, inputType, ...otherProps } = props

  const { register, control } = useFormContext()
  const {
    fieldState: { invalid, error },
  } = useController({ control, name })

  return (
    <Form.Group className={containerClass}>
      {label && (
        <Form.Label className={clsx('fw-bold', { required: isRequired })}>{label}</Form.Label>
      )}
      <Form.Control
        id={name}
        as={inputType as any}
        isInvalid={invalid}
        step={step}
        {...register(name)}
        {...otherProps}
        autoComplete={name}
        data-test-id={name}
        className={clsx('form-control', { 'is-invalid': invalid })}
      >
        {children}
      </Form.Control>

      {error && <Form.Control.Feedback type="invalid">{error.message}</Form.Control.Feedback>}
    </Form.Group>
  )
}
