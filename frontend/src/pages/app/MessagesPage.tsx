import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export function MessagesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-[#f0f0f0]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#484848]">
              Messages
            </h1>
            <Badge variant="neutral" className="text-xs">
              Chat
            </Badge>
          </div>
          <p className="text-sm text-[#5f6368]">
            Your conversations will appear here.
          </p>
        </div>

        <Badge variant="outline" className="self-start sm:self-center text-xs">
          Coming in a later phase
        </Badge>
      </div>

      <Card variant="white" radius="large" className="p-8 space-y-4 text-center">
        <div className="mx-auto h-12 w-12 rounded-2xl bg-[#007aff]/10 flex items-center justify-center text-[#007aff]">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-[#484848]">
          Direct Team &amp; Teammate Messaging
        </h2>
        <p className="text-sm text-[#5f6368] max-w-md mx-auto">
          In Phase 8, direct messaging and team group chats will provide safe, verified channels to align on project scopes and hackathon logistics.
        </p>
      </Card>
    </div>
  );
}
