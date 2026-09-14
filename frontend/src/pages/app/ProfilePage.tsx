import { useParams } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export function ProfilePage() {
  const { userId } = useParams<{ userId?: string }>();

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-[#f0f0f0]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#484848]">
              {userId === 'me' ? 'My Profile' : `Student Profile: ${userId || 'Student'}`}
            </h1>
            <Badge variant="accent" className="text-xs">
              Verified Student
            </Badge>
          </div>
          <p className="text-sm text-[#5f6368]">
            Skills, competition history, and verified university credentials will appear here.
          </p>
        </div>

        <Badge variant="outline" className="self-start sm:self-center text-xs">
          Coming in Phase 5
        </Badge>
      </div>

      <Card variant="white" radius="large" className="p-8 space-y-4 text-center">
        <div className="mx-auto h-12 w-12 rounded-2xl bg-[#007aff]/10 flex items-center justify-center text-[#007aff]">
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-[#484848]">
          Profile Management ({userId || 'default'})
        </h2>
        <p className="text-sm text-[#5f6368] max-w-md mx-auto">
          In Phase 5, students can showcase verified technical proficiencies, portfolio repositories, hackathon interests, and weekly commitment availability.
        </p>
      </Card>
    </div>
  );
}
