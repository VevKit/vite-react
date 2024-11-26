/// <reference types="vite/types/importMeta.d.ts" />
/// <reference types="vite/client" />
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    VEVKIT_API_URL: string;
    [key: string]: string | undefined;
  }
}
