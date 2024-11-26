import type { ReactElement } from 'react';

import { cn } from '@/utils/styles';

import type { InputProps } from './types';

const Input = ({
  // Base props
  variant = 'outline',
  size = 'md',
  className = '',

  // Input-specific props
  type = 'text',
  value,
  defaultValue,
  placeholder,

  // States
  isDisabled = false,
  isReadOnly = false,
  isRequired = false,
  isInvalid = false,

  // Validation
  error,

  // Events
  onChange,
  onFocus,
  onBlur,

  // Additional props
  name,
  id,
  autoComplete,
  autoFocus,
  maxLength,
  min,
  max,
  pattern,

  ...props
}: InputProps): ReactElement => {
  const baseStyles =
    'w-full rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

  const variantStyles = {
    outline:
      'border border-input bg-background hover:border-accent-foreground focus-visible:ring-ring',
    filled: 'border-2 border-transparent bg-muted hover:bg-muted/80 focus-visible:ring-ring',
    flushed:
      'rounded-none border-b border-input hover:border-accent-foreground focus-visible:border-primary',
    unstyled: 'border-none bg-transparent hover:bg-transparent',
  };

  const sizeStyles = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 text-lg',
  };

  const validationStyles = isInvalid ? 'border-destructive focus-visible:ring-destructive/50' : '';

  return (
    <div className="relative">
      <input
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={isDisabled}
        readOnly={isReadOnly}
        required={isRequired}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          validationStyles,
          className
        )}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
        id={id}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        maxLength={maxLength}
        min={min}
        max={max}
        pattern={pattern}
        aria-invalid={isInvalid}
        aria-describedby={error ? `${id}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
