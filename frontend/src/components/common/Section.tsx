import type { HTMLAttributes, ReactNode } from 'react';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'none';
  className?: string;
}

export function Section({
  children,
  size = 'md',
  className = '',
  ...props
}: SectionProps) {
  const spacingStyles = {
    none: '',
    sm: 'py-12 sm:py-16',
    md: 'py-16 sm:py-24',
    lg: 'py-20 sm:py-28 lg:py-32',
  };

  return (
    <section
      className={`w-full ${spacingStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

