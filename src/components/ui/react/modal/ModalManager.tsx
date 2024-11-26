// src/components/ui/react/Modal/ModalManager.tsx
import type { ReactElement } from 'react';

import { useModal } from './useModal';

export const ModalManager = (): ReactElement => {
  const { stack } = useModal();

  return (
    <>
      {stack.map(({ id, component: Component, props }) => (
        <Component key={id} id={id} {...props} />
      ))}
    </>
  );
};
