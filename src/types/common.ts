import type { CSSProperties, ReactNode, HTMLAttributes } from 'react';

export interface BaseProps {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

export type WithRequired<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};

export type DivProps = HTMLAttributes<HTMLDivElement>;

// Utility types
export type Maybe<T> = T | undefined | null;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
