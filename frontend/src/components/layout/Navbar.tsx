import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container } from '../common/Container';
import { Button } from '../common/Button';

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [openedOnPathname, setOpenedOnPathname] = useState<string | null>(null);
  const isMobileMenuOpen = openedOnPathname === location.pathname;

  // Track scroll position to apply subtle separation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setOpenedOnPathname(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setOpenedOnPathname((curr) => (curr === location.pathname ? null : location.pathname));
  }, [location.pathname]);

  const closeMenu = useCallback(() => {
    setOpenedOnPathname(null);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-[#fafafa]/85 backdrop-blur-md border-b border-[#f0f0f0] shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
          : 'bg-[#fafafa]/60 backdrop-blur-xs border-b border-transparent'
      }`}
    >
      <Container size="default">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Left: Wordmark / Logo */}
          <Link
            to="/"
            className="group flex items-center gap-1 text-xl font-bold tracking-tight text-[#484848] rounded-lg px-1 py-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]"
            aria-label="TeamUp Home"
          >
            <span>
              Team<span className="text-[#007aff]">Up</span>
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full bg-[#007aff] transition-transform group-hover:scale-125"
              aria-hidden="true"
            />
          </Link>

          {/* Center/Right Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Primary navigation"
          >
            <a
              href="/#competitions"
              className="text-sm font-medium text-[#5f6368] hover:text-[#484848] transition-colors rounded-md px-1.5 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]"
            >
              Competitions
            </a>
            <a
              href="/#how-it-works"
              className="text-sm font-medium text-[#5f6368] hover:text-[#484848] transition-colors rounded-md px-1.5 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]"
            >
              How it works
            </a>
          </nav>

          {/* Right Actions: Log in + Get Started */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login">
              <Button
                variant="ghost"
                size="sm"
                className="text-sm font-medium text-[#5f6368] hover:text-[#484848] hover:bg-[#f0f0f0]"
              >
                Log in
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-[#5f6368] hover:text-[#484848] hover:bg-[#f0f0f0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
              onClick={toggleMenu}
            >
              {isMobileMenuOpen ? (
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
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
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden border-t border-[#f0f0f0] py-4 bg-[#fafafa]/95 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150"
          >
            <nav
              className="flex flex-col gap-1 pb-4"
              aria-label="Mobile navigation"
            >
              <a
                href="/#competitions"
                className="px-3 py-2 text-sm font-medium text-[#5f6368] hover:text-[#484848] hover:bg-[#f0f0f0] rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]"
                onClick={closeMenu}
              >
                Competitions
              </a>
              <a
                href="/#how-it-works"
                className="px-3 py-2 text-sm font-medium text-[#5f6368] hover:text-[#484848] hover:bg-[#f0f0f0] rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]"
                onClick={closeMenu}
              >
                How it works
              </a>
            </nav>

            <div className="border-t border-[#f0f0f0] pt-4 flex flex-col gap-2.5">
              <Link to="/login" onClick={closeMenu}>
                <Button variant="outline" size="sm" fullWidth>
                  Log in
                </Button>
              </Link>
              <Link to="/register" onClick={closeMenu}>
                <Button variant="primary" size="sm" fullWidth>
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
