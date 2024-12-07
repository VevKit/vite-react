export type CardVariant = 'elevated' | 'outlined' | 'filled';

export interface CardStyleProps {
  variant: CardVariant;
  padding: boolean;
  hover: boolean;
}

export interface CardBaseProps {
  variant?: CardVariant;
  padding?: boolean;
  hover?: boolean;
}
