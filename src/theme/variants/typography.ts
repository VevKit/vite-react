// src/theme/variants/typography.ts

import {
  TYPOGRAPHY_VARIANTS,
  TYPOGRAPHY_ALIGNS,
  TYPOGRAPHY_WEIGHTS,
} from '@/components/ui/core/typography/constants';
import type { TypographyStyleProps } from '@/components/ui/core/typography/types';

export const getTypographyStyles = ({ variant, align, weight, color }: TypographyStyleProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const variantStyle = TYPOGRAPHY_VARIANTS[variant];
  const alignStyle = TYPOGRAPHY_ALIGNS[align];
  const weightStyle = TYPOGRAPHY_WEIGHTS[weight];

  return {
    base: baseStyles,
    variant: variantStyle,
    align: alignStyle,
    weight: weightStyle,
    color,
  };
};
