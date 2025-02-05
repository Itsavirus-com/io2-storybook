import React from 'react';

import { SidebarMenuItem } from './SidebarMenuItem';
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub';
import { SidebarMenuSeparator } from './SidebarMenuSeparator';

const SidebarMenuMain = () => {
  return (
    <>
      {/* Dashboard */}
      <SidebarMenuItem to='' icon='element-11' title='Dashboard' />
      <SidebarMenuItem to='' title='KVK' icon='shield' />
      {/* Data Validation */}
      <SidebarMenuSeparator title='Data Validation' />
      <SidebarMenuItem to='' title='KVK' icon='shield' />
      <SidebarMenuItem to='' title='Google' icon='google' />
      <SidebarMenuItem to='' title='Hierarchy' icon='abstract-26' />
      {/* End of Data Validation */}

      {/* Data Management */}
      <SidebarMenuSeparator title='Data Management' />
      <SidebarMenuItem to='' title='Payment' icon='credit-cart' />
      <SidebarMenuItemWithSub to='' title='Person' icon='profile-user'>
        <SidebarMenuItem to='' title='Persons' hasBullet />
        <SidebarMenuItem to='' title='Person Responsibilities' hasBullet />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub to='' title='Prices' icon='credit-cart'>
        <SidebarMenuItem to='' title='Price Configs' hasBullet />
        <SidebarMenuItem to='' title='Price Plans' hasBullet />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub to='' title='Products' icon='delivery-3'>
        <SidebarMenuItem to='' title='Products' hasBullet />
        <SidebarMenuItem to='' title='Price Configs' hasBullet />
      </SidebarMenuItemWithSub>
      <SidebarMenuItem to='' title='Users' icon='security-user' />
      {/* End of Data Management */}
    </>
  );
};

export { SidebarMenuMain };
