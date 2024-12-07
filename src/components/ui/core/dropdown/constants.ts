import type { DropdownPosition, DropdownTriggerAlign } from './types';

type DropdownPositionStyles = {
  [K in DropdownPosition]: {
    container: string;
    content: string;
  };
};

type DropdownAlignStyles = {
  [K in DropdownTriggerAlign]: string;
};

export const DROPDOWN_POSITIONS: DropdownPositionStyles = {
  top: {
    container: 'bottom-full mb-2',
    content: 'animate-in slide-in-from-bottom-2',
  },
  bottom: {
    container: 'top-full mt-2',
    content: 'animate-in slide-in-from-top-2',
  },
  left: {
    container: 'right-full mr-2',
    content: 'animate-in slide-in-from-right-2',
  },
  right: {
    container: 'left-full ml-2',
    content: 'animate-in slide-in-from-left-2',
  },
} as const;

export const DROPDOWN_ALIGNMENTS: DropdownAlignStyles = {
  start: 'origin-top-start',
  center: 'origin-top',
  end: 'origin-top-end',
} as const;

export const DROPDOWN_BASE_STYLES =
  'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-background p-1 shadow-md' as const;
