import type { ElementType } from 'react';

import type { ContainerBaseProps } from '@/components/ui/core/container/types';

export interface ContainerProps extends ContainerBaseProps {
  as?: ElementType;
  className?: string;
  children?: React.ReactNode;
}
