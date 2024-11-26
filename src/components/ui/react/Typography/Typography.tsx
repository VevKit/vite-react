import type { ReactElement } from 'react';

import { getTypographyStyles } from '@/theme/variants/typography';
import { cn } from '@/utils/styles';

import { defaultElements, type TypographyProps } from './types';

const Typography = ({
  variant = 'body1',
  align = 'left',
  weight = 'normal',
  _truncate = false,
  color = 'black',
  className = '',
  children,
  ...props
}: TypographyProps): ReactElement => {
  const styles = getTypographyStyles({
    variant,
    align,
    weight,
    color,
  });

  const Element = defaultElements[variant];

  return (
    <Element
      className={cn(styles.variant, styles.align, styles.weight, styles.color, className)}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Typography;
