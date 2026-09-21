import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageWrapper } from '../../components/common/PageWrapper';
import { Button } from '../../components/common/Button';
import { AuthCard } from '../../components/auth/AuthCard';
import { FormField } from '../../components/auth/FormField';
import { PasswordInput } from '../../components/auth/PasswordInput';

export function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: {
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};

    // Email validation
    const emailTrimmed = formData.email.trim();
    if (!emailTrimmed) {
      newErrors.email = 'University or college email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      newErrors.email = 'Please enter a valid email address format.';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulated UI submission transition
    setTimeout(() => {
      setIsSubmitting(false);
      // Navigate to verification flow passing email in navigation state (not in URL or storage)
      navigate('/verify-email', {
        state: { email: formData.email.trim() },
      });
    }, 450);
  };

  return (
    <PageWrapper>
      <Container size="sm">
        <AuthCard
          badge="Student Registration"
          title="Create an account"
          subtitle="Join TeamUp with your verified university credentials to find teammates for competitions."
          footer={
            <p className="text-xs text-[#5f6368]">
              Already have an account?{' '}
              <Link
                to="/login"
                className="font-semibold text-[#007aff] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] rounded-sm"
              >
                Sign in
              </Link>
            </p>
          }
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* University Email */}
            <FormField
              id="register-email"
              label="University / College Email"
              required
              hint="Use your official institutional email (e.g. name@university.edu)"
              error={errors.email}
            >
              <input
                id="register-email"
                type="email"
                name="email"
                autoComplete="email"
                disabled={isSubmitting}
                placeholder="student@university.edu"
                value={formData.email}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email
                    ? 'register-email-error'
                    : 'register-email-hint'
                }
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, email: e.target.value }));
                  if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                }}
                className={`w-full rounded-xl border bg-[#fafafa] px-3.5 py-2.5 text-sm text-[#484848] transition-colors placeholder:text-[#787878] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#007aff] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60 ${
                  errors.email
                    ? 'border-[#d93025] focus:ring-[#d93025]'
                    : 'border-[#c0c0c0]/70 hover:border-[#787878] focus:border-transparent'
                }`}
              />
            </FormField>

            {/* Password */}
            <FormField
              id="register-password"
              label="Password"
              required
              hint="Must be at least 8 characters"
              error={errors.password}
            >
              <PasswordInput
                id="register-password"
                name="password"
                autoComplete="new-password"
                disabled={isSubmitting}
                placeholder="Create a secure password"
                value={formData.password}
                hasError={Boolean(errors.password)}
                aria-invalid={Boolean(errors.password)}
                aria-describedby={
                  errors.password
                    ? 'register-password-error'
                    : 'register-password-hint'
                }
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, password: e.target.value }));
                  if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                }}
              />
            </FormField>

            {/* Confirm Password */}
            <FormField
              id="register-confirm-password"
              label="Confirm Password"
              required
              error={errors.confirmPassword}
            >
              <PasswordInput
                id="register-confirm-password"
                name="confirmPassword"
                autoComplete="new-password"
                disabled={isSubmitting}
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                hasError={Boolean(errors.confirmPassword)}
                aria-invalid={Boolean(errors.confirmPassword)}
                aria-describedby={
                  errors.confirmPassword ? 'register-confirm-password-error' : undefined
                }
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, confirmPassword: e.target.value }));
                  if (errors.confirmPassword) {
                    setErrors((prev) => ({ ...prev, confirmPassword: undefined }));
                  }
                }}
              />
            </FormField>

            {/* Institutional verification notice */}
            <div className="rounded-xl bg-[#fafafa] border border-[#f0f0f0] p-3 text-[11px] text-[#787878] leading-relaxed">
              <span className="font-semibold text-[#484848]">Student Verification:</span> A 6-digit one-time code will be dispatched to your email address. University domain validation is verified on the backend.
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              fullWidth
              size="md"
              loading={isSubmitting}
              className="mt-2 font-semibold shadow-sm"
            >
              Continue with OTP &rarr;
            </Button>
          </form>
        </AuthCard>
      </Container>
    </PageWrapper>
  );
}
