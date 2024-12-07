import type { ToastVariant, ToastPosition } from './types';

type ToastVariantStyles = {
  [K in ToastVariant]: {
    container: string;
    icon: string;
    title: string;
  };
};

type ToastPositionStyles = {
  [K in ToastPosition]: string;
};

export const TOAST_VARIANTS: ToastVariantStyles = {
  error: {
    container: 'border-destructive bg-destructive/10 text-destructive',
    icon: 'text-destructive',
    title: 'text-destructive font-medium',
  },
  success: {
    container: 'border-green-500 bg-green-500/10 text-green-600',
    icon: 'text-green-500',
    title: 'text-green-600 font-medium',
  },
  warning: {
    container: 'border-yellow-500 bg-yellow-500/10 text-yellow-600',
    icon: 'text-yellow-500',
    title: 'text-yellow-600 font-medium',
  },
  loading: {
    container: 'border-primary bg-primary/10 text-primary',
    icon: 'text-primary',
    title: 'text-primary font-medium',
  },
} as const;

export const TOAST_POSITIONS: ToastPositionStyles = {
  'top-right': 'top-4 right-4',
  'top-left': 'top-4 left-4',
  'bottom-right': 'bottom-4 right-4',
  'bottom-left': 'bottom-4 left-4',
} as const;

export const TOAST_BASE_STYLES =
  'relative rounded-lg border p-4 shadow-md min-w-[300px] max-w-[500px]' as const;
