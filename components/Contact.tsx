import { Mail } from "lucide-react";
import { Section } from "@/components/Section";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { profile } from "@/lib/content";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-2xl text-[15px] leading-relaxed text-muted">
        I&apos;m open to backend and full-stack roles. The fastest way to reach me is by email,
        and you can also find me on GitHub and LinkedIn.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-md bg-navy px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-2"
        >
          <Mail size={16} /> {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line-strong px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-navy hover:text-navy"
        >
          <GithubIcon size={16} /> github.com/{profile.githubUser}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line-strong px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:border-navy hover:text-navy"
        >
          <LinkedinIcon size={16} /> LinkedIn
        </a>
      </div>
    </Section>
  );
}
