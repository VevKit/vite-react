// src/components/ui/core/modal/constants.ts
import type { ModalVariants } from './types';

type ModalSizeStyles = {
  [K in ModalVariants['size']]: string;
};

type ModalPositionStyles = {
  [K in ModalVariants['position']]: string;
};

export const MODAL_SIZES: ModalSizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
  full: 'max-w-full mx-4',
} as const;

export const MODAL_POSITIONS: ModalPositionStyles = {
  center: 'left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]',
  top: 'left-[50%] top-4 translate-x-[-50%]',
  right: 'right-4 top-[50%] translate-y-[-50%]',
  bottom: 'left-[50%] bottom-4 translate-x-[-50%]',
  left: 'left-4 top-[50%] translate-y-[-50%]',
} as const;
