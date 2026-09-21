import { useState, forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';

export interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ hasError = false, className = '', disabled, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="relative flex items-center">
        <input
          ref={ref}
          type={showPassword ? 'text' : 'password'}
          disabled={disabled}
          className={`w-full rounded-xl border bg-[#fafafa] px-3.5 py-2.5 pr-10 text-sm text-[#484848] transition-colors placeholder:text-[#787878] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60 ${
            hasError
              ? 'border-[#d93025] focus:ring-[#d93025]'
              : 'border-[#c0c0c0]/70 hover:border-[#787878] focus:border-transparent'
          } ${className}`}
          {...props}
        />
        <button
          type="button"
          disabled={disabled}
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-2.5 p-1 text-[#787878] hover:text-[#484848] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] rounded-lg transition-colors disabled:opacity-50"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          aria-pressed={showPassword}
        >
          {showPassword ? (
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          ) : (
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';

