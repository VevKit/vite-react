import type { BaseProps } from '../common';

// Base size type that can be extended
export type ComponentSize = 'sm' | 'md' | 'lg';

// Generic base props interface
export interface ComponentBaseProps<
  TVariant extends string = 'primary' | 'secondary' | 'ghost',
  TSize extends string = ComponentSize,
> extends BaseProps {
  variant?: TVariant;
  size?: TSize;
  disabled?: boolean;
}

// Helper type for extracting variant types
export type ExtractVariant<T> = T extends ComponentBaseProps<infer V> ? V : never;

// Helper type for extracting size types
export type ExtractSize<T> = T extends ComponentBaseProps<any, infer S> ? S : never;
