import {
  INPUT_VARIANTS,
  INPUT_SIZES,
  INPUT_BASE_STYLES,
} from '@/components/ui/core/input/constants';
import type { InputStyleProps } from '@/components/ui/core/input/types';

export const getInputStyles = ({ variant, size, isDisabled, isInvalid }: InputStyleProps) => {
  const variantStyles = INPUT_VARIANTS[variant];

  return {
    base: INPUT_BASE_STYLES,
    variant: variantStyles.base,
    size: INPUT_SIZES[size],
    state: isDisabled ? variantStyles.disabled : isInvalid ? variantStyles.invalid : '',
  };
};
