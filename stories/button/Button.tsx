// import { KTIcon } from '@/components/kt-icon/kt-icon'
// import { Link } from '@/navigation'

import React from 'react'
import { ButtonProps } from './button.type'
import { KTIcon } from '../KTICon/KTIcon'
import { Button as BootstrapButton } from 'react-bootstrap'

export const Button: React.FC<ButtonProps> = ({
  icon,
  label,
  href,
  onClick,
  size = 'sm',
  className = '',
  colorClass = 'primary',
  variant = 'solid',
  activeColorClass,
  iconSize,
  extraProps = {},
  type = 'button',
  disabled = false,
}) => {
  // Determine button and icon classes based on variant
  const getButtonClasses = () => {
    const baseClasses = `btn btn-${size}`
    
    if (variant === 'outline') {
      return `${baseClasses} btn-outline btn-outline-${colorClass} ${className}`
    }
    
    // solid variant (default)
    return `${baseClasses} btn-${colorClass} ${className}`
  }

  const getIconClasses = () => {
    if (variant === 'outline') {
      return `fs-2 text-${colorClass}`
    }
    
    return iconSize || 'fs-2 text-white'
  }

  const getLabelClasses = () => {
    if (variant === 'outline') {
      return `${icon ? 'ms-2' : ''} text-${colorClass}`
    }
    return `${icon ? 'ms-2' : ''} text-white`
  }

  return (
    <BootstrapButton
      onClick={onClick}
      type={!href ? type : undefined}
      variant={variant === 'solid' ? colorClass : undefined}
      className={getButtonClasses()}
      disabled={disabled}
      {...extraProps}
    >
      {icon && <KTIcon iconName={icon} className={getIconClasses()} />}
      {label && <span className={getLabelClasses()}>{label}</span>}
    </BootstrapButton>
  )
}
