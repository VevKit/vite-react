export type InputVariant = 'outline' | 'filled' | 'flushed' | 'unstyled';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputStyleProps {
  variant: InputVariant;
  size: InputSize;
  isDisabled: boolean;
  isReadOnly: boolean;
  isInvalid: boolean;
}

export interface InputBaseProps {
  variant?: InputVariant;
  size?: InputSize;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;
  error?: string;
  name?: string;
  id?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  maxLength?: number;
  min?: number | string;
  max?: number | string;
  pattern?: string;
}
