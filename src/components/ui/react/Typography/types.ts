// src/components/ui/react/typography/types.ts
import { ComponentPropsWithoutRef, ElementType } from 'react';

import type { TypographyBaseProps, TypographyVariant } from '@/components/ui/core/typography/types';

export interface TypographyProps
  extends TypographyBaseProps,
    Omit<ComponentPropsWithoutRef<ElementType>, keyof TypographyBaseProps> {
  as?: ElementType;
}

export const defaultElements: Record<TypographyVariant, ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
};
