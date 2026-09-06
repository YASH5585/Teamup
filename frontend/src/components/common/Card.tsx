import type { HTMLAttributes, ReactNode } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: 'white' | 'muted' | 'outline';
  radius?: 'default' | 'large' | 'sm';
  className?: string;
}

export function Card({
  children,
  variant = 'white',
  radius = 'default',
  className = '',
  ...props
}: CardProps) {
  const variantStyles = {
    white: 'bg-white border border-[#f0f0f0] shadow-sm',
    muted: 'bg-[#f0f0f0]/60 border border-[#f0f0f0]',
    outline: 'bg-transparent border border-[#c0c0c0]/40',
  };

  const radiusStyles = {
    sm: 'rounded-xl',
    default: 'rounded-2xl sm:rounded-3xl',
    large: 'rounded-3xl sm:rounded-[44px]',
  };

  return (
    <div
      className={`p-6 sm:p-8 lg:p-10 transition-shadow duration-200 ${radiusStyles[radius]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

