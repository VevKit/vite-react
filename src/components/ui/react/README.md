# React Components

React-specific implementations of VevKit UI components. These implementations use the core logic from ../core and styling from ../../theme.

## Structure

- `Button/` - React Button implementation
- `Typography/` - React Typography implementation
- `Input/` - React Input implementation
- etc.

Each component directory contains:

- `ComponentName.tsx` - React component implementation
- `types.ts` - React-specific types
- `index.ts` - Export file

## Guidelines

1. Use types from core/
2. Import styling from theme/
3. Handle React-specific concerns
4. Maintain consistent patterns
5. Document React-specific features
