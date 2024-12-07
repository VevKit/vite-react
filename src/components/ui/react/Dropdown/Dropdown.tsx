import { useState, useCallback, useRef, useEffect, type ReactElement } from 'react';

import { getDropdownStyles } from '@/theme/variants/dropdown';
import { cn } from '@/utils/styles';

import type { DropdownProps } from './types';

const Dropdown = ({
  trigger,
  children,
  position = 'bottom',
  align = 'start',
  fullWidth = false,
  onOpenChange,
  className,
}: DropdownProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  useEffect(() => {
    onOpenChange?.(isOpen);
  }, [isOpen, onOpenChange]);

  const styles = getDropdownStyles({ position, align, fullWidth, isOpen });

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <div onClick={handleToggle} className="cursor-pointer">
        {trigger}
      </div>
      <div
        className={cn(
          styles.base,
          styles.container,
          styles.align,
          styles.content,
          styles.fullWidth,
          styles.state,
          'transition-all duration-200',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
