import { navigationLinks } from "@/app/data/siteContent";

export function Footer() {
  return (
    <footer className="px-6 pb-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-[rgba(30,78,57,0.12)] pt-6 text-sm text-[var(--color-muted)] md:flex-row md:items-center md:justify-between">
        <p>© 2026 Nanda Fruiterers. Freshness, quality, and trust in every detail.</p>
        <div className="flex flex-wrap gap-4">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--color-forest)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
