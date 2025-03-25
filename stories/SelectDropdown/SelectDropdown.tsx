import React from 'react';

import clsx from 'clsx';
import { Form } from 'react-bootstrap';
import { useController, useFormContext } from 'react-hook-form';
import Select from 'react-select';

type SelectProps<OptionValue> = {
  label?: string;
  name: string;
  filterName?: string;
  containerClass?: string;
  options?: OptionValue[];
  option: {
    label: (value: OptionValue) => string | number;
    value: (value: OptionValue) => string | number;
  };
  filter?: Record<string, any>;
  onChange?: (
    value: string | number | (string | number)[] | null,
    optionData?: OptionValue | OptionValue[] | null
  ) => void;
  isHidden?: boolean;
  isRequired?: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  isMulti?: boolean;
  placeholder?: string;
};

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
    isMulti = false,
    placeholder = 'Select...',
  } = props;

  const { control } = useFormContext();
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ control, name });

  const selectOptions = providedOptions.map((item) => ({
    value: String(option.value(item)),
    label: `${option.label(item)}`,
    data: item,
  }));

  const getValue = () => {
    if (isMulti) {
      if (!field.value) return [];
      const values = Array.isArray(field.value) ? field.value : [field.value];
      return selectOptions.filter((option) => values.includes(option.value));
    }
    return selectOptions.find((opt) => opt.value === field.value) || null;
  };

  if (isHidden) {
    return null;
  }

  return (
    <Form.Group className={containerClass}>
      {label && (
        <Form.Label className={clsx('fw-bold', { required: isRequired })}>
          {label}
        </Form.Label>
      )}
      <Select
        value={getValue()}
        options={selectOptions}
        onChange={(selectedOption) => {
          if (isMulti) {
            const values = selectedOption
              ? (selectedOption as any[]).map((option) => option.value)
              : [];
            field.onChange(values);
            onChange?.(
              values,
              selectedOption
                ? (selectedOption as any[]).map((option) => option.data)
                : null
            );
          } else {
            const value = (selectedOption as any)?.value ?? '';
            field.onChange(value);
            onChange?.(value, (selectedOption as any)?.data ?? null);
          }
        }}
        isMulti={isMulti}
        isLoading={isLoading}
        className='react-select-container'
        classNamePrefix='react-select'
        placeholder={placeholder}
        loadingMessage={() => 'Loading more...'}
        isDisabled={disabled}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            borderColor: invalid
              ? 'var(--bs-form-invalid-border-color)'
              : baseStyles.borderColor,
            '&:hover': {
              borderColor: invalid
                ? 'var(--bs-form-invalid-border-color)'
                : baseStyles.borderColor,
            },
          }),
        }}
      />
      {invalid && error && (
        <div className='invalid-feedback d-block'>{error.message}</div>
      )}
    </Form.Group>
  );
};
