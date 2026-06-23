export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-b border-line-soft">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-20">
        <div className="mb-8 flex items-center gap-3">
          <h2 className="font-mono text-sm text-muted">
            <span className="text-accent">{"// "}</span>
            {title}
          </h2>
          <div className="h-px flex-1 bg-line-soft" />
        </div>
        {children}
      </div>
    </section>
  );
}
