import { useEffect, type ReactElement } from 'react';

import { getToastStyles } from '@/theme/variants/toast';
import { cn } from '@/utils/styles';

import type { ToastProps } from './types';

const Toast = ({
  id,
  title,
  message,
  variant,
  visible,
  onClose,
  className,
}: ToastProps): ReactElement => {
  const styles = getToastStyles({ variant, visible });

  return (
    <div
      className={cn(styles.base, styles.variant, styles.state, 'flex items-start gap-3', className)}
      role="alert"
    >
      {/* Variant Icon */}
      <div className={cn(styles.icon, 'mt-0.5')}>
        {variant === 'error' && '✕'}
        {variant === 'success' && '✓'}
        {variant === 'warning' && '⚠'}
        {variant === 'loading' && '⟳'}
      </div>

      <div className="flex-1">
        {title && <div className={styles.title}>{title}</div>}
        <div className="text-sm">{message}</div>
      </div>

      {onClose && (
        <button
          onClick={onClose}
          className="text-foreground/50 hover:text-foreground"
          aria-label="Close toast"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Toast;
