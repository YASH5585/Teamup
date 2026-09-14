import { Link } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';

export function CompetitionsPage() {
  const sampleCompetitions = [
    { id: 'hack-2026', title: 'National Student AI Hackathon', tag: 'Hackathon' },
    { id: 'robotics-cup', title: 'Autonomous Robotics Challenge', tag: 'Engineering' },
    { id: 'design-sprint', title: 'University Product Design Sprint', tag: 'Design' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-[#f0f0f0]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#484848]">
              Competitions
            </h1>
            <Badge variant="neutral" className="text-xs">
              Directory
            </Badge>
          </div>
          <p className="text-sm text-[#5f6368]">
            Discover competitions and challenges.
          </p>
        </div>

        <Badge variant="outline" className="self-start sm:self-center text-xs">
          Coming in a later phase
        </Badge>
      </div>

      {/* Placeholder list */}
      <div className="space-y-4">
        {sampleCompetitions.map((comp) => (
          <Card key={comp.id} variant="white" radius="default" className="p-5 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-[#484848]">{comp.title}</h2>
                <Badge variant="accent" className="text-[11px]">{comp.tag}</Badge>
              </div>
              <p className="text-xs text-[#787878] mt-1">ID: {comp.id} &bull; Team formation open</p>
            </div>
            <Link
              to={`/competitions/${comp.id}`}
              className="text-xs font-semibold text-[#007aff] hover:underline px-3 py-1.5 rounded-lg hover:bg-[#007aff]/5 transition-colors"
            >
              View Details &rarr;
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
