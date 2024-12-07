import type { ReactNode } from 'react';

import type { MenuBaseProps, MenuItemBaseProps } from '@/components/ui/core/menu/types';

export interface MenuProps extends MenuBaseProps {
  children: ReactNode;
  className?: string;
}

export interface MenuItemProps extends MenuItemBaseProps {
  onClick?: () => void;
  className?: string;
}

export interface MenuGroupProps {
  label: string;
  children: ReactNode;
  className?: string;
}
