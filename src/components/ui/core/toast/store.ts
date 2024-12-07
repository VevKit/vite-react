import type { ToastConfig } from './types';

interface ToastStore {
  toasts: ToastConfig[];
  show: (toast: Omit<ToastConfig, 'id'>) => string;
  remove: (id: string) => void;
  removeAll: () => void;
}

const createToastStore = () => {
  const subscribers = new Set<(toasts: ToastConfig[]) => void>();
  let toasts: ToastConfig[] = [];

  const notify = () => {
    subscribers.forEach((callback) => callback([...toasts]));
  };

  return {
    subscribe: (callback: (toasts: ToastConfig[]) => void) => {
      subscribers.add(callback);
      return () => subscribers.delete(callback);
    },

    getToasts: () => [...toasts],

    remove: (id: string) => {
      const toast = toasts.find((t) => t.id === id);
      if (toast?.onClose) {
        toast.onClose();
      }
      toasts = toasts.filter((t) => t.id !== id);
      notify();
    },

    removeAll: () => {
      toasts = [];
      notify();
    },

    show: (config: Omit<ToastConfig, 'id'>) => {
      const id = crypto.randomUUID();
      const toast = { ...config, id };
      toasts = [...toasts, toast];
      notify();

      if (config.duration !== undefined && config.duration > 0) {
        const store = toastStore;
        setTimeout(() => {
          store.remove(id);
        }, config.duration);
      }

      return id;
    },
  };
};

export const toastStore = createToastStore();
