export type DropdownTriggerAlign = 'start' | 'center' | 'end';
export type DropdownPosition = 'top' | 'bottom' | 'left' | 'right';

export interface DropdownStyleProps {
  position: DropdownPosition;
  align: DropdownTriggerAlign;
  fullWidth: boolean;
  isOpen: boolean;
}

export interface DropdownBaseProps {
  position?: DropdownPosition;
  align?: DropdownTriggerAlign;
  fullWidth?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}
