import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-muted sm:flex-row">
        <span>
          &copy; {profile.name}
        </span>
        <span className="text-xs">Built with Next.js &amp; Tailwind CSS</span>
      </div>
    </footer>
  );
}
