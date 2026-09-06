import { Container } from '../common/Container';

export function Footer() {
  return (
    <footer className="border-t border-[#f0f0f0] bg-[#fafafa] py-10">
      <Container size="lg">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#007aff] text-white font-bold text-xs">
              T
            </span>
            <span className="text-sm font-semibold text-[#484848]">
              TeamUp
            </span>
            <span className="text-xs text-[#787878]">
              — Find your hackathon teammates
            </span>
          </div>
          <p className="text-xs text-[#787878]">
            &copy; {new Date().getFullYear()} TeamUp. Designed for university students.
          </p>
        </div>
      </Container>
    </footer>
  );
}

