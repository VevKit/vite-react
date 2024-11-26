import { UserConfig } from 'vite';

interface ConfigOptions {
  command: 'build' | 'serve';
  mode: string;
}

export async function resolveConfig({ command, mode }: ConfigOptions): Promise<UserConfig> {
  return {
    base: '/',
    
    resolve: {
      alias: {
        '@': '/src',
      },
    },

    server: {
      port: 3000,
      host: true,
      open: true,
    },

    build: {
      target: 'es2015',
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: true,
      minify: 'esbuild',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            router: ['react-router-dom'],
          },
        },
      },
    },

    css: {
      postcss: {
        plugins: [
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },

    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
  };
}