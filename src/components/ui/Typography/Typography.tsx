import type { ReactElement, ElementType } from 'react';

import { cn } from '@/utils/styles';

import type { TypographyProps, TypographyVariant } from './types';

const Typography = ({
  variant = 'body1',
  align = 'left',
  weight = 'normal',
  as,
  truncate = false,
  color,
  className = '',
  children,
  ...props
}: TypographyProps): ReactElement => {
  const variantStyles = {
    h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
    h2: 'scroll-m-20 text-3xl font-semibold tracking-tight',
    h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
    h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
    h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
    h6: 'scroll-m-20 text-base font-semibold tracking-tight',
    subtitle1: 'text-xl font-normal',
    subtitle2: 'text-lg font-normal',
    body1: 'text-base font-normal leading-7',
    body2: 'text-sm font-normal leading-6',
    caption: 'text-sm font-normal leading-5',
    overline: 'text-xs font-medium uppercase tracking-wide',
  } as const;

  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  } as const;

  const weightStyles = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  } as const;

  // Default element mapping for variants
  const defaultElements: Record<TypographyVariant, ElementType> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    caption: 'span',
    overline: 'span',
  };

  const Element = as || defaultElements[variant];

  return (
    <Element
      className={cn(
        variantStyles[variant],
        alignStyles[align],
        weightStyles[weight],
        truncate && 'truncate',
        color && `text-${color}`,
        className
      )}
      {...props}
    >
      {children}
    </Element>
  );
};

export default Typography;
