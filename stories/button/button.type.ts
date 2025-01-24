export interface ButtonProps {
  icon?: string
  label?: string
  href?: string
  onClick?: () => void
  size?: 'xs' | 'sm' | 'lg'
  className?: string
  colorClass?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'dark' | 'light'
  variant?: 'solid' | 'light' | 'outline-dashed'
  activeColorClass?: string
  iconSize?: string
  extraProps?: Record<string, any>
  type?: 'button' | 'submit' | 'reset'
}
