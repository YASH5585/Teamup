import type { ReactNode } from 'react';

export interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: ReactNode;
}

export function FormField({
  id,
  label,
  required = false,
  hint,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="space-y-1.5 text-left">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-xs font-semibold text-[#484848] tracking-wide"
        >
          {label}
          {required && <span className="text-[#007aff] ml-1" aria-hidden="true">*</span>}
        </label>
        {required && (
          <span className="text-[11px] text-[#787878]">Required</span>
        )}
      </div>

      {children}

      {hint && !error && (
        <p id={`${id}-hint`} className="text-[11px] text-[#787878] leading-tight">
          {hint}
        </p>
      )}

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="text-xs text-[#d93025] flex items-center gap-1 mt-1 font-medium"
        >
          <svg
            className="h-3.5 w-3.5 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}

