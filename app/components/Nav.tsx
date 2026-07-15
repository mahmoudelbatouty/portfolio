import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "about" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#publications", label: "publications" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center gap-3 px-4 sm:px-6 py-3">
        <a
          href="#top"
          className="hidden md:inline font-mono text-sm text-accent shrink-0"
        >
          $ nav --sections
        </a>
        <div className="flex flex-1 min-w-0 items-center gap-1 font-mono text-xs sm:text-sm text-fg-muted overflow-x-auto scrollbar-hide">
          {links.map((link, i) => (
            <span key={link.href} className="flex items-center shrink-0">
              <a
                href={link.href}
                className="px-2 py-1 rounded hover:text-accent hover:bg-accent-soft transition-colors"
              >
                {link.label}
              </a>
              {i < links.length - 1 && (
                <span className="text-border select-none hidden sm:inline">/</span>
              )}
            </span>
          ))}
        </div>
        <ThemeToggle />
      </nav>
    </header>
  );
}
