declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    VEVKIT_API_URL: string
    [key: string]: string | undefined
  }
}

// Add Vite-specific ENV
/// <reference types="vite/client" />