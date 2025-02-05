import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

import { KTIcon } from '../KTICon/KTIcon';

export type BreadcrumbItem<T = unknown> = {
  name: string;
  path: string;
  type: string;
  data?: T; // Optional additional data specific to each breadcrumb item
};

export type BreadcrumbProps<T = unknown> = {
  items: BreadcrumbItem<T> | BreadcrumbItem<T>[]; // Single item or array of items
  onBreadcrumbPress?: (item: BreadcrumbItem<T>) => void;
};

export const Breadcrumbs = <T,>({ items }: BreadcrumbProps<T>) => {
  if (!items || !Array.isArray(items)) return null;

  const handleBreadcrumbClick = () => {
    alert('redirect to the path');
  };

  const generateItemType = (index: string | null): string => {
    if (!index) return '';

    return index?.replace(/-\d+(-\d+)?$/, '');
  };

  const generateItemIcon = (index: string | null): string => {
    const itemType = generateItemType(index);

    switch (itemType) {
      case 'enterprise-root':
        return 'crown';
      case 'address':
      case 'enterprise-root-address':
      case 'business-partner-address':
        return 'map';
      case 'business-partner':
        return 'office-bag';
      default:
        return 'abstract-26';
    }
  };

  return (
    <Breadcrumb className='mb-7'>
      {items.map((item, index) => (
        <Breadcrumb.Item
          as='li'
          key={index}
          onClick={handleBreadcrumbClick}
          active={index === items.length - 1}
        >
          <KTIcon iconName={generateItemIcon(item.type)} className='me-1' />

          {item.name}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
