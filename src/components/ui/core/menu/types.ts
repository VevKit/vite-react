export type MenuVariant = 'default' | 'bordered';
export type MenuAlignment = 'start' | 'center' | 'end';

export interface MenuStyleProps {
  variant: MenuVariant;
  align: MenuAlignment;
  isOpen: boolean;
  isNested?: boolean;
}

export interface MenuBaseProps {
  variant?: MenuVariant;
  align?: MenuAlignment;
  label: string;
  icon?: string;
  isNested?: boolean;
}

export interface MenuItemBaseProps {
  icon?: string;
  label: string;
  shortcut?: string;
  disabled?: boolean;
  destructive?: boolean;
}
