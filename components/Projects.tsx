import { Section } from "@/components/Section";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <Section id="projects" title="Projects" soft>
      <div className="space-y-4">
        {projects.map((p) => (
          <article
            key={p.name}
            className="rounded-lg border border-line bg-bg p-5 transition-colors hover:border-line-strong"
          >
            <h3 className="text-base font-semibold text-navy">{p.name}</h3>
            <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{p.blurb}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded border border-line px-2 py-0.5 font-mono text-xs text-muted"
                >
                  {s}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
