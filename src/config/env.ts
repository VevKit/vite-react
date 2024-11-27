// src/config/env.ts
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
  // Ensure we're in a Vite context
  const env = import.meta?.env ?? {};

  return {
    name: env.VITE_APP_NAME ?? 'VevKit',
    version: env.VITE_APP_VERSION ?? '0.1.0',
    isDev: env.DEV ?? true,
    isProd: env.PROD ?? false,
    apiUrl: env.VITE_API_URL ?? 'http://localhost:8080',
    apiTimeout: Number(env.VITE_API_TIMEOUT ?? 5000),
    features: {
      analytics: env.VITE_ENABLE_ANALYTICS === 'true',
    },
  };
}
