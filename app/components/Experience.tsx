import TerminalWindow from "./TerminalWindow";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-24 py-10 scroll-mt-20">
      <TerminalWindow title="experience.log">
        <p className="font-mono text-xs text-fg-muted">{"$ cat experience.log"}</p>
        <div className="mt-4 divide-y divide-border">
          {experience.map((e) => (
            <details key={e.org} className="group py-4 first:pt-0 last:pb-0">
              <summary className="cursor-pointer list-none flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <span>
                  <span className="text-fg font-medium">{e.role}</span>
                  <span className="text-fg-muted"> — {e.org}</span>
                </span>
                <span className="font-mono text-xs text-accent shrink-0">
                  [{e.period}]
                </span>
              </summary>
              <p className="mt-1 font-mono text-xs text-fg-muted">
                {e.location}
              </p>
              <ul className="mt-3 list-disc list-inside space-y-2 text-sm text-fg-muted leading-relaxed">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </TerminalWindow>
    </section>
  );
}
