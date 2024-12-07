// src/pages/ExamplePage.tsx
// import { ModalEntry } from '@/components/ui/core/modal';
import { ToastVariant } from '@/components/ui/core/toast/types';
import { Button } from '@/components/ui/react/Button';
import { Container } from '@/components/ui/react/Container';
import { useModal, Modal } from '@/components/ui/react/Modal';
import { useToast } from '@/components/ui/react/Toast';
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
  const toast = useToast();

  const handleOpenModal = () => {
    push({
      id: 'example-modal',
      component: ExampleModal,
    });
  };

  const handleToast = (variant: ToastVariant) => {
    toast.show({
      title: 'Operation completed successfully',
      message: 'This is a custom message',
      variant,
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

        <section className="flex flex-col space-y-4 items-start">
          <Typography variant="h2" className="mb-4">
            Toast Example
          </Typography>
          <div className="flex space-x-4">
            <Button onClick={() => handleToast('success')}>Toast Success</Button>
            <Button onClick={() => handleToast('error')}>Toast Error</Button>
            <Button onClick={() => handleToast('warning')}>Toast Warning</Button>
            <Button onClick={() => handleToast('loading')}>Toast Loading</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExamplePage;
