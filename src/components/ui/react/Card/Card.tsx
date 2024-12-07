import type { ReactElement } from 'react';

import { getCardStyles } from '@/theme/variants/card';
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
  const styles = getCardStyles({ variant, padding, hover });

  return (
    <div
      className={cn(styles.base, styles.variant, styles.padding, styles.hover, className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
