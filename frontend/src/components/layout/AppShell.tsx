import { useState, useEffect, useCallback } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { Badge } from '../common/Badge';

export function AppShell() {
  const location = useLocation();
  const [openedOnPathname, setOpenedOnPathname] = useState<string | null>(null);
  const mobileMenuOpen = openedOnPathname === location.pathname;

  const toggleMobileMenu = useCallback(() => {
    setOpenedOnPathname((curr) => (curr === location.pathname ? null : location.pathname));
  }, [location.pathname]);

  const closeMobileMenu = useCallback(() => {
    setOpenedOnPathname(null);
  }, []);

  // Handle escape key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setOpenedOnPathname(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    {
      label: 'Dashboard',
      to: '/dashboard',
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="7" height="9" />
          <rect x="14" y="3" width="7" height="5" />
          <rect x="14" y="12" width="7" height="9" />
          <rect x="3" y="16" width="7" height="5" />
        </svg>
      ),
    },
    {
      label: 'Competitions',
      to: '/competitions',
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
    },
    {
      label: 'My Teams',
      to: '/teams',
      // Highlight if current path starts with /teams
      isActive: (pathname: string) => pathname.startsWith('/teams'),
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      label: 'Matches',
      to: '/matches',
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
    },
    {
      label: 'Connections',
      to: '/connections',
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" y1="8" x2="19" y2="14" />
          <line x1="22" y1="11" x2="16" y2="11" />
        </svg>
      ),
    },
    {
      label: 'Messages',
      to: '/messages',
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      ),
    },
    {
      label: 'Settings',
      to: '/settings',
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#484848] flex flex-col antialiased">
      {/* Top Application Header */}
      <header className="sticky top-0 z-30 h-16 border-b border-[#f0f0f0] bg-white/90 backdrop-blur-md px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand + Badge */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-[#5f6368] hover:text-[#484848] hover:bg-[#f0f0f0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]"
            aria-label={mobileMenuOpen ? 'Close application menu' : 'Open application menu'}
            aria-expanded={mobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>

          <Link
            to="/dashboard"
            className="flex items-center gap-1 text-lg font-bold tracking-tight text-[#484848] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] rounded-md px-1 py-0.5"
            aria-label="TeamUp Dashboard"
          >
            <span>
              Team<span className="text-[#007aff]">Up</span>
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#007aff]" aria-hidden="true" />
          </Link>

          <Badge variant="accent" className="hidden sm:inline-flex text-[11px] font-semibold">
            App Preview
          </Badge>
        </div>

        {/* Right: Public Site Link + User Profile Preview */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-xs font-medium text-[#5f6368] hover:text-[#484848] transition-colors px-2.5 py-1.5 rounded-lg hover:bg-[#f0f0f0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]"
          >
            Exit to Home
          </Link>

          <div className="h-4 w-[1px] bg-[#f0f0f0]" aria-hidden="true" />

          <Link
            to="/profiles/me"
            className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-[#f0f0f0] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff]"
            aria-label="View your student profile"
          >
            <div className="h-7 w-7 rounded-full bg-[#007aff]/10 border border-[#007aff]/20 flex items-center justify-center text-xs font-bold text-[#007aff]">
              ST
            </div>
            <span className="hidden sm:inline text-xs font-medium text-[#484848]">
              Student Profile
            </span>
          </Link>
        </div>
      </header>

      {/* Main Body with Sidebar + Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar Navigation */}
        <aside
          aria-label="Application navigation"
          className="hidden md:flex w-60 lg:w-64 flex-col justify-between border-r border-[#f0f0f0] bg-white p-4 shrink-0"
        >
          <nav className="space-y-1">
            {navItems.map((item) => {
              const active = item.isActive
                ? item.isActive(location.pathname)
                : location.pathname === item.to;

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007aff] ${
                    active
                      ? 'bg-[#007aff]/10 text-[#007aff] font-semibold'
                      : 'text-[#5f6368] hover:text-[#484848] hover:bg-[#fafafa]'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  <span className={active ? 'text-[#007aff]' : 'text-[#787878]'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </nav>

          {/* Sidebar Footer Info */}
          <div className="pt-4 border-t border-[#f0f0f0] text-[11px] text-[#787878] space-y-1 px-2">
            <p className="font-medium text-[#484848]">TeamUp Platform</p>
            <p>Frontend Foundation • Phase 3.1</p>
          </div>
        </aside>

        {/* Mobile Slide-Out Menu Drawer */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 z-40 md:hidden bg-black/20 backdrop-blur-xs flex"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile application navigation"
            onClick={closeMobileMenu}
          >
            <div
              className="w-64 max-w-[80vw] bg-white h-full p-4 flex flex-col justify-between shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#f0f0f0]">
                  <span className="text-sm font-bold text-[#484848]">Navigation</span>
                  <button
                    type="button"
                    className="p-1 rounded-lg text-[#787878] hover:text-[#484848] hover:bg-[#f0f0f0]"
                    onClick={closeMobileMenu}
                    aria-label="Close menu"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <nav className="space-y-1">
                  {navItems.map((item) => {
                    const active = item.isActive
                      ? item.isActive(location.pathname)
                      : location.pathname === item.to;

                    return (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={closeMobileMenu}
                        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                          active
                            ? 'bg-[#007aff]/10 text-[#007aff] font-semibold'
                            : 'text-[#5f6368] hover:text-[#484848] hover:bg-[#fafafa]'
                        }`}
                        aria-current={active ? 'page' : undefined}
                      >
                        <span className={active ? 'text-[#007aff]' : 'text-[#787878]'}>
                          {item.icon}
                        </span>
                        <span>{item.label}</span>
                      </NavLink>
                    );
                  })}
                </nav>
              </div>

              <div className="pt-4 border-t border-[#f0f0f0] space-y-2">
                <Link
                  to="/profiles/me"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 p-2 rounded-xl bg-[#fafafa] border border-[#f0f0f0] text-xs font-medium text-[#484848]"
                >
                  <div className="h-6 w-6 rounded-full bg-[#007aff]/10 flex items-center justify-center text-xs font-bold text-[#007aff]">
                    ST
                  </div>
                  <span>Student Profile</span>
                </Link>
                <Link
                  to="/"
                  onClick={closeMobileMenu}
                  className="block text-center py-2 text-xs text-[#5f6368] hover:text-[#484848]"
                >
                  Exit to Home
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Main App Content Viewport */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
