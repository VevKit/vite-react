import { modalStore } from '@/components/ui/core/modal/store';
import type { ModalConfig } from '@/components/ui/core/modal/types';

export const useModal = () => {
  return {
    stack: modalStore.getStack(),
    push: (config: ModalConfig) => modalStore.push(config),
    pop: (id: string) => modalStore.pop(id),
    clear: () => modalStore.clear(),
  };
};
