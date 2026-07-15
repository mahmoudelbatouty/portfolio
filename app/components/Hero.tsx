import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-4xl px-4 sm:px-6 pt-16 pb-10 sm:pt-24 sm:pb-14">
      <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center gap-8">
        <div className="flex-1 min-w-0">
          <p className="font-mono text-accent text-sm">{"> whoami"}</p>
          <h1 className="mt-3 text-3xl sm:text-5xl font-bold font-mono tracking-tight text-fg break-words">
            Mahmoud Elbatouty
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-fg-muted max-w-xl">
            <span className="typewriter">
              Data scientist &amp; PhD candidate, AI systems
            </span>
            <span className="cursor-blink text-accent">_</span>
          </p>
          <div className="mt-6 flex flex-wrap gap-3 font-mono text-sm">
            <a
              href="#projects"
              className="rounded border border-accent text-accent px-4 py-2 hover:bg-accent-soft transition-colors"
            >
              ./view-projects
            </a>
            <a
              href="#contact"
              className="rounded border border-border text-fg-muted px-4 py-2 hover:text-fg hover:border-fg-muted transition-colors"
            >
              ./contact
            </a>
          </div>
        </div>
        <div className="shrink-0">
          <div className="h-28 w-28 sm:h-36 sm:w-36 rounded-lg overflow-hidden border border-border">
            <Image
              src="/mahmoud.jpg"
              alt="Mahmoud Elbatouty"
              width={288}
              height={288}
              className="h-full w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
