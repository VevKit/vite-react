import type { ComponentPropsWithoutRef } from 'react';

import type { LoaderBaseProps } from '@/components/ui/core/loader/types';

export interface LoaderProps
  extends LoaderBaseProps,
    Omit<ComponentPropsWithoutRef<'div'>, keyof LoaderBaseProps> {}
