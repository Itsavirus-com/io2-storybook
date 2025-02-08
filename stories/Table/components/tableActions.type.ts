import { ButtonProps } from '../../Button/button.type';

export type Action = 'view' | 'edit' | 'delete';

export type TableActionsHeadProps = {
  actions?: Action[];
  customActions?: ButtonProps[];
};

export type TableActionsProps = TableActionsHeadProps & {
  actionBasePath?: string;
  dataId?: number;
  apiPath?: string;
  onDelete?: () => void;
  queryParams?: Record<string, string>;
};
