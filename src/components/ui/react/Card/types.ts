import type { ComponentPropsWithoutRef } from 'react';

import type { CardBaseProps } from '@/components/ui/core/card/types';

export interface CardProps
  extends CardBaseProps,
    Omit<ComponentPropsWithoutRef<'div'>, keyof CardBaseProps> {
  children?: React.ReactNode;
  className?: string;
}
