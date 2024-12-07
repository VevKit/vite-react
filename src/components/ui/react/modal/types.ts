import type { ReactNode } from 'react';

import type { ModalBaseProps } from '@/components/ui/core/modal/types';

export interface ModalProps extends ModalBaseProps {
  children: ReactNode;
  className?: string;
}

export interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}
