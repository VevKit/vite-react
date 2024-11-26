# Core Components

This directory contains framework-agnostic implementations of VevKit UI components. The code here should not depend on any specific UI framework.

## Structure

- `button/` - Button component core logic and types
- `typography/` - Typography component core logic and types
- `input/` - Input component core logic and types
- etc.

Each component directory contains:

- `types.ts` - TypeScript interfaces and types
- `constants.ts` - Component-specific constants
- `utils.ts` - Helper functions (if needed)

## Guidelines

1. No framework-specific code
2. No direct styling implementations
3. Focus on logic and types
4. Keep interfaces framework-agnostic
5. Document extraction points
