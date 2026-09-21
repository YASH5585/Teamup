import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageWrapper } from '../../components/common/PageWrapper';
import { Button } from '../../components/common/Button';
import { AuthCard } from '../../components/auth/AuthCard';
import { FormField } from '../../components/auth/FormField';
import { PasswordInput } from '../../components/auth/PasswordInput';

export function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: {
      email?: string;
      password?: string;
    } = {};

    const emailTrimmed = formData.email.trim();
    if (!emailTrimmed) {
      newErrors.email = 'University or college email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailTrimmed)) {
      newErrors.email = 'Please enter a valid email address format.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
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
      navigate('/dashboard');
    }, 450);
  };

  return (
    <PageWrapper>
      <Container size="sm">
        <AuthCard
          badge="Student Sign In"
          title="Welcome back"
          subtitle="Sign in to your TeamUp account to manage your teams and hackathons."
          footer={
            <p className="text-xs text-[#5f6368]">
              Don&apos;t have an account?{' '}
              <Link
                to="/register"
                className="font-semibold text-[#007aff] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] rounded-sm"
              >
                Register with college email
              </Link>
            </p>
          }
        >
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* University Email */}
            <FormField
              id="login-email"
              label="University / College Email"
              required
              hint="Enter your registered student email"
              error={errors.email}
            >
              <input
                id="login-email"
                type="email"
                name="email"
                autoComplete="email"
                disabled={isSubmitting}
                placeholder="student@university.edu"
                value={formData.email}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? 'login-email-error' : 'login-email-hint'
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
              id="login-password"
              label="Password"
              required
              error={errors.password}
            >
              <PasswordInput
                id="login-password"
                name="password"
                autoComplete="current-password"
                disabled={isSubmitting}
                placeholder="Enter your password"
                value={formData.password}
                hasError={Boolean(errors.password)}
                aria-invalid={Boolean(errors.password)}
                aria-describedby={
                  errors.password ? 'login-password-error' : undefined
                }
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, password: e.target.value }));
                  if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }));
                }}
              />
            </FormField>

            {/* Notice */}
            <div className="rounded-xl bg-[#fafafa] border border-[#f0f0f0] p-3 text-[11px] text-[#787878] leading-relaxed">
              <span className="font-semibold text-[#484848]">Authentication Preview:</span> Frontend form validation active. Live session token creation will connect to the FastAPI backend in Phase 4.
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
              Sign In &rarr;
            </Button>
          </form>
        </AuthCard>
      </Container>
    </PageWrapper>
  );
}
