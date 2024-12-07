import type { ModalSize } from './types';

type ModalSizeStyles = {
  [K in ModalSize]: string;
};

export const MODAL_SIZES: ModalSizeStyles = {
  sm: 'max-w-sm',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  full: 'max-w-[calc(100%-2rem)]',
} as const;

export const MODAL_BASE_STYLES = {
  overlay: 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50',
  container: 'fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]',
  content: 'w-full rounded-lg bg-background shadow-lg',
  fullScreen: 'fixed inset-4',
} as const;
