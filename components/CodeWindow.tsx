import { code } from "@/lib/content";

/** A small syntax-highlighted "editor" window rendering the developer object. */
export function CodeWindow() {
  const Str = ({ children }: { children: React.ReactNode }) => (
    <span className="text-str">&quot;{children}&quot;</span>
  );
  const Key = ({ children }: { children: React.ReactNode }) => (
    <span className="text-key">{children}</span>
  );
  const arr = (items: string[]) => (
    <>
      <span className="text-muted">[</span>
      {items.map((it, i) => (
        <span key={it}>
          <Str>{it}</Str>
          {i < items.length - 1 && <span className="text-muted">, </span>}
        </span>
      ))}
      <span className="text-muted">]</span>
    </>
  );

  const lines: React.ReactNode[] = [
    <>
      <span className="text-kw">const</span> <span className="text-purple">gabriel</span>{" "}
      <span className="text-muted">=</span> <span className="text-muted">{"{"}</span>
    </>,
    <>
      {"  "}
      <Key>role</Key>: <Str>{code.role}</Str>,
    </>,
    <>
      {"  "}
      <Key>location</Key>: <Str>{code.location}</Str>,
    </>,
    <>
      {"  "}
      <Key>experience</Key>: <Str>{code.experience}</Str>,
    </>,
    <>
      {"  "}
      <Key>stack</Key>: {arr(code.stack)},
    </>,
    <>
      {"  "}
      <Key>focus</Key>: {arr(code.focus)},
    </>,
    <>
      {"  "}
      <Key>status</Key>: <Str>{code.status}</Str>,
    </>,
    <span className="text-muted">{"}"}</span>,
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-2xl shadow-black/40">
      <div className="flex items-center gap-2 border-b border-line bg-panel-2 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
        <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
        <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
        <span className="ml-2 font-mono text-xs text-faint">gabriel.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        <code className="grid">
          {lines.map((ln, i) => (
            <span key={i} className="grid grid-cols-[1.5rem_1fr] gap-3">
              <span className="select-none text-right text-faint/60">{i + 1}</span>
              <span className="text-text">{ln}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
