import type { CardVariant } from './types';

type CardVariantStyles = {
  [K in CardVariant]: {
    base: string;
    hover: string;
  };
};

export const CARD_VARIANTS: CardVariantStyles = {
  elevated: {
    base: 'bg-card shadow-sm',
    hover: 'hover:shadow-md',
  },
  outlined: {
    base: 'border border-border bg-background',
    hover: 'hover:border-border-hover',
  },
  filled: {
    base: 'bg-muted',
    hover: 'hover:bg-muted/90',
  },
} as const;

export const CARD_BASE_STYLES = 'rounded-lg transition-shadow' as const;
export const CARD_PADDING_STYLES = 'p-6' as const;
