/// <reference types="vite/client" />

import { UserConfig, loadEnv } from 'vite';

import { loadEnvConfig } from '../env';

interface ConfigOptions {
  command: 'build' | 'serve';
  mode: string;
}

export async function resolveConfig({ command, mode }: ConfigOptions): Promise<UserConfig> {
  const isDev = mode === 'development';
  const isProd = mode === 'production';

  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };
  const env = loadEnvConfig();

  return {
    base: '/',

    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@config': '/src/config',
        '@hooks': '/src/hooks',
        '@utils': '/src/utils',
        '@styles': '/src/styles',
        '@pages': '/src/pages',
        '@types': '/src/types',
      },
    },

    define: {
      __APP_CONFIG__: JSON.stringify(env),
    },

    server: {
      port: 3000,
      host: true,
      open: true,
      hmr: {
        overlay: true,
      },
    },

    build: {
      target: 'es2015',
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: isDev,
      minify: isProd ? 'esbuild' : false,
      cssMinify: isProd,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
    },

    css: {
      modules: {
        localsConvention: 'camelCase',
      },
    },

    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
      jsxInject: isProd ? `import React from 'react'` : undefined,
    },
  };
}
