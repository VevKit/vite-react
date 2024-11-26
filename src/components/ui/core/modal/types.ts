// src/components/ui/core/modal/types.ts

export interface ModalConfig {
  id: string;
  component: any;
  props?: Record<string, any>;
  onClose?: () => void;
}

export interface ModalEntry extends ModalConfig {
  isOpen: boolean;
}

export interface ModalStore {
  getStack: () => ModalEntry[];
  subscribe: (callback: (stack: ModalEntry[]) => void) => () => void;
  push: (config: ModalConfig) => void;
  pop: (id: string) => void;
  clear: () => void;
}

export interface ModalVariants {
  size: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  position: 'center' | 'top' | 'right' | 'bottom' | 'left';
}

export interface ModalStyleProps extends ModalVariants {
  isFullScreen?: boolean;
  noPadding?: boolean;
}
