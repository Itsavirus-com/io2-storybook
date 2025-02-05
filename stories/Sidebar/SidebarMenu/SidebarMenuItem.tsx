import clsx from 'clsx';
import React, { FC, ReactNode, useState } from 'react';

import { KTIcon } from '../../KTICon/KTIcon';

import { checkIsActive } from './sidebar.helper';

type Props = {
  to: string;
  title: string;
  icon?: string;
  fontIcon?: string;
  hasBullet?: boolean;
  children?: ReactNode;
};

const SidebarMenuItem: FC<Props> = ({
  children,
  to,
  title,
  icon,
  hasBullet = false,
}) => {
  const [pathname] = useState('');
  const isActive = checkIsActive(pathname, to);

  return (
    <div className='menu-item'>
      <a
        className={clsx('menu-link without-sub', { active: isActive })}
        href={to}
      >
        {hasBullet && (
          <span className='menu-bullet'>
            <span className='bullet bullet-dot'></span>
          </span>
        )}

        {icon && (
          <span className='menu-icon'>
            {' '}
            <KTIcon iconName={icon} className='fs-2' />
          </span>
        )}

        <span className='menu-title'>{title}</span>
      </a>
      {children}
    </div>
  );
};

export { SidebarMenuItem };
