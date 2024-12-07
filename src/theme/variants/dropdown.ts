import {
  DROPDOWN_POSITIONS,
  DROPDOWN_ALIGNMENTS,
  DROPDOWN_BASE_STYLES,
} from '@/components/ui/core/dropdown/constants';
import type { DropdownStyleProps } from '@/components/ui/core/dropdown/types';

export const getDropdownStyles = ({ position, align, fullWidth, isOpen }: DropdownStyleProps) => {
  const positionStyles = DROPDOWN_POSITIONS[position];

  return {
    base: DROPDOWN_BASE_STYLES,
    container: positionStyles.container,
    align: DROPDOWN_ALIGNMENTS[align],
    content: positionStyles.content,
    fullWidth: fullWidth ? 'w-full' : '',
    state: isOpen ? 'visible opacity-100' : 'invisible opacity-0',
  };
};
