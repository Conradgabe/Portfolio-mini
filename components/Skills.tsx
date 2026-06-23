import { Section } from "@/components/Section";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <Section id="skills" title="skills">
      <dl className="space-y-5">
        {skills.map((group) => (
          <div key={group.label} className="sm:flex sm:gap-6">
            <dt className="mb-2 shrink-0 font-mono text-sm text-faint sm:mb-0 sm:w-40 sm:pt-1">
              {group.label}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-line bg-panel px-2.5 py-1 font-mono text-[13px] text-text transition-colors hover:border-accent hover:text-accent"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
