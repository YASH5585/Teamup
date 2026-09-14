import { useParams, Link } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export function CompetitionDetailsPage() {
  const { competitionId } = useParams<{ competitionId: string }>();

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Link
          to="/competitions"
          className="text-xs font-semibold text-[#5f6368] hover:text-[#007aff] transition-colors"
        >
          &larr; Back to Competitions
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-[#f0f0f0]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#484848]">
              Competition Details
            </h1>
            <Badge variant="accent" className="text-xs">
              ID: {competitionId}
            </Badge>
          </div>
          <p className="text-sm text-[#5f6368]">
            Detailed challenge overview, requirements, and team formation will appear here.
          </p>
        </div>

        <Badge variant="outline" className="self-start sm:self-center text-xs">
          Coming in a later phase
        </Badge>
      </div>

      <Card variant="white" radius="large" className="p-8 space-y-4 text-center">
        <div className="mx-auto h-12 w-12 rounded-2xl bg-[#007aff]/10 flex items-center justify-center text-[#007aff]">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="8" r="7" />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-[#484848]">
          Competition Workspace: {competitionId}
        </h2>
        <p className="text-sm text-[#5f6368] max-w-md mx-auto">
          When connected to the competition catalog, this page will show official tracks, submission deadlines, required team sizes, and recommended teammate search filters.
        </p>
      </Card>
    </div>
  );
}
