# VevKit React Components

This document provides examples and documentation for all components available in @vevkit/vite-react.

## Table of Contents

- [Core Components](#core-components)
  - [Button](#button)
  - [Typography](#typography)
  - [Input](#input)
  - [Modal](#modal)

## Core Components

### Button

A versatile button component that supports different variants, sizes, and states.

#### Basic Usage

```tsx
import { Button } from '@vevkit/vite-react';

// Variants
<Button variant="primary">Primary Button</Button>
<Button variant="secondary">Secondary Button</Button>
<Button variant="ghost">Ghost Button</Button>
<Button variant="destructive">Destructive Button</Button>
<Button variant="link">Link Button</Button>

// Sizes
<Button size="sm">Small Button</Button>
<Button size="md">Medium Button</Button>
<Button size="lg">Large Button</Button>

// States
<Button isLoading>Loading Button</Button>
<Button isLoading loadingText="Saving...">Save</Button>
<Button isDisabled>Disabled Button</Button>

// Custom className
<Button className="custom-class">Custom Button</Button>
```

### Typography

A component for consistent text styling across your application.

#### Basic Usage

```tsx
import { Typography } from '@vevkit/vite-react';

// Headers
<Typography variant="h1">Main Header</Typography>
<Typography variant="h2">Section Header</Typography>
<Typography variant="h3">Subsection Header</Typography>

// Body Text
<Typography variant="body1">
  This is a paragraph with regular body text. It has optimal line height and
  spacing for readability.
</Typography>

<Typography variant="body2" color="gray-600">
  This is smaller body text, often used for less important content.
</Typography>

// Special Variants
<Typography variant="overline">Overline Text</Typography>
<Typography variant="caption" color="gray-400">Caption text</Typography>
<Typography variant="subtitle1">Subtitle 1</Typography>
<Typography variant="subtitle2">Subtitle 2</Typography>

// Text Alignment
<Typography variant="body1" align="center">Centered text</Typography>
<Typography variant="body1" align="right">Right-aligned text</Typography>
<Typography variant="body1" align="justify">Justified text</Typography>

// Font Weights
<Typography variant="body1" weight="light">Light text</Typography>
<Typography variant="body1" weight="medium">Medium text</Typography>
<Typography variant="body1" weight="bold">Bold text</Typography>

// Truncation
<Typography variant="body1" truncate>
  This is a very long text that will be truncated if it exceeds the width of its container...
</Typography>

// Custom Element
<Typography variant="body1" as="label">Form Label</Typography>
```

### Input

A flexible input component that supports multiple variants, sizes, and states.

#### Basic Usage

```tsx
// Basic
<Input placeholder="Enter your name" />

// Variants
<Input variant="outline" placeholder="Outline Input" />
<Input variant="filled" placeholder="Filled Input" />
<Input variant="flushed" placeholder="Flushed Input" />
<Input variant="unstyled" placeholder="Unstyled Input" />

// Sizes
<Input size="sm" placeholder="Small Input" />
<Input size="md" placeholder="Medium Input" />
<Input size="lg" placeholder="Large Input" />

// Types
<Input type="text" placeholder="Text Input" />
<Input type="password" placeholder="Password Input" />
<Input type="email" placeholder="Email Input" />
<Input type="number" placeholder="Number Input" />
<Input type="tel" placeholder="Phone Input" />
<Input type="url" placeholder="URL Input" />
<Input type="search" placeholder="Search Input" />

// States
<Input isDisabled placeholder="Disabled Input" />
<Input isReadOnly value="Read-only Input" />
<Input isRequired placeholder="Required Input" />
<Input isInvalid error="This field is invalid" placeholder="Invalid Input" />

// With Error Message
<Input
  placeholder="Email"
  isInvalid
  error="Please enter a valid email address"
/>

// Controlled Input
const [value, setValue] = useState('');
<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Controlled Input"
/>
```

### Container

A responsive container component that centers content and provides consistent spacing.

#### Basic Usage

```tsx
// Basic container
<Container>Content here</Container>

// Different sizes
<Container size="sm">Small container</Container>
<Container size="md">Medium container</Container>
<Container size="lg">Large container</Container>
<Container size="xl">Extra large container</Container>
<Container size="full">Full width container</Container>

// Without padding
<Container padding={false}>No padding</Container>

// Without max-width
<Container maxWidth={false}>No max-width</Container>

// With custom element
<Container as="section">As a section</Container>
```

### Card

A versatile card component for grouped content.

```tsx
// Basic card
<Card>Card content</Card>

// Variants
<Card variant="elevated">Elevated Card</Card>
<Card variant="outlined">Outlined Card</Card>
<Card variant="filled">Filled Card</Card>

// Without padding
<Card padding={false}>No padding</Card>

// With hover effect
<Card hover>Hoverable card</Card>

// Combined props
<Card variant="outlined" hover className="custom-class">
  Custom card with hover
</Card>
```

### Modal

A centralized modal system that provides application-wide modal management without local state.

#### Basic Usage

```tsx
// 1. Add ModalManager to your app root (e.g., App.tsx)
import { ModalManager } from '@vevkit/vite-react';

const App = () => {
  return (
    <>
      {/* Your app content */}
      <ModalManager />
    </>
  );
};

// 2. Create your modal component
const MyCustomModal = ({ id, isOpen, title }) => {
  return (
    <Modal id={id} isOpen={isOpen} title={title}>
      {/* Modal content */}
    </Modal>
  );
};

// 3. Use the modal anywhere in your app
const MyComponent = () => {
  const { push } = useModal();

  const handleOpenModal = () => {
    push({
      id: 'my-modal',
      component: MyCustomModal,
      props: {
        title: 'My Modal Title',
        // any other props your modal needs
      },
    });
  };

  return <button onClick={handleOpenModal}>Open Modal</button>;
};
```

#### Modal Variants

```tsx
// Basic Modal
<Modal id="basic" isOpen={isOpen}>
  <p>Basic modal content</p>
</Modal>

// With Title and Description
<Modal
  id="with-header"
  isOpen={isOpen}
  title="Modal Title"
  description="This is a description of the modal"
>
  <p>Modal content</p>
</Modal>

// Custom Styling
<Modal
  id="custom"
  isOpen={isOpen}
  className="max-w-2xl bg-gray-100"
>
  <p>Custom styled modal</p>
</Modal>

// With Close Handler
<Modal
  id="with-close"
  isOpen={isOpen}
  onClose={() => {
    // Handle close
  }}
>
  <p>Modal with close handler</p>
</Modal>
```

#### Modal Management

```tsx
const MyPage = () => {
  const { push, pop, clear } = useModal();

  // Open a modal
  const openModal = () => {
    push({
      id: 'my-modal',
      component: MyCustomModal,
      props: {
        title: 'Hello',
        onConfirm: () => {
          // Handle confirmation
        },
      },
    });
  };

  // Close a specific modal
  const closeModal = () => {
    pop('my-modal');
  };

  // Close all modals
  const closeAllModals = () => {
    clear();
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <button onClick={closeModal}>Close Modal</button>
      <button onClick={closeAllModals}>Close All Modals</button>
    </div>
  );
};
```
