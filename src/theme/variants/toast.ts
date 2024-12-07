import {
  TOAST_VARIANTS,
  TOAST_BASE_STYLES,
  TOAST_ANIMATIONS,
} from '@/components/ui/core/toast/constants';
import type { ToastStyleProps } from '@/components/ui/core/toast/types';

export const getToastStyles = ({ variant, position, visible }: ToastStyleProps) => {
  const variantStyles = TOAST_VARIANTS[variant];
  const animationStyles = TOAST_ANIMATIONS[position];

  return {
    base: TOAST_BASE_STYLES,
    variant: variantStyles.container,
    icon: variantStyles.icon,
    title: variantStyles.title,
    state: visible ? animationStyles.enter : animationStyles.exit,
  };
};
