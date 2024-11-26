// src/theme/variants/button.ts

import { BUTTON_VARIANTS, BUTTON_SIZES } from '@/components/ui/core/button/constants';
import type { ButtonStyleProps } from '@/components/ui/core/button/types';

export const getButtonStyles = ({ variant, size, isDisabled, isLoading }: ButtonStyleProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const variantStyles = BUTTON_VARIANTS[variant];
  const sizeStyles = BUTTON_SIZES[size];

  return {
    base: baseStyles,
    variant: variantStyles.base,
    size: sizeStyles,
    state: isDisabled ? variantStyles.disabled : isLoading ? variantStyles.loading : '',
  };
};
