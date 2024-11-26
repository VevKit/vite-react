// src/components/ui/core/modal/store.ts
import type { ModalConfig, ModalEntry, ModalStore } from './types';

const createModalStore = (): ModalStore => {
  // Private state
  let stack: ModalEntry[] = [];
  const subscribers = new Set<(stack: ModalEntry[]) => void>();

  // Private utilities
  const notify = () => {
    subscribers.forEach((callback) => callback([...stack]));
  };

  // Public API
  const getStack = () => [...stack];

  const subscribe = (callback: (stack: ModalEntry[]) => void) => {
    subscribers.add(callback);
    return () => {
      subscribers.delete(callback);
    };
  };

  const push = (config: ModalConfig) => {
    stack = [...stack, { ...config, isOpen: true }];
    notify();
  };

  const pop = (id: string) => {
    const modal = stack.find((m) => m.id === id);
    if (modal?.onClose) {
      modal.onClose();
    }
    stack = stack.filter((modal) => modal.id !== id);
    notify();
  };

  const clear = () => {
    stack = [];
    notify();
  };

  return {
    getStack,
    subscribe,
    push,
    pop,
    clear,
  };
};

export const modalStore = createModalStore();
