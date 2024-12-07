import { TOAST_VARIANTS, TOAST_BASE_STYLES } from '@/components/ui/core/toast/constants';
import type { ToastStyleProps } from '@/components/ui/core/toast/types';

export const getToastStyles = ({ variant, visible }: ToastStyleProps) => {
  const variantStyles = TOAST_VARIANTS[variant];

  return {
    base: TOAST_BASE_STYLES,
    variant: variantStyles.container,
    icon: variantStyles.icon,
    title: variantStyles.title,
    state: visible ? 'animate-in slide-in-from-right' : 'animate-out slide-out-to-right',
  };
};
