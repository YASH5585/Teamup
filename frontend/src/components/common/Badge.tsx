import type { HTMLAttributes, ReactNode } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'neutral' | 'accent' | 'outline';
  dot?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = 'neutral',
  dot = false,
  className = '',
  ...props
}: BadgeProps) {
  const variantStyles = {
    neutral: 'bg-[#f0f0f0] text-[#484848]',
    accent: 'bg-[#007aff]/10 text-[#007aff]',
    outline: 'border border-[#c0c0c0]/50 text-[#5f6368]',
  };

  const dotStyles = {
    neutral: 'bg-[#787878]',
    accent: 'bg-[#007aff]',
    outline: 'bg-[#787878]',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium tracking-wide ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {dot && <span className={`h-1.5 w-1.5 rounded-full ${dotStyles[variant]}`} />}
      {children}
    </span>
  );
}

