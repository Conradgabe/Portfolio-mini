import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Screenshot } from "@/components/Screenshot";
import { OpenApiView } from "@/components/OpenApiView";
import { projects, projectBySlug } from "@/lib/content";
import { openApiSpecs, sidecarSpecs, countOperations } from "@/lib/specs";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) return {};
  return { title: `${p.name} — ${p.tagline}`, description: p.summary };
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5 text-[14.5px] leading-relaxed text-muted">
      <span className="mt-0.5 font-mono text-accent">▹</span>
      <span>{children}</span>
    </li>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = projectBySlug(slug);
  if (!p) notFound();

  const spec = p.apiSlug ? openApiSpecs[p.apiSlug] : undefined;
  const sidecar = p.apiSlug ? sidecarSpecs[p.apiSlug] : undefined;
  const [hero, ...rest] = p.images;

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <Link href="/#projects" className="font-mono text-sm text-muted transition-colors hover:text-accent">
          ← cd ../projects
        </Link>

        <header className="mt-8">
          <div className="font-mono text-xs text-faint">
            {p.category} · {p.year}
          </div>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{p.name}</h1>
          <p className="mt-2 text-lg text-muted">{p.tagline}</p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted">{p.summary}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <li key={s} className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-faint">
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-3 font-mono text-xs text-faint">
            role: <span className="text-muted">{p.role}</span>
          </p>
        </header>

        {hero && (
          <div className="mt-10">
            <Screenshot image={hero} priority />
          </div>
        )}

        <section className="mt-12 grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-mono text-sm text-text">
              <span className="text-accent">{"// "}</span>problem
            </h2>
            <p className="mt-3 text-[14.5px] leading-relaxed text-muted">{p.problem}</p>
          </div>
          <div>
            <h2 className="font-mono text-sm text-text">
              <span className="text-accent">{"// "}</span>highlights
            </h2>
            <ul className="mt-3 space-y-1.5">
              {p.highlights.map((h, i) => (
                <Bullet key={i}>{h}</Bullet>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="font-mono text-sm text-text">
            <span className="text-accent">{"// "}</span>approach
          </h2>
          <ul className="mt-3 space-y-2">
            {p.approach.map((a, i) => (
              <Bullet key={i}>{a}</Bullet>
            ))}
          </ul>
        </section>

        {rest.length > 0 && (
          <section className="mt-12">
            <h2 className="mb-5 font-mono text-sm text-text">
              <span className="text-accent">$</span> ls screenshots/
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {rest.map((img) => (
                <Screenshot key={img.src} image={img} />
              ))}
            </div>
          </section>
        )}

        {spec && (
          <section className="mt-14 border-t border-line-soft pt-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-mono text-sm text-text">
                <span className="text-accent">{"// "}</span>api reference
              </h2>
              <a
                href={`/api-specs/${p.apiSlug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-line px-3 py-1.5 font-mono text-[12px] text-muted transition-colors hover:border-accent hover:text-accent"
              >
                download openapi.json
              </a>
            </div>
            <div className="mb-6 rounded-md border border-line bg-panel px-4 py-3 font-mono text-[12px] text-muted">
              <span className="text-text">{spec.info.title}</span>{" "}
              <span className="text-faint">v{spec.info.version}</span> · OpenAPI {spec.openapi} ·{" "}
              {countOperations(spec)} endpoints
            </div>
            <OpenApiView spec={spec} />

            {sidecar && (
              <div className="mt-12 border-t border-line-soft pt-8">
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-mono text-sm text-text">sidecar · {sidecar.info.title}</h3>
                    {sidecar.info.description && (
                      <p className="mt-1 max-w-2xl text-[13px] leading-relaxed text-muted">
                        {sidecar.info.description}
                      </p>
                    )}
                  </div>
                  <a
                    href={`/api-specs/${p.apiSlug}-renderer`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-md border border-line px-3 py-1.5 font-mono text-[12px] text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    download openapi.json
                  </a>
                </div>
                <OpenApiView spec={sidecar} />
              </div>
            )}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
