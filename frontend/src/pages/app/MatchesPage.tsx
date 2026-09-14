import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export function MatchesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-[#f0f0f0]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#484848]">
              Your Matches
            </h1>
            <Badge variant="neutral" className="text-xs">
              Recommendations
            </Badge>
          </div>
          <p className="text-sm text-[#5f6368]">
            Recommended teammates will appear here.
          </p>
        </div>

        <Badge variant="outline" className="self-start sm:self-center text-xs">
          Coming in a later phase
        </Badge>
      </div>

      <Card variant="white" radius="large" className="p-8 space-y-4 text-center">
        <div className="mx-auto h-12 w-12 rounded-2xl bg-[#007aff]/10 flex items-center justify-center text-[#007aff]">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="m4.93 4.93 4.24 4.24" />
            <path d="m14.83 9.17 4.24-4.24" />
            <path d="m14.83 14.83 4.24 4.24" />
            <path d="m9.17 14.83-4.24 4.24" />
            <circle cx="12" cy="12" r="2" />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-[#484848]">
          Teammate Recommendations
        </h2>
        <p className="text-sm text-[#5f6368] max-w-md mx-auto">
          In Phase 7, rule-based matching algorithms will evaluate skill synergy, role complementarity, and schedule alignment to present candidate suggestions.
        </p>
      </Card>
    </div>
  );
}
