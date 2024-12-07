import type { ReactElement } from 'react';

import { getContainerStyles } from '@/theme/variants/container';
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
  const styles = getContainerStyles({ size, maxWidth, padding });
  return (
    <Component
      className={cn(styles.base, styles.size, styles.padding, className)}
      {...props}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
