import type { ReactNode } from 'react';

export interface AuthCardProps {
  title: string;
  subtitle?: string;
  badge?: string;
  children: ReactNode;
  footer?: ReactNode;
}

export function AuthCard({
  title,
  subtitle,
  badge,
  children,
  footer,
}: AuthCardProps) {
  return (
    <div className="mx-auto w-full max-w-md rounded-2xl sm:rounded-3xl border border-[#f0f0f0] bg-white p-6 sm:p-8 shadow-sm">
      <div className="text-center mb-6">
        {badge && (
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#007aff]/10 px-3 py-1 text-xs font-semibold text-[#007aff]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#007aff]" aria-hidden="true" />
            {badge}
          </div>
        )}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#484848]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-sm text-[#5f6368] mt-1.5 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      <div className="space-y-4">{children}</div>

      {footer && <div className="mt-6 border-t border-[#f0f0f0] pt-4 text-center">{footer}</div>}
    </div>
  );
}

