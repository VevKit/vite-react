export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

export interface ContainerStyleProps {
  size: ContainerSize;
  maxWidth: boolean;
  padding: boolean;
}

export interface ContainerBaseProps {
  size?: ContainerSize;
  maxWidth?: boolean;
  padding?: boolean;
}
