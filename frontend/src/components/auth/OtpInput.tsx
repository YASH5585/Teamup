import { useRef, useEffect } from 'react';
import type { ChangeEvent, KeyboardEvent, ClipboardEvent } from 'react';

export interface OtpInputProps {
  value: string;
  onChange: (value: string) => void;
  length?: number;
  disabled?: boolean;
  hasError?: boolean;
  autoFocus?: boolean;
}

export function OtpInput({
  value,
  onChange,
  length = 6,
  disabled = false,
  hasError = false,
  autoFocus = true,
}: OtpInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Split value into array of single digits
  const digits = Array.from({ length }, (_, i) => value[i] || '');

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  const handleDigitChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value.replace(/\D/g, '');
    if (!rawVal) {
      // Empty / cleared
      const newDigits = [...digits];
      newDigits[index] = '';
      onChange(newDigits.join(''));
      return;
    }

    if (rawVal.length > 1) {
      // Handle mobile multi-char input/autofill
      const clean = rawVal.slice(0, length);
      onChange(clean);
      const nextIndex = Math.min(clean.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    // Single digit input
    const newDigits = [...digits];
    newDigits[index] = rawVal[0];
    const newOtp = newDigits.join('');
    onChange(newOtp);

    // Auto-advance to next input
    if (index < length - 1 && rawVal) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!digits[index] && index > 0) {
        // Current is already empty, move to previous and clear it
        const newDigits = [...digits];
        newDigits[index - 1] = '';
        onChange(newDigits.join(''));
        inputRefs.current[index - 1]?.focus();
        e.preventDefault();
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
      e.preventDefault();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
      e.preventDefault();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    if (!pastedData) return;

    onChange(pastedData);
    const focusTarget = Math.min(pastedData.length, length - 1);
    inputRefs.current[focusTarget]?.focus();
  };

  return (
    <div
      role="group"
      aria-label="6-digit verification code"
      className="flex items-center justify-center gap-2 sm:gap-3"
    >
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          autoComplete={index === 0 ? 'one-time-code' : 'off'}
          disabled={disabled}
          value={digits[index]}
          aria-label={`Digit ${index + 1} of ${length}`}
          onChange={(e) => handleDigitChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className={`h-12 w-11 sm:h-14 sm:w-12 text-center text-lg sm:text-xl font-bold rounded-xl border bg-[#fafafa] text-[#484848] transition-all focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60 ${
            hasError
              ? 'border-[#d93025] focus:ring-[#d93025]'
              : digits[index]
              ? 'border-[#007aff] bg-white'
              : 'border-[#c0c0c0]/70 hover:border-[#787878]'
          }`}
        />
      ))}
    </div>
  );
}

