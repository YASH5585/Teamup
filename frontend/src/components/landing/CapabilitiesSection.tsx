import { Container } from '../common/Container';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export function CapabilitiesSection() {
  const capabilities = [
    {
      id: '01',
      tag: 'Discovery',
      title: 'Find the right people',
      description:
        'Discover prospective teammates filtered by verified skill proficiencies, preferred roles, past competition experience, and weekly time commitments.',
      preview: (
        <div className="pt-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#fafafa] border border-[#f0f0f0] text-[#484848]">
            React & TypeScript
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#fafafa] border border-[#f0f0f0] text-[#484848]">
            PyTorch / ML
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#fafafa] border border-[#f0f0f0] text-[#484848]">
            UI/UX Design
          </span>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#007aff]/10 text-[#007aff]">
            Available 15 hrs/wk
          </span>
        </div>
      ),
    },
    {
      id: '02',
      tag: 'Team Management',
      title: 'Build a team & identify gaps',
      description:
        'Form your competition team, invite friends with college emails, and automatically detect which critical roles or technical skills are still missing.',
      preview: (
        <div className="pt-4 space-y-2">
          <div className="flex items-center justify-between text-xs font-medium text-[#5f6368]">
            <span>Squad Roster (3 / 4)</span>
            <span className="text-[#007aff]">1 Spot Open</span>
          </div>
          <div className="flex items-center gap-2 p-2.5 rounded-2xl bg-[#fafafa] border border-[#f0f0f0]">
            <span className="h-2 w-2 rounded-full bg-[#007aff]" aria-hidden="true" />
            <span className="text-xs font-medium text-[#484848]">
              Missing: Backend / Database Lead
            </span>
          </div>
        </div>
      ),
    },
    {
      id: '03',
      tag: 'Rule-Based Engine',
      title: 'Match by compatibility',
      description:
        'Receive objective compatibility recommendations calculated directly from competition needs, complementary skills, and candidate track records.',
      preview: (
        <div className="pt-4 p-3 rounded-2xl bg-[#fafafa] border border-[#f0f0f0] space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-[#484848]">Compatibility Fit (Illustrative)</span>
            <span className="text-[#007aff]">High Compatibility</span>
          </div>
          <div className="w-full bg-[#f0f0f0] rounded-full h-1.5 overflow-hidden">
            <div className="bg-[#007aff] h-1.5 rounded-full w-[90%]" />
          </div>
          <p className="text-[11px] text-[#787878]">
            Full coverage on missing database & API requirements
          </p>
        </div>
      ),
    },
    {
      id: '04',
      tag: 'Direct Communication',
      title: 'Connect & collaborate',
      description:
        'Send structured invitations and teammate requests. Once mutual fit is confirmed, connect directly with safe private team coordination.',
      preview: (
        <div className="pt-4 flex flex-col gap-2">
          <div className="flex items-center justify-between p-2.5 rounded-2xl bg-[#fafafa] border border-[#f0f0f0]">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#007aff]/15 text-[10px] font-bold text-[#007aff]">
                ✓
              </span>
              <span className="text-xs font-medium text-[#484848]">
                Team Invitation Accepted
              </span>
            </div>
            <span className="text-[11px] font-medium text-[#007aff]">
              Active
            </span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="competitions"
      aria-labelledby="capabilities-heading"
      className="w-full pb-16 sm:pb-24 lg:pb-32 scroll-mt-20"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12 sm:mb-16">
          <Badge
            variant="accent"
            dot
            className="text-xs font-semibold uppercase tracking-wider"
          >
            Product Capabilities
          </Badge>

          <h2
            id="capabilities-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#484848] leading-tight max-w-2xl"
          >
            Everything you need to build the right team.
          </h2>

          <p className="text-base sm:text-lg text-[#5f6368] max-w-2xl leading-relaxed">
            TeamUp guides students from an initial hackathon idea or competition
            challenge all the way to a balanced, competition-ready team.
          </p>
        </div>

        {/* 2x2 Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((cap) => (
            <Card
              key={cap.id}
              variant="white"
              radius="large"
              className="flex flex-col justify-between space-y-6 hover:border-[#c0c0c0] hover:shadow-sm transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#007aff] tracking-wider uppercase">
                    {cap.id}
                  </span>
                  <span className="text-xs font-medium text-[#787878] tracking-wide">
                    {cap.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#484848] tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5f6368] leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>
              </div>

              {/* Capability Micro-Visual Preview */}
              <div className="border-t border-[#f0f0f0] pt-2">
                {cap.preview}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
