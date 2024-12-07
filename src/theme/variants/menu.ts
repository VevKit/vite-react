import {
  MENU_VARIANTS,
  MENU_ALIGNMENTS,
  MENU_BASE_STYLES,
} from '@/components/ui/core/menu/constants';
import type { MenuStyleProps } from '@/components/ui/core/menu/types';

export const getMenuStyles = ({ variant, align, isOpen, isNested }: MenuStyleProps) => {
  const variantStyles = MENU_VARIANTS[variant];

  return {
    base: MENU_BASE_STYLES,
    variant: variantStyles.container,
    align: MENU_ALIGNMENTS[align],
    state: isOpen ? 'animate-in fade-in-0 zoom-in-95' : 'animate-out fade-out-0 zoom-out-95',
    nested: isNested ? 'ml-2' : '',
  };
};
