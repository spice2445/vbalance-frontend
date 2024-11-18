import { clsx } from 'clsx';
import { memo } from 'react';

import s from './style.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo(({ className, onClick }: OverlayProps) => (
  <div
    onClick={onClick}
    aria-hidden='true'
    className={clsx(className, s.overlay)}
  />
));
