// .eslintrc.cjs
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    // Core rules - catches common errors
    'eslint:recommended',

    // TypeScript rules - type safety and best practices
    'plugin:@typescript-eslint/recommended',

    // React rules - enforce hooks rules and common patterns
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',

    // Import rules - keep imports clean and organized
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    // React Rules
    'react/react-in-jsx-scope': 'off', // Not needed with modern React
    'react/prop-types': 'off', // Using TypeScript instead
    'react/jsx-no-target-blank': 'error', // Security: Prevent reverse tabnabbing
    'import/default': 'off',

    // Hook Rules
    'react-hooks/rules-of-hooks': 'error', // Enforce hook rules
    'react-hooks/exhaustive-deps': 'warn', // Catch missing dependencies

    // TypeScript Rules
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn', // Discourage 'any' type
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Too strict for React components

    // Import Rules
    'import/order': [
      'warn',
      {
        groups: [
          'builtin', // Node.js built-in modules
          'external', // npm packages
          'internal', // Our own modules
          ['parent', 'sibling'],
          'index',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // General Rules
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Allow console.warn/error
    eqeqeq: ['error', 'always'], // Require strict equality
  },
};
