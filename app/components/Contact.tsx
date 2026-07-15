import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="mx-auto max-w-[1800px] px-6 sm:px-10 lg:px-16 xl:px-24 py-14 scroll-mt-20"
    >
      <p className="font-mono text-accent text-sm mb-4">
        $ contact --resume --linkedin --github --email
      </p>
      <div className="max-w-3xl rounded-lg border border-border bg-bg-elevated p-5 sm:p-6">
        <div className="flex flex-wrap gap-3 font-mono text-sm mb-5">
          <a
            href={contact.resumeHref}
            download
            className="rounded border border-accent text-accent px-4 py-2 hover:bg-accent-soft transition-colors"
          >
            ↓ resume.pdf
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-border text-fg-muted px-4 py-2 hover:text-fg hover:border-fg-muted transition-colors"
          >
            linkedin
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded border border-border text-fg-muted px-4 py-2 hover:text-fg hover:border-fg-muted transition-colors"
          >
            github
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded border border-border text-fg-muted px-4 py-2 hover:text-fg hover:border-fg-muted transition-colors"
          >
            email
          </a>
        </div>
        <dl className="grid gap-2 text-sm text-fg-muted font-mono">
          <div className="flex gap-2">
            <dt className="text-fg-muted/70">email:</dt>
            <dd>
              <a
                href={`mailto:${contact.email}`}
                className="hover:text-accent"
              >
                {contact.email}
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-fg-muted/70">phone:</dt>
            <dd>{contact.phone}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-fg-muted/70">linkedin:</dt>
            <dd>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {contact.linkedinLabel}
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-fg-muted/70">github:</dt>
            <dd>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {contact.githubLabel}
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-fg-muted/70">location:</dt>
            <dd>{contact.location}</dd>
          </div>
        </dl>
      </div>
      <p className="mt-8 text-center font-mono text-xs text-fg-muted">
        built with Next.js &amp; Tailwind
        <span className="cursor-blink text-accent ml-1">_</span>
      </p>
    </footer>
  );
}
