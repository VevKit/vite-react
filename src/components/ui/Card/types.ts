import { ComponentBaseProps } from '@/types/components';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export interface CardProps extends ComponentBaseProps<CardVariant> {
  padding?: boolean;
  hover?: boolean;
}
