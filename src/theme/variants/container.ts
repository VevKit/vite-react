import {
  CONTAINER_SIZES,
  CONTAINER_BASE_STYLES,
  CONTAINER_PADDING_STYLES,
} from '@/components/ui/core/container/constants';
import type { ContainerStyleProps } from '@/components/ui/core/container/types';

export const getContainerStyles = ({ size, maxWidth, padding }: ContainerStyleProps) => {
  return {
    base: CONTAINER_BASE_STYLES,
    size: maxWidth ? CONTAINER_SIZES[size] : '',
    padding: padding ? CONTAINER_PADDING_STYLES : '',
  };
};
