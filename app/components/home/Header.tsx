import Image from "next/image";
import { navigationLinks } from "@/app/data/siteContent";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-[rgba(249,246,239,0.84)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <div className="rounded-2xl bg-white/90 p-2 shadow-[0_10px_40px_rgba(19,56,39,0.12)]">
            <Image
              src="/logo.png"
              alt="Nanda Fruiterers logo"
              width={72}
              height={72}
              className="h-12 w-auto"
              priority
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Nanda Fruiterers
            </p>
            <p className="text-sm text-[var(--color-olive)]">Freshness with purpose</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--color-olive)] lg:flex">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-[var(--color-forest)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[var(--color-forest)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-olive)]"
        >
          Order Fresh Today
        </a>
      </div>
    </header>
  );
}
