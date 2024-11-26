import type { ReactElement } from 'react';

import { cn } from '@/utils/styles';

import type { ContainerProps } from './types';

const Container = ({
  size = 'lg',
  as: Component = 'div',
  maxWidth = true,
  padding = true,
  className,
  children,
  ...props
}: ContainerProps): ReactElement => {
  const sizeStyles = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'max-w-full',
  };

  return (
    <Component
      className={cn(
        'w-full mx-auto',
        maxWidth && sizeStyles[size],
        padding && 'px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
