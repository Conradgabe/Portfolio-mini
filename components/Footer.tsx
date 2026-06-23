import { profile } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-bg">
      <div className="mx-auto max-w-4xl px-6 py-8 font-mono text-xs text-faint">
        <span>
          <span className="text-accent">$</span> &copy; {profile.name}
        </span>
      </div>
    </footer>
  );
}
