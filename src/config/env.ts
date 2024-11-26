// Type augmentation for Vite's import.meta.env
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_APP_VERSION: string;
  readonly VITE_API_URL: string;
  readonly VITE_API_TIMEOUT: string;
  readonly VITE_ENABLE_ANALYTICS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

export interface AppConfig {
  name: string;
  version: string;
  isDev: boolean;
  isProd: boolean;
  apiUrl: string;
  apiTimeout: number;
  features: {
    analytics: boolean;
  };
}

export function loadEnvConfig(): AppConfig {
  return {
    name: import.meta.env.VITE_APP_NAME || 'VevKit',
    version: import.meta.env.VITE_APP_VERSION || '0.1.0',
    isDev: import.meta.env.DEV,
    isProd: import.meta.env.PROD,
    apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:8080',
    apiTimeout: Number(import.meta.env.VITE_API_TIMEOUT || 5000),
    features: {
      analytics: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
    },
  };
}
