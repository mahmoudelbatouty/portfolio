import TerminalWindow from "./TerminalWindow";
import { publication } from "@/lib/data";

export default function Publications() {
  return (
    <section
      id="publications"
      className="mx-auto max-w-4xl px-4 sm:px-6 py-10 scroll-mt-20"
    >
      <TerminalWindow title="publications.bib">
        <p className="font-mono text-xs text-fg-muted">
          {"$ cat publications.bib"}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-fg-muted">
          {publication.citation}
        </p>
        <a
          href={publication.doi}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block font-mono text-xs text-accent hover:underline underline-offset-4"
        >
          {publication.doi} ↗
        </a>
      </TerminalWindow>
    </section>
  );
}
