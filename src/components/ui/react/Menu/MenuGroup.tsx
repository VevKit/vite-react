import type { ReactElement } from 'react';

import { cn } from '@/utils/styles';

import type { MenuGroupProps } from './types';

const MenuGroup = ({ label, children, className }: MenuGroupProps): ReactElement => {
  return (
    <div className={cn('px-2 py-1.5', className)}>
      <div className="text-xs font-semibold text-muted-foreground">{label}</div>
      {children}
    </div>
  );
};

export default MenuGroup;
