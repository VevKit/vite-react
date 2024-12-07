import type { MenuVariant, MenuAlignment } from './types';

type MenuVariantStyles = {
  [K in MenuVariant]: {
    container: string;
    item: string;
  };
};

type MenuAlignStyles = {
  [K in MenuAlignment]: string;
};

export const MENU_VARIANTS: MenuVariantStyles = {
  default: {
    container: 'bg-background shadow-lg ring-1 ring-black/5',
    item: 'hover:bg-accent hover:text-accent-foreground',
  },
  bordered: {
    container: 'bg-background border border-border',
    item: 'hover:bg-muted/50',
  },
} as const;

export const MENU_ALIGNMENTS: MenuAlignStyles = {
  start: 'left-0',
  center: 'left-1/2 -translate-x-1/2',
  end: 'right-0',
} as const;

export const MENU_BASE_STYLES = 'z-50 min-w-[12rem] overflow-hidden rounded-md p-1' as const;

export const MENU_ITEM_BASE_STYLES =
  'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors' as const;

export const MENU_ITEM_ICON_STYLES = 'mr-2 h-4 w-4' as const;

export const MENU_ITEM_SHORTCUT_STYLES =
  'ml-auto text-xs tracking-widest text-muted-foreground' as const;
