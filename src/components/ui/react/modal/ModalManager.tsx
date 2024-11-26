// src/components/ui/react/Modal/ModalManager.tsx
import type { ReactElement } from 'react';

import { Modal } from './Modal'; // This is our base Modal component
import { useModal } from './useModal';

export const ModalManager = (): ReactElement => {
  const { stack } = useModal();

  return (
    <>
      {stack.map(({ id, component: Component, props }) => (
        <Component key={id} id={id} isOpen={true} {...props} />
      ))}
    </>
  );
};
