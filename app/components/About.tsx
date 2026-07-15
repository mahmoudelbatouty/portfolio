import TerminalWindow from "./TerminalWindow";
import { education } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-24 py-10 scroll-mt-20">
      <TerminalWindow title="about.md" className="max-w-3xl">
        <p className="font-mono text-xs text-fg-muted">{"// about.md"}</p>
        <p className="mt-4 leading-relaxed text-fg">
          Data scientist at Florida Blue and PhD student in Intelligent Systems
          (AI) at the University of North Florida. My work spans classical
          machine learning — clustering, statistical modeling, forecasting —
          and modern generative AI: RAG pipelines, LLMs, embeddings, and
          vector databases. I like turning messy, real-world data into
          systems that people actually use, whether that&apos;s an executive
          dashboard or a model that directs $70K toward families at risk of
          losing their homes.
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
