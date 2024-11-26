// src/components/ui/react/Modal/useModal.ts
import { useState, useEffect } from 'react';

import { modalStore } from '@/components/ui/core/modal/store';
import type { ModalEntry } from '@/components/ui/core/modal/types';

export const useModal = () => {
  const [stack, setStack] = useState<ModalEntry[]>(modalStore.getStack());

  useEffect(() => {
    return modalStore.subscribe(setStack);
  }, []);

  return {
    stack,
    push: modalStore.push,
    pop: modalStore.pop,
    clear: modalStore.clear,
  } as const;
};
