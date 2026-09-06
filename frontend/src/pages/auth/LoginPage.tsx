import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageWrapper } from '../../components/common/PageWrapper';
import { Button } from '../../components/common/Button';

export function LoginPage() {
  return (
    <PageWrapper>
      <Container size="sm">
        <div className="mx-auto max-w-md rounded-2xl border border-[#f0f0f0] bg-white p-8 shadow-sm">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-[#484848]">Welcome back</h1>
            <p className="text-sm text-[#5f6368] mt-1">
              Sign in to your TeamUp account
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#484848] mb-1.5">
                University Email
              </label>
              <input
                type="email"
                disabled
                placeholder="student@university.edu"
                className="w-full px-3.5 py-2 text-sm rounded-lg border border-[#c0c0c0] bg-[#fafafa] text-[#787878] cursor-not-allowed"
              />
            </div>

            <div className="rounded-lg bg-[#f0f0f0] p-3 text-xs text-[#5f6368] text-center">
              Authentication functionality will be implemented in Phase 4.
            </div>

            <Button variant="primary" fullWidth disabled>
              Sign In
            </Button>
          </div>

          <div className="mt-6 text-center text-xs text-[#5f6368]">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold text-[#007aff] hover:underline">
              Register with college email
            </Link>
          </div>
        </div>
      </Container>
    </PageWrapper>
  );
}

