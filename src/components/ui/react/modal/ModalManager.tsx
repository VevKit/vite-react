import { useState, useEffect, type ReactElement } from 'react';

import { modalStore } from '@/components/ui/core/modal/store';

export const ModalManager = (): ReactElement => {
  const [stack, setStack] = useState(modalStore.getStack());

  useEffect(() => {
    const unsubscribe = modalStore.subscribe(setStack);
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      {stack.map(({ id, component: Component, props }) => (
        <Component key={id} id={id} isOpen={true} onClose={() => modalStore.pop(id)} {...props} />
      ))}
    </>
  );
};
