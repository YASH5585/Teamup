import { Link } from 'react-router-dom';
import { Container } from '../common/Container';

export function Footer() {
  return (
    <footer
      className="border-t border-[#f0f0f0] bg-[#fafafa] pt-14 pb-12 sm:pt-18 sm:pb-14"
      aria-labelledby="footer-brand"
    >
      <Container size="default">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-[#f0f0f0]">
          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-5 space-y-3.5">
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-xl font-bold tracking-tight text-[#484848] rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]"
              aria-label="TeamUp Home"
            >
              <span id="footer-brand">
                Team<span className="text-[#007aff]">Up</span>
              </span>
              <span
                className="h-1.5 w-1.5 rounded-full bg-[#007aff]"
                aria-hidden="true"
              />
            </Link>

            <p className="text-sm text-[#5f6368] leading-relaxed max-w-sm">
              Find the right teammates. Build something great.
            </p>
          </div>

          {/* Navigation Columns */}
          <nav
            className="md:col-span-7 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8"
            aria-label="Footer navigation"
          >
            {/* Product Column */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#484848]">
                Product
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="/#competitions"
                    className="text-[#5f6368] hover:text-[#484848] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] rounded-sm"
                  >
                    Competitions
                  </a>
                </li>
                <li>
                  <a
                    href="/#how-it-works"
                    className="text-[#5f6368] hover:text-[#484848] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] rounded-sm"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="text-[#5f6368] hover:text-[#484848] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] rounded-sm"
                  >
                    Find your team
                  </Link>
                </li>
              </ul>
            </div>

            {/* Account Column */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#484848]">
                Account
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link
                    to="/login"
                    className="text-[#5f6368] hover:text-[#484848] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] rounded-sm"
                  >
                    Log in
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="text-[#5f6368] hover:text-[#484848] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] rounded-sm"
                  >
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>

            {/* Information Column */}
            <div className="space-y-3 col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#484848]">
                Information
              </h3>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a
                    href="/#about"
                    className="text-[#5f6368] hover:text-[#484848] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] rounded-sm"
                  >
                    About TeamUp
                  </a>
                </li>
                <li>
                  <a
                    href="/#contact"
                    className="text-[#5f6368] hover:text-[#484848] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] rounded-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        {/* Footer Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#787878]">
          <p>&copy; 2026 TeamUp</p>
          <p>Built for university students.</p>
        </div>
      </Container>
    </footer>
  );
}
