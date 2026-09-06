import type { HTMLAttributes, ReactNode } from 'react';

export interface PageWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function PageWrapper({
  children,
  className = '',
  ...props
}: PageWrapperProps) {
  return (
    <div
      className={`py-8 sm:py-12 md:py-16 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

