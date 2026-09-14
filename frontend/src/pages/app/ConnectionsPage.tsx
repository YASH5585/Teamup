import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export function ConnectionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-[#f0f0f0]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#484848]">
              Connections
            </h1>
            <Badge variant="neutral" className="text-xs">
              Network
            </Badge>
          </div>
          <p className="text-sm text-[#5f6368]">
            Your teammate connections will appear here.
          </p>
        </div>

        <Badge variant="outline" className="self-start sm:self-center text-xs">
          Coming in a later phase
        </Badge>
      </div>

      <Card variant="white" radius="large" className="p-8 space-y-4 text-center">
        <div className="mx-auto h-12 w-12 rounded-2xl bg-[#007aff]/10 flex items-center justify-center text-[#007aff]">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-[#484848]">
          Connected Teammates &amp; Invites
        </h2>
        <p className="text-sm text-[#5f6368] max-w-md mx-auto">
          Manage accepted team invites, student connection requests, and collaborative contacts across past and upcoming competitions.
        </p>
      </Card>
    </div>
  );
}
