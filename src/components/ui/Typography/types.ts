import type { ElementType } from 'react';

import type { ComponentBaseProps } from '@/types/components';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'overline';

export type TypographyAlign = 'left' | 'center' | 'right' | 'justify';

export type TypographyWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold';

export interface TypographyProps extends Omit<ComponentBaseProps<TypographyVariant>, 'size'> {
  align?: TypographyAlign;
  weight?: TypographyWeight;
  as?: ElementType;
  truncate?: boolean;
  color?: string;
}
