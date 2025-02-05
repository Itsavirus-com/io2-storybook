import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';

import { KTIcon } from '../../KTICon/KTIcon';

type Props = {
  to: string;
  title: string;
  icon?: string;
  fontIcon?: string;
  hasBullet?: boolean;
  children?: ReactNode;
};

const SidebarMenuItemWithSub: React.FC<Props> = ({
  to,
  children,
  title,
  icon,
  hasBullet,
}) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={clsx('menu-item', { 'here show': expanded }, 'menu-accordion')}
      data-kt-menu-trigger='click'
      onClick={toggleExpanded}
    >
      <span className='menu-link'>
        {hasBullet && (
          <span className='menu-bullet'>
            <span className='bullet bullet-dot'></span>
          </span>
        )}

        {icon && (
          <span className='menu-icon'>
            <KTIcon iconName={icon} className='fs-2' />
          </span>
        )}

        <span className='menu-title'>{title}</span>
        <span className='menu-arrow'></span>
      </span>
      <div
        className={clsx('menu-sub menu-sub-accordion', {
          'menu-active-bg': expanded,
          show: expanded,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export { SidebarMenuItemWithSub };
