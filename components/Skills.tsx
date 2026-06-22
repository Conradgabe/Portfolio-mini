import { Section } from "@/components/Section";
import { skills } from "@/lib/content";

export function Skills() {
  return (
    <Section id="skills" title="Skills" soft>
      <dl className="space-y-5">
        {skills.map((group) => (
          <div key={group.label} className="sm:flex sm:gap-6">
            <dt className="mb-2 shrink-0 text-sm font-semibold text-navy sm:mb-0 sm:w-40">
              {group.label}
            </dt>
            <dd className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-line-strong bg-bg px-2.5 py-1 text-sm text-ink"
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
