import { Section } from "@/components/Section";
import { focus } from "@/lib/content";

export function Focus() {
  return (
    <Section id="focus" title="what i work on">
      <div className="grid gap-4 sm:grid-cols-2">
        {focus.map((f, i) => (
          <div key={f.title} className="rounded-lg border border-line bg-panel p-5 transition-colors hover:border-accent/50">
            <div className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="mt-2 text-[15px] font-semibold text-text">{f.title}</h3>
            <p className="mt-1.5 text-[14px] leading-relaxed text-muted">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
