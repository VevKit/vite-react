import type { ReactElement } from 'react';

import { cn } from '@/utils/styles';

import type { DropdownItemProps } from './types';

const DropdownItem = ({
  children,
  onClick,
  disabled = false,
  className,
}: DropdownItemProps): ReactElement => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
        'hover:bg-accent hover:text-accent-foreground',
        'focus:bg-accent focus:text-accent-foreground',
        disabled && 'opacity-50 cursor-not-allowed',
        className
      )}
    >
      {children}
    </div>
  );
};

export default DropdownItem;
