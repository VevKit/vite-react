import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolveConfig } from './src/config/vite/base';

export default defineConfig(async ({ command, mode }) => {
  const config = await resolveConfig({ command, mode });
  return {
    ...config,
    plugins: [
      react(),
      tsconfigPaths(),
    ],
  };
});