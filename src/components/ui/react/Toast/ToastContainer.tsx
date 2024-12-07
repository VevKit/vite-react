import { useState, useEffect, type ReactElement } from 'react';

import { TOAST_POSITIONS } from '@/components/ui/core/toast/constants';
import { toastStore } from '@/components/ui/core/toast/store';
import type { ToastPosition } from '@/components/ui/core/toast/types';
import { cn } from '@/utils/styles';

import Toast from './Toast';

interface ToastContainerProps {
  position?: ToastPosition;
  className?: string;
}

const ToastContainer = ({
  position = 'top-right',
  className,
}: ToastContainerProps): ReactElement => {
  const [toasts, setToasts] = useState(toastStore.getToasts());

  useEffect(() => {
    const unsubscribe = toastStore.subscribe(setToasts);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className={cn('fixed z-50 flex flex-col gap-2', TOAST_POSITIONS[position], className)}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          visible={true}
          onClose={() => toastStore.remove(toast.id)}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
