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
    base: 'bg-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600',
    disabled: 'opacity-50 cursor-not-allowed',
    invalid:
      'outline outline-1 -outline-offset-1 outline-destructive focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-destructive',
  },
  filled: {
    base: 'outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 bg-muted',
    disabled: 'opacity-50 cursor-not-allowed',
    invalid:
      'outline outline-1 -outline-offset-1 outline-destructive focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-destructive',
  },
  flushed: {
    base: 'rounded-none border-b border-input focus-visible:border-primary',
    disabled: 'opacity-50 cursor-not-allowed',
    invalid:
      'outline outline-1 -outline-offset-1 outline-destructive focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-destructive',
  },
  unstyled: {
    base: 'border-none bg-transparent',
    disabled: 'opacity-50 cursor-not-allowed',
    invalid:
      'outline outline-1 -outline-offset-1 outline-destructive focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-destructive',
  },
} as const;

export const INPUT_SIZES: InputSizeStyles = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 py-2',
  lg: 'h-12 px-6 text-lg',
} as const;

export const INPUT_BASE_STYLES =
  'w-full rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2' as const;
