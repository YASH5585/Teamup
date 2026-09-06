import type { HTMLAttributes, ReactNode } from 'react';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'default' | 'full';
  className?: string;
}

export function Container({
  children,
  size = 'default',
  className = '',
  ...props
}: ContainerProps) {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-[1180px]',
    default: 'max-w-[1180px]',
    full: 'max-w-full',
  };

  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 lg:px-10 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
