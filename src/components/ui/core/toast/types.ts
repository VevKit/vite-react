export type ToastVariant = 'error' | 'success' | 'warning' | 'loading';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface ToastConfig {
  id: string;
  title?: string;
  message: string;
  variant: ToastVariant;
  duration?: number;
  onClose?: () => void;
}

export interface ToastStyleProps {
  variant: ToastVariant;
  visible: boolean;
}

export interface ToastBaseProps extends ToastConfig {
  visible: boolean;
}
