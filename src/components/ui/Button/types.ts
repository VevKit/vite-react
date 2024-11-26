import { ComponentBaseProps, ComponentSize } from '@/types/components';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'link';
export type ButtonSize = ComponentSize;

export interface ButtonProps extends ComponentBaseProps<ButtonVariant, ButtonSize> {
  isLoading?: boolean;
  isDisabled?: boolean;
  loadingText?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
