import { ReactNode } from 'react';

import { ButtonProps } from '../Button/button.type';

import { TableActionsProps } from './components/tableActions.type';

export type TableColumn<TableValues> = {
  id: string;
  title: ReactNode;
  headClassName?: string;
  bodyClassName?: string;
  render?: (value: TableValues) => ReactNode;
};

export type TableProps<TableValues> = {
  title?: string;
  description?: string;
  columns: TableColumn<TableValues>[];
  toolbars?: ButtonProps[];
  filters?: ReactNode;
  defaultFilters?: Record<string, any>;
  apiPath?: string;
  data?: TableValues[];
  className?: string;
} & TableActionsProps;
