import { LOADER_SIZES, LOADER_BASE_STYLES } from '@/components/ui/core/loader/constants';
import type { LoaderStyleProps } from '@/components/ui/core/loader/types';

export const getLoaderStyles = ({ variant, size }: LoaderStyleProps) => {
  const sizeStyles = LOADER_SIZES[size];

  return {
    base: LOADER_BASE_STYLES,
    container: sizeStyles.container,
    icon: sizeStyles.icon,
    text: sizeStyles.text,
    animation:
      variant === 'spinner'
        ? 'animate-spin'
        : variant === 'dots'
          ? 'animate-pulse'
          : 'animate-bounce',
  };
};
