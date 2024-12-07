import {
  CARD_VARIANTS,
  CARD_BASE_STYLES,
  CARD_PADDING_STYLES,
} from '@/components/ui/core/card/constants';
import type { CardStyleProps } from '@/components/ui/core/card/types';

export const getCardStyles = ({ variant, padding, hover }: CardStyleProps) => {
  const variantStyles = CARD_VARIANTS[variant];

  return {
    base: CARD_BASE_STYLES,
    variant: variantStyles.base,
    padding: padding ? CARD_PADDING_STYLES : '',
    hover: hover ? variantStyles.hover : '',
  };
};
