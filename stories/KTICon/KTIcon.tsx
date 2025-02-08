import { FC } from 'react'

import icons from './icons.type'
import React from 'react'

type Props = {
  className?: string
  iconType?: 'duotone' | 'solid' | 'outline'
  iconName: string
  role?: string
  onClick?: () => void
  color?: string
}

const KTIcon: FC<Props> = ({ className = '', iconType = 'outline', iconName, role, onClick, color = 'black' }) => {
  return (
    <i
      className={`ki-${iconType} ki-${iconName}${className && ' ' + className} text-${color}`}
      role={role}
      onClick={onClick}
      style={{ color: color }}
    >
      {iconType === 'duotone' &&
        [...Array(icons[iconName])].map((_e, i) => {
          return (
            <span
              key={`${iconType}-${iconName}-${className}-path-${i + 1}`}
              className={`path${i + 1}`}
            ></span>
          )
        })}
    </i>
  )
}

export { KTIcon }
