import { type ReactElement, useEffect } from 'react';

import { getToastStyles } from '@/theme/variants/toast';
import { cn } from '@/utils/styles';

import type { ToastProps } from './types';
import { toastStore } from '../../core/toast/store';

const Toast = ({
  id,
  title,
  message,
  variant,
  position = 'top-right',
  visible,
  onClose = () => toastStore.remove(id),
  duration = 5000,
  className,
  style,
}: ToastProps): ReactElement => {
  const styles = getToastStyles({ variant, position, visible });

  useEffect(() => {
    if (duration) {
      setTimeout(() => {
        onClose();
      }, duration);
    }
  }, [duration, onClose]);

  return (
    <div
      id={id}
      className={cn(styles.base, styles.variant, styles.state, 'flex items-start gap-3', className)}
      role="alert"
      style={style}
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
