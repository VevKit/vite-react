import type { ReactElement } from 'react';

import { cn } from '@/utils/styles';

import type { CardProps } from './types';

const Card = ({
  variant = 'elevated',
  padding = true,
  hover = false,
  className,
  children,
  ...props
}: CardProps): ReactElement => {
  const baseStyles = 'rounded-lg transition-shadow';

  const variantStyles = {
    elevated: 'bg-card shadow-sm',
    outlined: 'border border-border bg-background',
    filled: 'bg-muted',
  };

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        padding && 'p-6',
        hover && 'hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
