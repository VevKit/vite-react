import type { ReactElement } from 'react';

import { getInputStyles } from '@/theme/variants/input';
import { cn } from '@/utils/styles';

import type { InputProps } from './types';

const Input = ({
  variant = 'outline',
  size = 'md',
  type = 'text',
  isDisabled = false,
  isReadOnly = false,
  isRequired = false,
  isInvalid = false,
  error,
  className,
  ...props
}: InputProps): ReactElement => {
  const styles = getInputStyles({
    variant,
    size,
    isDisabled,
    isReadOnly,
    isInvalid,
  });

  return (
    <div className="relative">
      <input
        type={type}
        disabled={isDisabled}
        readOnly={isReadOnly}
        required={isRequired}
        aria-invalid={isInvalid}
        aria-describedby={error ? `${props.id}-error` : undefined}
        className={cn(styles.base, styles.variant, styles.size, styles.state, className)}
        {...props}
      />
      {error && (
        <p id={`${props.id}-error`} className="mt-1 text-sm text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
