export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export type WithRequired<T, K extends keyof T> = T & {
  [P in K]-?: T[P];
};

export type DivProps = React.HTMLAttributes<HTMLDivElement>;

// Utility types
export type Maybe<T> = T | undefined | null;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
