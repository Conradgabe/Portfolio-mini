import { Section } from "@/components/Section";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <Section id="experience" title="experience">
      <div className="space-y-8">
        {experience.map((job) => (
          <article key={`${job.company}-${job.period}`} className="border-l border-line pl-5">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-[15px] font-semibold text-text">
                {job.role} <span className="text-accent">@ {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-faint">{job.period}</span>
            </div>
            <p className="mt-0.5 font-mono text-xs text-faint">{job.location}</p>
            <ul className="mt-3 space-y-1.5">
              {job.points.map((p, i) => (
                <li key={i} className="flex gap-2.5 text-[14.5px] leading-relaxed text-muted">
                  <span className="mt-0.5 font-mono text-accent">▹</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
