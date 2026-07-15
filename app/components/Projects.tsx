import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-24 py-10 scroll-mt-20">
      <p className="font-mono text-accent text-sm mb-4">$ ls ./projects</p>
      <div className="space-y-6">
        {projects.map((p) => (
          <article
            key={p.file}
            id={p.file.replace(/\.py$/, "")}
            className="rounded-lg border border-border bg-bg-elevated p-5 sm:p-6 scroll-mt-20"
          >
            <p className="font-mono text-sm">
              <span className="text-fg">{p.file}</span>
              <span className="text-fg-muted">   // {p.comment}</span>
            </p>
            <h3 className="mt-2 text-xl font-semibold text-fg">{p.title}</h3>
            <p className="mt-1 font-mono text-xs text-fg-muted">{p.context}</p>

            <div className="mt-4 max-w-3xl space-y-4 text-sm leading-relaxed">
              <div>
                <p className="font-mono text-xs text-accent mb-1">problem</p>
                <p className="text-fg-muted">{p.problem}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-accent mb-1">approach</p>
                <p className="text-fg-muted">{p.approach}</p>
              </div>
              <div>
                <p className="font-mono text-xs text-accent mb-1">results</p>
                <ul className="list-disc list-inside space-y-1 text-fg-muted">
                  {p.results.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs">
              {p.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline underline-offset-4"
                >
                  {link.label} ↗
                </a>
              ))}
            </div>
          </article>
        ))}

        <div className="rounded-lg border border-dashed border-border p-5 sm:p-6 text-center">
          <p className="font-mono text-sm text-fg-muted">
            03_*.py <span className="text-border">// more coming soon</span>
          </p>
        </div>
      </div>
    </section>
  );
}
