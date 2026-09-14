import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageWrapper } from '../../components/common/PageWrapper';
import { Button } from '../../components/common/Button';

export function VerifyEmailPage() {
  return (
    <PageWrapper>
      <Container size="sm">
        <div className="mx-auto max-w-md rounded-2xl border border-[#f0f0f0] bg-white p-8 shadow-sm text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-[#007aff]/10 flex items-center justify-center text-[#007aff] mb-4">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-[#484848]">Check your inbox</h1>
          <p className="text-sm text-[#5f6368] mt-1.5">
            We send a 6-digit verification code to your verified university email address.
          </p>

          <div className="my-6 p-4 rounded-xl bg-[#fafafa] border border-[#f0f0f0] text-xs text-[#787878]">
            OTP email verification will be fully connected in Phase 4 (Authentication).
          </div>

          <div className="space-y-3">
            <Link to="/login" className="block">
              <Button variant="primary" fullWidth>
                Back to Sign In
              </Button>
            </Link>
            <Link to="/" className="block text-xs text-[#5f6368] hover:text-[#484848]">
              Return to Homepage
            </Link>
          </div>
        </div>
      </Container>
    </PageWrapper>
  );
}
