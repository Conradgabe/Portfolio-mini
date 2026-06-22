import { profile, navLinks } from "@/lib/content";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <a href="#about" className="font-semibold tracking-tight text-navy">
          {profile.name}
        </a>
        <ul className="hidden items-center gap-7 text-sm text-muted sm:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors hover:text-navy">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
