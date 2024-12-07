import type { InputVariant, InputSize } from './types';

type InputVariantStyles = {
  [K in InputVariant]: {
    base: string;
    disabled: string;
    invalid: string;
  };
};

type InputSizeStyles = {
  [K in InputSize]: string;
};

export const INPUT_VARIANTS: InputVariantStyles = {
  outline: {
    base: 'border border-input bg-background hover:border-accent-foreground focus-visible:ring-ring',
    disabled: 'opacity-50 cursor-not-allowed',
    invalid: 'border-destructive focus-visible:ring-destructive/50',
  },
  filled: {
    base: 'border-2 border-transparent bg-muted hover:bg-muted/80 focus-visible:ring-ring',
    disabled: 'opacity-50 cursor-not-allowed',
    invalid: 'bg-destructive/10 focus-visible:ring-destructive/50',
  },
  flushed: {
    base: 'rounded-none border-b border-input hover:border-accent-foreground focus-visible:border-primary',
    disabled: 'opacity-50 cursor-not-allowed',
    invalid: 'border-destructive focus-visible:border-destructive',
  },
  unstyled: {
    base: 'border-none bg-transparent hover:bg-transparent',
    disabled: 'opacity-50 cursor-not-allowed',
    invalid: 'text-destructive',
  },
} as const;

export const INPUT_SIZES: InputSizeStyles = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 py-2',
  lg: 'h-12 px-6 text-lg',
} as const;

export const INPUT_BASE_STYLES =
  'w-full rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2' as const;
