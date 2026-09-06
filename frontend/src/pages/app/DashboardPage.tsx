import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageWrapper } from '../../components/common/PageWrapper';
import { Button } from '../../components/common/Button';

export function DashboardPage() {
  return (
    <PageWrapper>
      <Container size="lg">
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-[#f0f0f0]">
            <div>
              <h1 className="text-2xl font-bold text-[#484848]">Student Dashboard</h1>
              <p className="text-sm text-[#5f6368] mt-0.5">
                Overview of your teams, hackathons, and teammate recommendations.
              </p>
            </div>
            <div>
              <Link to="/">
                <Button variant="outline" size="sm">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-[#f0f0f0] bg-white p-6 shadow-sm space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#007aff]/10 flex items-center justify-center text-[#007aff] font-bold">
                01
              </div>
              <h2 className="text-lg font-semibold text-[#484848]">My Profile</h2>
              <p className="text-sm text-[#5f6368]">
                Showcase your skills, proficiencies, preferred roles, and projects.
              </p>
              <div className="pt-2 text-xs font-medium text-[#787878]">
                Profile creation incoming in Phase 5
              </div>
            </div>

            <div className="rounded-2xl border border-[#f0f0f0] bg-white p-6 shadow-sm space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#007aff]/10 flex items-center justify-center text-[#007aff] font-bold">
                02
              </div>
              <h2 className="text-lg font-semibold text-[#484848]">Active Teams</h2>
              <p className="text-sm text-[#5f6368]">
                Manage competition teams and inspect missing skills.
              </p>
              <div className="pt-2 text-xs font-medium text-[#787878]">
                Team management incoming in Phase 6
              </div>
            </div>

            <div className="rounded-2xl border border-[#f0f0f0] bg-white p-6 shadow-sm space-y-3">
              <div className="h-10 w-10 rounded-xl bg-[#007aff]/10 flex items-center justify-center text-[#007aff] font-bold">
                03
              </div>
              <h2 className="text-lg font-semibold text-[#484848]">Matching Engine</h2>
              <p className="text-sm text-[#5f6368]">
                Discover suitable teammates with rule-based compatibility scoring.
              </p>
              <div className="pt-2 text-xs font-medium text-[#787878]">
                Matching engine incoming in Phase 7
              </div>
            </div>
          </div>
        </div>
      </Container>
    </PageWrapper>
  );
}

