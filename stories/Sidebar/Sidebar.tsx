import React from 'react';
import { SidebarLogo } from './SidebarLogo';
import { SidebarMenu } from './SidebarMenu/SidebarMenu';

const Sidebar = () => {
  return (
    <div id='kt_app_sidebar' className='app-sidebar flex-column'>
      <SidebarLogo />
      <SidebarMenu />
    </div>
  );
};

export { Sidebar };
