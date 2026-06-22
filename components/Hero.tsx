import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section id="about" className="bg-bg">
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-14 sm:pt-20">
        <p className="text-sm font-medium text-navy-2">{profile.title}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{profile.tagline}</p>
        <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
          {profile.summary}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={15} className="text-navy-2" /> {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md bg-navy px-3.5 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-2"
          >
            <Mail size={15} /> Email me
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line-strong px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-navy hover:text-navy"
          >
            <GithubIcon size={15} /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-line-strong px-3.5 py-2 text-sm font-medium text-ink transition-colors hover:border-navy hover:text-navy"
          >
            <LinkedinIcon size={15} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
