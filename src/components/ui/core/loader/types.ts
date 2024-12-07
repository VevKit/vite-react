export type LoaderVariant = 'spinner' | 'dots' | 'processing' | 'installing';
export type LoaderSize = 'sm' | 'md' | 'lg';

export interface LoaderStyleProps {
  variant: LoaderVariant;
  size: LoaderSize;
}

export interface LoaderBaseProps {
  variant?: LoaderVariant;
  size?: LoaderSize;
  label?: string;
  labelPosition?: 'left' | 'right';
}
