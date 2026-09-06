import type { HTMLAttributes, ReactNode } from 'react';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
}

export function Heading({
  children,
  level = 2,
  className = '',
  ...props
}: HeadingProps) {
  const sizeStyles = {
    1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#484848] leading-[1.1]',
    2: 'text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#484848] leading-tight',
    3: 'text-xl sm:text-2xl font-semibold tracking-tight text-[#484848] leading-snug',
    4: 'text-lg sm:text-xl font-semibold tracking-tight text-[#484848] leading-snug',
  };

  const Component = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4';

  return (
    <Component
      className={`${sizeStyles[level]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

