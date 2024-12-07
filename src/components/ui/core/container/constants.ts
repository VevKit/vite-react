import type { ContainerSize } from './types';

type ContainerSizeStyles = {
  [K in ContainerSize]: string;
};

export const CONTAINER_SIZES: ContainerSizeStyles = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  full: 'max-w-full',
} as const;

export const CONTAINER_BASE_STYLES = 'w-full mx-auto' as const;
export const CONTAINER_PADDING_STYLES = 'px-4 sm:px-6 lg:px-8' as const;
