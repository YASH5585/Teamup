import { Container } from '../common/Container';
import { Card } from '../common/Card';
import { Badge } from '../common/Badge';

export function TrustSection() {
  const trustPrinciples = [
    {
      title: 'Verified Students',
      tag: 'University Identity',
      description:
        'Students register using their university or college email, ensuring the platform remains authentic, trusted, and strictly student-focused.',
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
    },
    {
      title: 'Transparent Matching',
      tag: 'Objective Criteria',
      description:
        'Recommendations are driven by clear, understandable factors—skills, complementary roles, prior project experience, and schedule availability—not an opaque black box.',
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="4" y1="21" x2="4" y2="14" />
          <line x1="4" y1="10" x2="4" y2="3" />
          <line x1="12" y1="21" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12" y2="3" />
          <line x1="20" y1="21" x2="20" y2="16" />
          <line x1="20" y1="12" x2="20" y2="3" />
          <line x1="1" y1="14" x2="7" y2="14" />
          <line x1="9" y1="8" x2="15" y2="8" />
          <line x1="17" y1="16" x2="23" y2="16" />
        </svg>
      ),
    },
    {
      title: 'Student First',
      tag: 'Privacy & Control',
      description:
        'Built specifically for students forming teams for competitions, keeping personal profiles, skill inventories, and team outreach firmly in your control.',
      icon: (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="trust-heading"
      className="w-full pb-16 sm:pb-24 lg:pb-32 scroll-mt-20"
    >
      <Container size="default">
        <div className="flex flex-col items-center text-center space-y-4 mb-12 sm:mb-16">
          <Badge variant="neutral" className="text-xs font-semibold uppercase tracking-wider text-[#5f6368]">
            Trust & Principles
          </Badge>

          <h2
            id="trust-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#484848] leading-tight max-w-2xl"
          >
            Built around better teams.
          </h2>

          <p className="text-base sm:text-lg text-[#5f6368] max-w-2xl leading-relaxed">
            TeamUp focuses on helping university students find compatible teammates
            through verified student identity, transparent matching factors, and real skill relevance.
          </p>
        </div>

        {/* 3 Trust Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {trustPrinciples.map((item) => (
            <Card
              key={item.title}
              variant="white"
              radius="large"
              className="flex flex-col justify-between space-y-6 hover:border-[#c0c0c0] transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-10 w-10 rounded-2xl bg-[#007aff]/10 flex items-center justify-center text-[#007aff]">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium text-[#787878] tracking-wide">
                    {item.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#484848] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5f6368] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

