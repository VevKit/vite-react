# @vevkit/vite-react

A zero-config React + Vite starter with essential UI components and development tools.

## Features

- ⚡️ Vite for fast development and building
- ⚛️ React 18 with TypeScript
- 🎨 Tailwind CSS for styling
- 📦 Essential UI components
- 🛠️ Path aliases and TypeScript configuration
- 📱 Responsive design utilities

## Quick Start

```bash
npm create @vevkit/vite-react my-app
cd my-app
npm install
npm run dev
```

### Example env usage in a component
```typescript
import { loadEnvConfig } from '@/config/env';

const config = loadEnvConfig();

// Type-safe access to environment variables
console.log(config.apiUrl);
console.log(config.features.analytics);
```