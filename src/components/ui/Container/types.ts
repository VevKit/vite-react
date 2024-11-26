import { ComponentBaseProps } from '@/types/components';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerProps extends ComponentBaseProps<never, ContainerSize> {
  as?: keyof JSX.IntrinsicElements;
  maxWidth?: boolean;
  padding?: boolean;
}
