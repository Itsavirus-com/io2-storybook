// import { KTIcon } from '@/components/kt-icon/kt-icon'
// import { Link } from '@/navigation'

import React from 'react'
import { ButtonProps } from './button.type'
import { KTIcon } from '../kt-icon/KTIcon'
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
  activeColorClass = 'light-primary',
  iconSize = 'fs-2 text-white',
  extraProps = {},
  type = 'button',
}) => {
  const getBaseClasses = () => {
    const classes = ['btn']
    
    // Size
    classes.push(`btn-${size}`)
    
    // Style variant
    if (variant === 'light') {
      classes.push(`btn-light-${colorClass}`)
    } else if (variant === 'outline-dashed') {
      classes.push('btn-outline btn-outline-dashed', `btn-outline-${colorClass}`)
    } else {
      classes.push(`btn-${colorClass}`)
    }
    
    // Icon only vs icon+label styling
    classes.push(!label ? 'btn-icon' : 'd-flex align-items-center')
    
    // Active state
    classes.push(`btn-active-${activeColorClass}`)
    
    // Custom classes
    if (className) {
      classes.push(className)
    }

    return classes.join(' ')
  }

  return (
    <BootstrapButton
      onClick={onClick}
      type={!href ? type : undefined}
      className={getBaseClasses()}
      {...extraProps}
    >
      {label && <span className={icon ? "ms-2 text-white" : "text-light"}>{label}</span>}
      {icon && <KTIcon iconName={icon} className={iconSize} />}
    </BootstrapButton>
  )
}
