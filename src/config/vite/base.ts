// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';
// import tsconfigPaths from 'vite-tsconfig-paths';
// import checker from 'vite-plugin-checker';
// import tailwind from './plugins/tailwind';
// import { resolveAliases } from './plugins/aliases';
// import { envConfig } from './utils/env';

// export default defineConfig({
//   plugins: [
//     react(),
//     tsconfigPaths(),
//     checker({ typescript: true }),
//     tailwind(),
//   ],
//   resolve: {
//     alias: resolveAliases(),
//   },
//   envPrefix: 'VEVKIT_',
//   css: {
//     postcss: {
//       plugins: [require('autoprefixer')],
//     },
//   },
//   build: {
//     target: 'es2015',
//     outDir: 'dist',
//     assetsDir: 'assets',
//     sourcemap: true,
//   },
// });