import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageWrapper } from '../../components/common/PageWrapper';
import { Button } from '../../components/common/Button';

export function HomePage() {
  return (
    <PageWrapper>
      <Container size="md">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f0f0] text-xs font-medium text-[#484848]">
            <span className="h-2 w-2 rounded-full bg-[#007aff]" />
            Phase 1 — Frontend Foundation Active
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#484848] leading-tight max-w-2xl">
            Find the right teammates for your next hackathon
          </h1>

          <p className="text-base sm:text-lg text-[#5f6368] max-w-xl leading-relaxed">
            TeamUp helps university students discover compatible teammates based on skills, roles, and project experience.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link to="/register">
              <Button variant="primary" size="md">
                Get Started
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="md">
                Sign In
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full pt-10 text-left">
            <div className="p-5 rounded-xl border border-[#f0f0f0] bg-white shadow-sm">
              <div className="text-xs font-semibold text-[#007aff] uppercase tracking-wider mb-1">Step 1</div>
              <h3 className="text-base font-semibold text-[#484848] mb-1">Verified Profile</h3>
              <p className="text-xs text-[#5f6368]">Register with your university email and showcase your skill proficiencies.</p>
            </div>
            <div className="p-5 rounded-xl border border-[#f0f0f0] bg-white shadow-sm">
              <div className="text-xs font-semibold text-[#007aff] uppercase tracking-wider mb-1">Step 2</div>
              <h3 className="text-base font-semibold text-[#484848] mb-1">Team Skill Gaps</h3>
              <p className="text-xs text-[#5f6368]">Create or join a competition team and automatically identify missing roles.</p>
            </div>
            <div className="p-5 rounded-xl border border-[#f0f0f0] bg-white shadow-sm">
              <div className="text-xs font-semibold text-[#007aff] uppercase tracking-wider mb-1">Step 3</div>
              <h3 className="text-base font-semibold text-[#484848] mb-1">Smart Matching</h3>
              <p className="text-xs text-[#5f6368]">Transparent rule-based matching based on missing skills and experience.</p>
            </div>
          </div>
        </div>
      </Container>
    </PageWrapper>
  );
}

