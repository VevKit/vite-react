import type { LoaderVariant, LoaderSize } from './types';

type LoaderSizeStyles = {
  [K in LoaderSize]: {
    container: string;
    icon: string;
    text: string;
  };
};

export const LOADER_SIZES: LoaderSizeStyles = {
  sm: {
    container: 'h-4',
    icon: 'w-3 h-3',
    text: 'text-xs',
  },
  md: {
    container: 'h-5',
    icon: 'w-4 h-4',
    text: 'text-sm',
  },
  lg: {
    container: 'h-6',
    icon: 'w-5 h-5',
    text: 'text-base',
  },
} as const;

export const LOADER_BASE_STYLES = 'inline-flex items-center text-muted-foreground gap-2' as const;

// Icons following the foundation doc
export const LOADER_ICONS = {
  spinner: '⟳',
  processing: '⟲',
  installing: '⟱',
  dots: '...',
} as const;

export const LOADER_DEFAULT_LABELS = {
  spinner: 'Loading',
  processing: 'Processing',
  installing: 'Installing',
  dots: 'Loading',
} as const;
