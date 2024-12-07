import { useEffect, useCallback, useRef, type ReactElement } from 'react';

import { modalStore } from '@/components/ui/core/modal/store';
import { getModalStyles } from '@/theme/variants/modal';
import { cn } from '@/utils/styles';

import type { ModalProps } from './types';

const Modal = ({
  id,
  isOpen,
  size = 'md',
  fullScreen = false,
  title,
  description,
  onClose = () => modalStore.pop(id),
  children,
  className,
}: ModalProps): ReactElement | null => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen && onClose) {
        onClose();
      }
    },
    [isOpen, onClose]
  );

  // Handle click outside
  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node) && onClose) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Add click listener after a small delay to prevent immediate closing
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);

      document.body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleEscape);
        document.removeEventListener('mousedown', handleClickOutside);
        clearTimeout(timeoutId);
      };
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleEscape, handleClickOutside]);

  const styles = getModalStyles({ size, fullScreen, isOpen });

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className={cn(styles.overlay.base, styles.overlay.state)} aria-hidden="true" />

      {/* Modal */}
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? `${id}-title` : undefined}
        aria-describedby={description ? `${id}-description` : undefined}
        className={cn(styles.container.base, styles.container.size, styles.container.state)}
      >
        <div className={cn(styles.content, 'p-6', className)}>
          {/* Header */}
          {(title || description) && (
            <div className="mb-6">
              {title && (
                <h2
                  id={`${id}-title`}
                  className="text-lg font-semibold leading-none tracking-tight"
                >
                  {title}
                </h2>
              )}
              {description && (
                <p id={`${id}-description`} className="mt-2 text-sm text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          )}

          {/* Content */}
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
