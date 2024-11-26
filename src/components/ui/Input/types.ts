import { ComponentBaseProps } from '@/types/components';

export type InputVariant = 'outline' | 'filled' | 'flushed' | 'unstyled';
export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<ComponentBaseProps<InputVariant, InputSize>, 'children'> {
  // Base input props
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';

  // States
  isDisabled?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
  isInvalid?: boolean;

  // Validation and Error
  error?: string;

  // Events
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  // Additional props
  name?: string;
  id?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  maxLength?: number;
  min?: number | string;
  max?: number | string;
  pattern?: string;
}
