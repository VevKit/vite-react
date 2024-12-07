import { useState, useCallback, useRef, useEffect, type ReactElement } from 'react';

import { getMenuStyles } from '@/theme/variants/menu';
import { cn } from '@/utils/styles';

import type { MenuProps } from './types';

const Menu = ({
  variant = 'default',
  align = 'start',
  label,
  icon,
  isNested,
  children,
  className,
}: MenuProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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

  const styles = getMenuStyles({ variant, align, isOpen, isNested });

  return (
    <div ref={menuRef} className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center space-x-2 rounded-sm px-2 py-1.5',
          'hover:bg-accent hover:text-accent-foreground',
          'focus:bg-accent focus:text-accent-foreground'
        )}
      >
        {icon && <span className="h-4 w-4">{icon}</span>}
        <span>{label}</span>
      </button>
      {isOpen && (
        <div
          className={cn(
            styles.base,
            styles.variant,
            styles.align,
            styles.state,
            styles.nested,
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Menu;
