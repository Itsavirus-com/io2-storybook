import React from 'react'

import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useController, useFormContext } from 'react-hook-form'
import Select from 'react-select'

type SelectProps<OptionValue> = {
  label?: string
  name: string
  filterName?: string
  containerClass?: string
  options?: OptionValue[]
  option: {
    label: (value: OptionValue) => string | number
    value: (value: OptionValue) => string | number
  }
  filter?: Record<string, any>
  onChange?: (value: string | number | null, optionData?: OptionValue | null) => void
  isHidden?: boolean
  isRequired?: boolean
  disabled?: boolean
  isLoading?: boolean 
}

export const SelectDropdown = <OptionValue extends Record<string, any>>(
  props: SelectProps<OptionValue>
) => {
  const {
    label,
    name,
    containerClass,
    options: providedOptions = [],
    option,
    isHidden,
    isRequired,
    onChange,
    disabled,
    isLoading,
  } = props

  const { control } = useFormContext()
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ control, name })

  const selectOptions = [
    { value: 0, label: 'Select one', data: null },
    ...providedOptions.map(item => ({
      value: String(option.value(item)),
      label: `${item.id} | ${option.label(item)}`,
      data: item,
    })),
  ]

  const selectedOption = field.value
    ? selectOptions.find(opt => opt.value === field.value)
    : null

  if (isHidden && providedOptions.length === 0) {
    return null
  }
  return (
    <Form.Group className={containerClass}>
      <Form.Label className={clsx('fw-bold', { required: isRequired })}>{label}</Form.Label>
      {providedOptions.length === 0 ? (
        <Form.Control disabled placeholder="Loading..." />
      ) : (
        <Select
          value={selectedOption}
          options={selectOptions}
          onChange={option => {
            const value = option?.value ?? ''
            field.onChange(value as string)
            onChange?.(value, option?.data ?? null)
          }}
          isLoading={isLoading}
          className="react-select-container"
          styles={{
            control: baseStyles => ({
              ...baseStyles,
              borderColor: invalid ? 'var(--bs-form-invalid-border-color)' : baseStyles.borderColor,
              '&:hover': {
                borderColor: invalid
                  ? 'var(--bs-form-invalid-border-color)'
                  : baseStyles.borderColor,
              },
            }),
          }}
          classNamePrefix="react-select"
          placeholder="Select one"
          loadingMessage={() => 'Loading more...'}
          isDisabled={disabled}
        />
      )}
      {invalid && error && <div className="invalid-feedback d-block">{error.message}</div>}
    </Form.Group>
  )
}
