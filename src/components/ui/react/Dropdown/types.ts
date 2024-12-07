import type { ReactNode } from 'react';

import type { DropdownBaseProps } from '@/components/ui/core/dropdown/types';

export interface DropdownProps extends DropdownBaseProps {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
}

export interface DropdownItemProps {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}
