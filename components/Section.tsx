export function Section({
  id,
  title,
  children,
  soft = false,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  soft?: boolean;
}) {
  return (
    <section id={id} className={soft ? "bg-soft" : "bg-bg"}>
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <div className="mb-8">
          <h2 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-navy">
            {title}
          </h2>
          <div className="mt-3 h-px w-full bg-line" />
        </div>
        {children}
      </div>
    </section>
  );
}
