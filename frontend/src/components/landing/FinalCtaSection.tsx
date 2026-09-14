import { Link } from 'react-router-dom';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';

export function FinalCtaSection() {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="w-full pb-20 sm:pb-28 lg:pb-36"
    >
      <Container size="default">
        <div className="relative overflow-hidden rounded-3xl sm:rounded-[40px] border border-[#e8e8e8] bg-white p-8 sm:p-14 lg:p-16 shadow-subtle text-center">
          {/* Subtle accent backdrop highlight */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-[#007aff]/5 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6 sm:space-y-8">
            {/* Context Badge */}
            <div>
              <Badge
                variant="accent"
                dot
                className="px-3.5 py-1 text-xs font-semibold uppercase tracking-wider"
              >
                Get Started Today
              </Badge>
            </div>

            {/* Main Headline */}
            <h2
              id="final-cta-heading"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-[#484848] leading-[1.15]"
            >
              Your next great team starts here.
            </h2>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-xl text-[#5f6368] max-w-2xl leading-relaxed">
              Bring the people you already know, find the skills you’re missing,
              and build a team ready for the next challenge.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-2 w-full sm:w-auto">
              <Link to="/register" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold shadow-sm hover:shadow-md transition-all"
                >
                  Find Your Team
                </Button>
              </Link>

              <Link to="/dashboard" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-7 py-3.5 text-base font-medium text-[#484848] hover:bg-[#f0f0f0] border-[#c0c0c0]"
                >
                  Explore Competitions
                </Button>
              </Link>
            </div>

            {/* Supporting Reassurance Line */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#787878]">
              <span>Free for students</span>
              <span aria-hidden="true" className="text-[#c0c0c0]">•</span>
              <span>University email verification</span>
              <span aria-hidden="true" className="text-[#c0c0c0]">•</span>
              <span>No spam or public resume listings</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

