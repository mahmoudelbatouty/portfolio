import TerminalWindow from "./TerminalWindow";
import { education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-4 sm:px-6 py-10 scroll-mt-20">
      <TerminalWindow title="about.md">
        <p className="font-mono text-xs text-fg-muted">{"// about.md"}</p>
        <p className="mt-4 leading-relaxed text-fg">
          AI engineer at Overclock, data scientist and software developer at
          Florida Blue, and PhD student in Intelligent Systems (AI) at the
          University of North Florida. I build machine-learning systems,
          LLM applications, AI agents, and MCP-enabled workflows that connect
          models with real tools and data. My work ranges from autonomous and
          multi-agent systems to healthcare analytics, executive reporting,
          and models that help direct resources to families at risk of losing
          their homes.
        </p>

        <div className="mt-6 border-t border-border pt-5">
          <p className="font-mono text-xs text-fg-muted mb-3">
            {"// education.log"}
          </p>
          <ul className="space-y-3">
            {education.map((e) => (
              <li key={e.degree} className="text-sm">
                <span className="text-fg font-medium">{e.degree}</span>
                <span className="text-fg-muted">, {e.school}</span>
                <span className="block sm:inline sm:ml-2 font-mono text-xs text-accent">
                  {e.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </TerminalWindow>
    </section>
  );
}
