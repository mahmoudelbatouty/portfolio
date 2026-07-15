import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-24 py-10 scroll-mt-20">
      <p className="font-mono text-accent text-sm mb-4">
        $ grep -r skills ./stack
      </p>
      <div className="grid gap-4 sm:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-lg border border-border bg-bg-elevated p-4"
          >
            <p className="font-mono text-xs text-accent mb-3">{category}</p>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <span
                  key={item}
                  className="font-mono text-xs text-fg-muted border border-border rounded px-2 py-0.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
