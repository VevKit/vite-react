import type { ComponentPropsWithoutRef } from 'react';

import type { InputBaseProps } from '@/components/ui/core/input/types';

export interface InputProps
  extends InputBaseProps,
    Omit<ComponentPropsWithoutRef<'input'>, keyof InputBaseProps> {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
