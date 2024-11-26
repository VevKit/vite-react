// src/pages/ExamplePage.tsx
// import { ModalEntry } from '@/components/ui/core/modal';
import Button from '@/components/ui/react/Button';
import { useModal, Modal } from '@/components/ui/react/Modal';

import { Typography } from '@/components/ui/react/Typography';

const ExampleModal = ({ id, isOpen }: { id: string; isOpen: boolean }) => {
  return (
    <Modal
      id={id}
      isOpen={isOpen}
      title="Example Modal"
      description="This is an example modal to test our implementation"
    >
      <Typography variant="body1">Modal content goes here</Typography>

      <div className="mt-4 flex justify-end">
        <Button variant="primary" onClick={() => console.log('Clicked!')}>
          Action
        </Button>
      </div>
    </Modal>
  );
};

const ExamplePage = () => {
  const { push } = useModal();

  const handleOpenModal = () => {
    push({
      id: 'example-modal',
      component: ExampleModal,
    });
  };

  return (
    <div className="p-8">
      <Typography variant="h1" className="mb-6">
        VevKit Components
      </Typography>

      <div className="space-y-8">
        <section>
          <Typography variant="h2" className="mb-4">
            Button Examples
          </Typography>
          <div className="space-x-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </section>

        <section>
          <Typography variant="h2" className="mb-4">
            Modal Example
          </Typography>
          <Button onClick={handleOpenModal}>Open Modal</Button>
        </section>
      </div>
    </div>
  );
};

export default ExamplePage;
