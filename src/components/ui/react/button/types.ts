// src/components/ui/react/button/types.ts

import type { ComponentPropsWithoutRef } from 'react';

import type { ButtonBaseProps } from '@/components/ui/core/button/types';

export interface ButtonProps
  extends ButtonBaseProps,
    Omit<ComponentPropsWithoutRef<'button'>, keyof ButtonBaseProps> {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
