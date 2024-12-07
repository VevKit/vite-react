## Modal

### Usage

```tsx
// In App.tsx
const App = () => {
  return (
    <>
      {/* Your app content */}
      <ModalManager />
    </>
  );
};

// Custom modal component
const MyCustomModal = ({ id, isOpen, onClose }) => {
  return (
    <Modal
      id={id}
      isOpen={isOpen}
      onClose={onClose}
      title="My Modal"
      description="This is a custom modal"
    >
      <div className="space-y-4">
        <p>Modal content goes here</p>
        <div className="flex justify-end space-x-2">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button>Confirm</Button>
        </div>
      </div>
    </Modal>
  );
};

// Using the modal
const MyComponent = () => {
  const { push } = useModal();

  const handleOpenModal = () => {
    push({
      id: 'my-modal',
      component: MyCustomModal,
      props: {
        // Additional props
      },
    });
  };

  return <Button onClick={handleOpenModal}>Open Modal</Button>;
};
```
