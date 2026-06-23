import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { CodeWindow } from "@/components/CodeWindow";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section id="about" className="border-b border-line-soft">
      <div className="mx-auto grid max-w-4xl gap-10 px-6 pt-16 pb-16 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-sm text-accent">{profile.title}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-muted">{profile.tagline}</p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted">
            {profile.summary}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-faint">
              <MapPin size={14} className="text-accent" /> {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-accent px-3.5 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              <Mail size={15} /> Email me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-3.5 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon size={15} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-3.5 py-2 text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              <LinkedinIcon size={15} /> LinkedIn
            </a>
          </div>
        </div>

        <CodeWindow />
      </div>
    </section>
  );
}
