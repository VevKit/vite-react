export type ColorScheme = 'light' | 'dark' | 'system';

export interface ThemeConfig {
  colorScheme: ColorScheme;
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';
  fontSize: 'sm' | 'md' | 'lg';
}

export type ThemeColors = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
  error: string;
  warning: string;
  success: string;
  info: string;
};

export interface Theme {
  config: ThemeConfig;
  colors: ThemeColors;
}