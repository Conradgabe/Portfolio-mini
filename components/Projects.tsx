import { Section } from "@/components/Section";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <Section id="projects" title="projects">
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col overflow-hidden rounded-lg border border-line bg-panel transition-colors hover:border-accent/60"
          >
            <div className="flex items-center gap-2 border-b border-line-soft bg-panel-2 px-4 py-2.5">
              <span className="font-mono text-xs text-accent">{"</>"}</span>
              <span className="font-mono text-[13px] text-text">{p.name}</span>
            </div>
            <div className="flex flex-1 flex-col p-4">
              <p className="text-[14px] leading-relaxed text-muted">{p.blurb}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded border border-line-soft px-1.5 py-0.5 font-mono text-[11px] text-faint"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
