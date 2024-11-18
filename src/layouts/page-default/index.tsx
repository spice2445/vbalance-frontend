import clsx from 'clsx';
import { ReactNode } from 'react';

import s from './style.module.scss';

interface PageDefaultLayoutProps {
  children?: ReactNode;
  lines?: ReactNode[];
  classesNameLines?: string[],
  className?: string;
}

export const PageDefaultLayout = ({
  lines,
  classesNameLines,
  children,
  className
}: PageDefaultLayoutProps) => (
  <div className={clsx(s.page, className)}>
    {lines?.map((line, index) => (
      <div key={index} className={clsx(s.line, classesNameLines?.[index])}>
        {line}
      </div>
    ))}

    {children}
  </div>
);
