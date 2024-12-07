import { toastStore } from '@/components/ui/core/toast/store';
import type { ToastConfig } from '@/components/ui/core/toast/types';

export const useToast = () => {
  return {
    show: (config: Omit<ToastConfig, 'id'>) => toastStore.show(config),
    error: (message: string, options?: Partial<Omit<ToastConfig, 'id' | 'message' | 'variant'>>) =>
      toastStore.show({ message, variant: 'error', ...options }),
    success: (
      message: string,
      options?: Partial<Omit<ToastConfig, 'id' | 'message' | 'variant'>>
    ) => toastStore.show({ message, variant: 'success', ...options }),
    warning: (
      message: string,
      options?: Partial<Omit<ToastConfig, 'id' | 'message' | 'variant'>>
    ) => toastStore.show({ message, variant: 'warning', ...options }),
    loading: (
      message: string,
      options?: Partial<Omit<ToastConfig, 'id' | 'message' | 'variant'>>
    ) => toastStore.show({ message, variant: 'loading', ...options }),
    remove: (id: string) => toastStore.remove(id),
    removeAll: () => toastStore.removeAll(),
  };
};
