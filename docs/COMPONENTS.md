# VevKit React Components

This document provides examples and documentation for all components available in @vevkit/vite-react.

## Table of Contents

- [Core Components](#core-components)
  - [Button](#button)
  - [Typography](#typography)

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
