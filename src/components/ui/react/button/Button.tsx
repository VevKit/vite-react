import type { ReactElement } from 'react';

import { getButtonStyles } from '@/theme/variants/button';
import { cn } from '@/utils/styles';

import type { ButtonProps } from './types';

const Button = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isDisabled = false,
  loadingText,
  className,
  children,
  ...props
}: ButtonProps): ReactElement => {
  const styles = getButtonStyles({
    variant,
    size,
    isDisabled,
    isLoading,
  });

  return (
    <button
      disabled={isDisabled || isLoading}
      className={cn(styles.base, styles.variant, styles.size, styles.state, className)}
      {...props}
    >
      {isLoading ? (
        <>
          {/* <LoadingSpinner /> */}
          {loadingText || children}
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
