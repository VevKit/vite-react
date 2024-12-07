## Toast

### Usage

```tsx
// In App.tsx or layout
const App = () => {
  return (
    <>
      {/* Your app content */}
      <ToastContainer position="top-right" />
    </>
  );
};

// Anywhere in your app
const MyComponent = () => {
  const toast = useToast();

  const handleClick = () => {
    // Basic usage
    toast.success('Operation completed successfully');

    // With title and duration
    toast.error('Failed to save', {
      title: 'Error',
      duration: 5000,
    });

    // Custom toast
    toast.show({
      title: 'Custom Toast',
      message: 'This is a custom message',
      variant: 'warning',
      duration: 3000,
      onClose: () => console.log('Toast closed'),
    });
  };

  return <Button onClick={handleClick}>Show Toast</Button>;
};
```
