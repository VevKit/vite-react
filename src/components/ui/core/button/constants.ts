// src/components/ui/core/button/constants.ts

import type { ButtonVariant, ButtonSize } from './types';

type ButtonVariantStyles = {
  [K in ButtonVariant]: {
    base: string;
    disabled: string;
    loading: string;
  };
};

type ButtonSizeStyles = {
  [K in ButtonSize]: string;
};

export const BUTTON_VARIANTS: ButtonVariantStyles = {
  primary: {
    base: 'bg-primary text-primary-foreground hover:bg-primary/90',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait',
  },
  secondary: {
    base: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait',
  },
  ghost: {
    base: 'hover:bg-accent hover:text-accent-foreground',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait',
  },
  destructive: {
    base: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    disabled: 'opacity-50 cursor-not-allowed',
    loading: 'cursor-wait',
  },
  link: {
    base: 'text-primary underline-offset-4 hover:underline',
    disabled: 'opacity-50 cursor-not-allowed no-underline',
    loading: 'cursor-wait',
  },
} as const;

export const BUTTON_SIZES: ButtonSizeStyles = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 py-2',
  lg: 'h-11 px-8 text-lg',
} as const;
