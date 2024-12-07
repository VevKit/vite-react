import type { ModalConfig } from './types';

const createModalStore = () => {
  const subscribers = new Set<(stack: ModalConfig[]) => void>();
  let stack: ModalConfig[] = [];

  const notify = () => {
    subscribers.forEach((callback) => callback([...stack]));
  };

  return {
    subscribe: (callback: (stack: ModalConfig[]) => void) => {
      subscribers.add(callback);
      return () => subscribers.delete(callback);
    },

    getStack: () => [...stack],

    push: (config: ModalConfig) => {
      stack = [...stack, config];
      notify();
    },

    pop: (id: string) => {
      const modal = stack.find((m) => m.id === id);
      if (modal?.onClose) {
        modal.onClose();
      }
      stack = stack.filter((m) => m.id !== id);
      notify();
    },

    clear: () => {
      stack = [];
      notify();
    },
  };
};

export const modalStore = createModalStore();
