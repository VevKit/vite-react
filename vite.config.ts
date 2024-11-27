import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import { resolveConfig } from './src/config/vite/base';

export default defineConfig(async ({ command, mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };

  const config = await resolveConfig({ command, mode });
  return {
    ...config,
    plugins: [react(), tsconfigPaths()],
  };
});
