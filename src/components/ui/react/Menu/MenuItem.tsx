import type { ReactElement } from 'react';

import {
  MENU_ITEM_BASE_STYLES,
  MENU_ITEM_ICON_STYLES,
  MENU_ITEM_SHORTCUT_STYLES,
} from '@/components/ui/core/menu/constants';
import { cn } from '@/utils/styles';

import type { MenuItemProps } from './types';

const MenuItem = ({
  icon,
  label,
  shortcut,
  disabled = false,
  destructive = false,
  onClick,
  className,
}: MenuItemProps): ReactElement => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={cn(
        MENU_ITEM_BASE_STYLES,
        disabled && 'opacity-50 cursor-not-allowed',
        destructive && 'text-destructive',
        className
      )}
    >
      {icon && <span className={MENU_ITEM_ICON_STYLES}>{icon}</span>}
      <span>{label}</span>
      {shortcut && <span className={MENU_ITEM_SHORTCUT_STYLES}>{shortcut}</span>}
    </div>
  );
};

export default MenuItem;
