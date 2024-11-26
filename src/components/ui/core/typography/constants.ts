import { TypographyVariant, TypographyAlign, TypographyWeight } from './types';

type TypographyVariantStyles = {
  [K in TypographyVariant]: string;
};

type TypographyAlignStyles = {
  [K in TypographyAlign]: string;
};

type TypographyWeightStyles = {
  [K in TypographyWeight]: string;
};

export const TYPOGRAPHY_VARIANTS: TypographyVariantStyles = {
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

export const TYPOGRAPHY_ALIGNS: TypographyAlignStyles = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
} as const;

export const TYPOGRAPHY_WEIGHTS: TypographyWeightStyles = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
} as const;
