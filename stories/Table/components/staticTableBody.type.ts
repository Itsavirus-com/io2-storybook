import { TableColumn } from '../table.type';
import { TableActionsProps } from './tableActions.type';

export type StaticTableBodyProps<TableValues> = {
  columns: TableColumn<TableValues>[];
  data: TableValues[];
} & TableActionsProps;
