import { MODAL_SIZES, MODAL_BASE_STYLES } from '@/components/ui/core/modal/constants';
import type { ModalStyleProps } from '@/components/ui/core/modal/types';

export const getModalStyles = ({ size, fullScreen, isOpen }: ModalStyleProps) => {
  return {
    overlay: {
      base: MODAL_BASE_STYLES.overlay,
      state: isOpen ? 'animate-in fade-in-0' : 'animate-out fade-out-0',
    },
    container: {
      base: MODAL_BASE_STYLES.container,
      size: fullScreen ? MODAL_BASE_STYLES.fullScreen : MODAL_SIZES[size],
      state: isOpen ? 'animate-in zoom-in-95 fade-in-0' : 'animate-out zoom-out-95 fade-out-0',
    },
    content: MODAL_BASE_STYLES.content,
  };
};
