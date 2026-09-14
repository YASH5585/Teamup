import { Link } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-[#f0f0f0]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#484848]">
              Student Dashboard
            </h1>
            <Badge variant="accent" className="text-xs">
              Phase 3.1
            </Badge>
          </div>
          <p className="text-sm text-[#5f6368]">
            Your TeamUp workspace will appear here.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/competitions"
            className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-[#007aff] text-white hover:bg-[#0066d6] transition-colors shadow-sm"
          >
            Browse Competitions
          </Link>
        </div>
      </div>

      {/* Temporary Workspace Placeholder Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card variant="white" radius="large" className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#007aff] uppercase tracking-wider">
              Workspace
            </span>
            <Badge variant="outline" className="text-[11px]">
              Coming soon
            </Badge>
          </div>
          <h2 className="text-lg font-bold text-[#484848]">Active Squads</h2>
          <p className="text-sm text-[#5f6368]">
            Formed teams, roster roles, and missing skill analysis.
          </p>
        </Card>

        <Card variant="white" radius="large" className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#007aff] uppercase tracking-wider">
              Discovery
            </span>
            <Badge variant="outline" className="text-[11px]">
              Coming soon
            </Badge>
          </div>
          <h2 className="text-lg font-bold text-[#484848]">Matches &amp; Invites</h2>
          <p className="text-sm text-[#5f6368]">
            Personalized recommendations based on complementary skills.
          </p>
        </Card>

        <Card variant="white" radius="large" className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#007aff] uppercase tracking-wider">
              Verification
            </span>
            <Badge variant="outline" className="text-[11px]">
              Coming soon
            </Badge>
          </div>
          <h2 className="text-lg font-bold text-[#484848]">Profile Inventory</h2>
          <p className="text-sm text-[#5f6368]">
            Verified university credentials, GitHub links, and past projects.
          </p>
        </Card>
      </div>

      {/* Note Callout */}
      <div className="p-4 rounded-2xl bg-white border border-[#f0f0f0] text-xs text-[#787878] flex items-center justify-between">
        <span>Application shell and navigation initialized. Functional capabilities will be connected in subsequent phases.</span>
        <span className="font-semibold text-[#007aff]">Phase 3.1</span>
      </div>
    </div>
  );
}
