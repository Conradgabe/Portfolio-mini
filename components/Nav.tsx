import { navLinks } from "@/lib/content";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
        <a href="#about" className="font-mono text-sm">
          <span className="text-faint">~/</span>
          <span className="text-accent">gabriel</span>
        </a>
        <ul className="hidden items-center gap-6 font-mono text-[13px] text-muted sm:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-text">
                <span className="text-accent">/</span>
                {l.label.toLowerCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
