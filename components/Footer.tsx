import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-bg">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 px-6 py-8 font-mono text-xs text-faint sm:flex-row">
        <span>
          <span className="text-accent">$</span> &copy; {profile.name}
        </span>
        <span>built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
