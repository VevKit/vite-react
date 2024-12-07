export type ModalSize = 'sm' | 'md' | 'lg' | 'full';

export interface ModalStyleProps {
  size: ModalSize;
  fullScreen: boolean;
  isOpen: boolean;
}

export interface ModalConfig {
  id: string;
  component: any;
  props?: Record<string, any>;
  onClose?: () => void;
}

export interface ModalBaseProps {
  id: string;
  isOpen: boolean;
  size?: ModalSize;
  fullScreen?: boolean;
  title?: string;
  description?: string;
  onClose?: () => void;
}
