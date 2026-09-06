import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative w-full pt-10 sm:pt-16 md:pt-20 lg:pt-24 pb-16 sm:pb-24 lg:pb-32 overflow-hidden"
    >
      <Container size="default">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Subtle Context Tag */}
          <div>
            <Badge variant="accent" dot className="px-3.5 py-1.5 text-xs sm:text-sm font-medium">
              Made for University Hackathons & Competitions
            </Badge>
          </div>

          {/* Main Editorial Headline */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[96px] font-bold tracking-[-0.035em] text-[#484848] leading-[1.08] sm:leading-[1.05]"
          >
            Find the right team.
            <span className="block text-[#484848]/90 mt-1 sm:mt-2">
              Build something great.
            </span>
          </h1>

          {/* Value Proposition Description */}
          <p className="text-base sm:text-lg md:text-xl text-[#5f6368] max-w-2xl leading-relaxed sm:leading-relaxed font-normal">
            TeamUp connects college students with compatible teammates based on
            verified skills, roles, previous project experience, and competition
            goals.
          </p>

          {/* Balanced Call-to-Action Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 sm:pt-4 w-full sm:w-auto">
            <Link to="/register" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold shadow-sm hover:shadow-md transition-all"
              >
                Find Your Team
              </Button>
            </Link>

            <a href="#how-it-works" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-7 py-3.5 text-base font-medium text-[#484848] hover:bg-[#f0f0f0] border-[#c0c0c0]"
              >
                How It Works
              </Button>
            </a>
          </div>

          {/* Reassurance Micro-Copy */}
          <div className="pt-4 sm:pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#787878] font-medium">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#007aff]" aria-hidden="true" />
              Verified with university email
            </span>
            <span className="hidden sm:inline text-[#c0c0c0]">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#007aff]" aria-hidden="true" />
              Transparent skill matching
            </span>
            <span className="hidden sm:inline text-[#c0c0c0]">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#007aff]" aria-hidden="true" />
              100% free for students
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}

