import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageWrapper } from '../../components/common/PageWrapper';
import { Button } from '../../components/common/Button';

export function NotFoundPage() {
  return (
    <PageWrapper>
      <Container size="sm">
        <div className="mx-auto max-w-md rounded-2xl border border-[#f0f0f0] bg-white p-8 sm:p-10 shadow-sm text-center">
          <div className="mx-auto h-12 w-12 rounded-2xl bg-[#007aff]/10 flex items-center justify-center text-[#007aff] font-bold mb-4">
            404
          </div>

          <h1 className="text-2xl font-bold text-[#484848]">Page Not Found</h1>
          <p className="text-sm text-[#5f6368] mt-2 mb-6">
            The page you are looking for does not exist or may have been moved.
          </p>

          <Link to="/">
            <Button variant="primary" size="md">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </Container>
    </PageWrapper>
  );
}
