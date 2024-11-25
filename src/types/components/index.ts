import { BaseProps } from '../common';

export interface ComponentBaseProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

export interface ButtonProps extends ComponentBaseProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
}

export interface InputProps extends ComponentBaseProps {
  type?: 'text' | 'password' | 'email' | 'number';
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

export interface MenuProps extends ComponentBaseProps {
  open?: boolean;
  onClose?: () => void;
}

export interface TooltipProps extends BaseProps {
  content: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
}