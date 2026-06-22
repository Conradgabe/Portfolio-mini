import { Section } from "@/components/Section";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-9">
        {experience.map((job) => (
          <article key={`${job.company}-${job.period}`}>
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-[15px] font-semibold text-ink">
                {job.role} <span className="text-navy">· {job.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{job.period}</span>
            </div>
            <p className="mt-0.5 text-sm text-muted">{job.location}</p>
            <ul className="mt-3 space-y-1.5">
              {job.points.map((p, i) => (
                <li key={i} className="flex gap-2.5 text-[14.5px] leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy-2" />
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
