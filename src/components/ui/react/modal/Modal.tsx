// src/components/ui/react/Modal/Modal.tsx
import type { ReactElement } from 'react';
import { useEffect, useCallback } from 'react';

import { MODAL_SIZES, MODAL_POSITIONS } from '@/components/ui/core/modal/constants';
import type { ModalStyleProps } from '@/components/ui/core/modal/types';
import { cn } from '@/utils/styles';

interface ModalProps extends Partial<ModalStyleProps> {
  id: string;
  isOpen: boolean;
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export const Modal = ({
  id,
  isOpen,
  title,
  description,
  children,
  className,
  onClose,
  size = 'md',
  position = 'center',
  isFullScreen = false,
  noPadding = false,
}: ModalProps): ReactElement | null => {
  const handleClose = useCallback(() => {
    onClose?.();
  }, [onClose]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 backdrop-blur-sm z-50',
          'transition-opacity duration-200',
          isOpen ? 'opacity-100' : 'opacity-0'
        )}
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? `${id}-title` : undefined}
        aria-describedby={description ? `${id}-description` : undefined}
        className={cn(
          'fixed z-50',
          'bg-white rounded-lg shadow-lg',
          'focus:outline-none',
          'transition-all duration-200',
          MODAL_POSITIONS[position],
          !isFullScreen && MODAL_SIZES[size],
          isFullScreen && 'fixed inset-4',
          !noPadding && 'p-6',
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className={cn(
            'absolute top-4 right-4',
            'w-8 h-8 flex items-center justify-center',
            'rounded-full bg-gray-100 hover:bg-gray-200',
            'transition-colors duration-200'
          )}
          aria-label="Close modal"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        {(title || description) && (
          <div className={cn('mb-4', !noPadding && 'pr-8')}>
            {title && (
              <h2 id={`${id}-title`} className="text-lg font-semibold leading-none tracking-tight">
                {title}
              </h2>
            )}
            {description && (
              <p id={`${id}-description`} className="mt-2 text-sm text-gray-500">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        <div>{children}</div>
      </div>
    </>
  );
};
