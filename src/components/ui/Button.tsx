import React from 'react';
import type { ButtonProps } from '@/types/components';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
  onClick,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center';
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    ghost: 'bg-transparent hover:bg-gray-100'
  };
  const sizeClasses = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
      onClick={onClick}
      {...props}
    >
      {loading ? <span>Loading...</span> : children}
    </button>
  );
};

export default Button;