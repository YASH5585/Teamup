import { useState, useEffect } from 'react';
import type { FormEvent } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageWrapper } from '../../components/common/PageWrapper';
import { Button } from '../../components/common/Button';
import { AuthCard } from '../../components/auth/AuthCard';
import { OtpInput } from '../../components/auth/OtpInput';

const TOTAL_EXPIRY_SECONDS = 180; // 3 minutes
const RESEND_COOLDOWN_SECONDS = 60; // 60 seconds
const MAX_ATTEMPTS = 5;

export function VerifyEmailPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get email from navigation state if available
  const email = (location.state as { email?: string } | null)?.email || '';

  const [otp, setOtp] = useState('');
  const [expirySeconds, setExpirySeconds] = useState(TOTAL_EXPIRY_SECONDS);
  const [resendCooldown, setResendCooldown] = useState(RESEND_COOLDOWN_SECONDS);
  const [attempts, setAttempts] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Expiration countdown timer
  useEffect(() => {
    if (isSuccess || expirySeconds <= 0) return;

    const timer = setInterval(() => {
      setExpirySeconds((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [isSuccess, expirySeconds]);

  // Resend cooldown timer
  useEffect(() => {
    if (isSuccess || resendCooldown <= 0) return;

    const timer = setInterval(() => {
      setResendCooldown((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [isSuccess, resendCooldown]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResend = () => {
    if (resendCooldown > 0) return;

    // Reset local UI timers and clear previous attempt errors
    setResendCooldown(RESEND_COOLDOWN_SECONDS);
    setExpirySeconds(TOTAL_EXPIRY_SECONDS);
    setOtp('');
    setErrorMessage(null);
    setAttempts(0);
  };

  const handleVerify = (e: FormEvent) => {
    e.preventDefault();

    if (otp.length !== 6) {
      setErrorMessage('Please enter the full 6-digit verification code.');
      return;
    }

    if (expirySeconds <= 0) {
      setErrorMessage('Verification code has expired. Please request a new code.');
      return;
    }

    if (attempts >= MAX_ATTEMPTS) {
      setErrorMessage('Maximum verification attempts reached. Please request a new code.');
      return;
    }

    setAttempts((prev) => prev + 1);
    setIsSubmitting(true);
    setErrorMessage(null);

    // Simulated verification transition
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  if (isSuccess) {
    return (
      <PageWrapper>
        <Container size="sm">
          <AuthCard
            badge="Verified"
            title="Demo Verification Complete"
            subtitle="Your email code was confirmed in this frontend demonstration."
            footer={
              <p className="text-xs text-[#5f6368]">
                Need to test again?{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsSuccess(false);
                    setOtp('');
                    setExpirySeconds(TOTAL_EXPIRY_SECONDS);
                    setResendCooldown(RESEND_COOLDOWN_SECONDS);
                    setAttempts(0);
                  }}
                  className="font-semibold text-[#007aff] hover:underline"
                >
                  Restart Demo Flow
                </button>
              </p>
            }
          >
            <div className="space-y-4 text-center">
              <div className="mx-auto h-12 w-12 rounded-2xl bg-[#007aff]/10 flex items-center justify-center text-[#007aff]">
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>

              <div className="rounded-xl bg-[#fafafa] border border-[#f0f0f0] p-4 text-xs text-[#5f6368] text-left leading-relaxed">
                <span className="font-semibold text-[#484848] block mb-1">
                  Architecture Note:
                </span>
                In Phase 4, the FastAPI backend will validate the code hash, issue the JWT access token, and activate your student account.
              </div>

              <div className="pt-2 space-y-2.5">
                <Button
                  variant="primary"
                  fullWidth
                  size="md"
                  onClick={() => navigate('/dashboard')}
                >
                  Continue to Student Dashboard &rarr;
                </Button>
                <Button
                  variant="outline"
                  fullWidth
                  size="md"
                  onClick={() => navigate('/login')}
                >
                  Go to Sign In
                </Button>
              </div>
            </div>
          </AuthCard>
        </Container>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Container size="sm">
        <AuthCard
          badge="Email Verification"
          title="Check your inbox"
          subtitle={
            email
              ? `We sent a 6-digit one-time code to ${email}`
              : 'Enter the 6-digit verification code sent to your university email address.'
          }
          footer={
            <div className="flex items-center justify-between text-xs text-[#5f6368]">
              <Link
                to="/register"
                className="hover:text-[#484848] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] rounded-sm"
              >
                &larr; Change email
              </Link>
              <Link
                to="/login"
                className="font-semibold text-[#007aff] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] rounded-sm"
              >
                Sign in
              </Link>
            </div>
          }
        >
          <form onSubmit={handleVerify} noValidate className="space-y-5">
            {/* 6-Digit Segmented OTP Input */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-[#484848] text-center">
                6-Digit Verification Code
              </label>
              <OtpInput
                value={otp}
                onChange={(val) => {
                  setOtp(val);
                  if (errorMessage) setErrorMessage(null);
                }}
                disabled={isSubmitting || attempts >= MAX_ATTEMPTS || expirySeconds <= 0}
                hasError={Boolean(errorMessage)}
              />
            </div>

            {/* Error message */}
            {errorMessage && (
              <p
                role="alert"
                className="text-xs text-[#d93025] flex items-center justify-center gap-1 font-medium text-center"
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
                <span>{errorMessage}</span>
              </p>
            )}

            {/* Timers & Limits Status Bar */}
            <div className="rounded-xl bg-[#fafafa] border border-[#f0f0f0] p-3.5 space-y-2 text-xs text-[#787878]">
              {/* Code Expiration (3-minute rule) */}
              <div className="flex items-center justify-between">
                <span>Code Expiry:</span>
                <span
                  className={`font-semibold ${
                    expirySeconds <= 30 ? 'text-[#d93025]' : 'text-[#484848]'
                  }`}
                >
                  {expirySeconds > 0
                    ? formatTime(expirySeconds)
                    : 'Expired'}
                </span>
              </div>

              {/* Attempts Limit (5-attempt rule) */}
              <div className="flex items-center justify-between">
                <span>Attempts:</span>
                <span className="font-medium text-[#484848]">
                  {attempts} of {MAX_ATTEMPTS} used
                </span>
              </div>

              {/* Resend Action (60s cooldown rule) */}
              <div className="pt-2 border-t border-[#f0f0f0] flex items-center justify-between">
                <span>Didn&apos;t get the code?</span>
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={resendCooldown > 0 || isSubmitting}
                  className="font-semibold text-[#007aff] hover:underline disabled:text-[#787878] disabled:no-underline disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] rounded-sm"
                >
                  {resendCooldown > 0
                    ? `Resend in ${resendCooldown}s`
                    : 'Resend Code'}
                </button>
              </div>
            </div>

            {/* Backend Authority Note */}
            <p className="text-[11px] text-[#787878] text-center leading-relaxed">
              Expiry timers (3m), attempt limits (5 max), and resend cooldowns (60s) will be enforced by the backend service.
            </p>

            {/* Verify Button */}
            <Button
              type="submit"
              variant="primary"
              fullWidth
              size="md"
              loading={isSubmitting}
              disabled={otp.length !== 6 || expirySeconds <= 0 || attempts >= MAX_ATTEMPTS}
              className="font-semibold shadow-sm"
            >
              Verify Code &rarr;
            </Button>
          </form>
        </AuthCard>
      </Container>
    </PageWrapper>
  );
}
