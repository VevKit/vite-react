// src/components/ui/core/button/types.ts

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonStyleProps {
  variant: ButtonVariant;
  size: ButtonSize;
  isDisabled: boolean;
  isLoading: boolean;
}

export interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isDisabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}
