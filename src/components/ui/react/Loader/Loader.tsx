import type { ReactElement } from 'react';

import { LOADER_ICONS, LOADER_DEFAULT_LABELS } from '@/components/ui/core/loader/constants';
import { getLoaderStyles } from '@/theme/variants/loader';
import { cn } from '@/utils/styles';

import type { LoaderProps } from './types';

const Loader = ({
  variant = 'spinner',
  size = 'md',
  label,
  labelPosition = 'right',
  className,
  ...props
}: LoaderProps): ReactElement => {
  const styles = getLoaderStyles({ variant, size });
  const defaultLabel = LOADER_DEFAULT_LABELS[variant];
  const icon = LOADER_ICONS[variant];

  return (
    <div role="status" className={cn(styles.base, styles.container, className)} {...props}>
      {labelPosition === 'left' && (label || defaultLabel) && (
        <span className={styles.text}>{label || defaultLabel}</span>
      )}

      <span className={cn(styles.icon, styles.animation, 'inline-block')} aria-hidden="true">
        {icon}
      </span>

      {labelPosition === 'right' && (label || defaultLabel) && (
        <span className={styles.text}>{label || defaultLabel}</span>
      )}

      <span className="sr-only">{label || defaultLabel}</span>
    </div>
  );
};

export default Loader;
