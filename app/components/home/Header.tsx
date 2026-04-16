import Image from "next/image";
import { navigationLinks } from "@/app/data/siteContent";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/50 bg-[rgba(249,246,239,0.84)] backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <div className="rounded-2xl bg-white/90 p-2 shadow-[0_10px_40px_rgba(19,56,39,0.12)]">
              <Image
                src="/logo.png"
                alt="Nanda Fruiterers logo"
                width={72}
                height={72}
                className="h-12 w-auto sm:h-14"
                priority
              />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-xs sm:tracking-[0.28em]">
                Nanda Fruiterers
              </p>
              <p className="text-sm text-[var(--color-olive)] sm:text-[15px]">Freshness with purpose</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-[var(--color-olive)] lg:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-1 py-1 transition hover:text-[var(--color-forest)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="w-full rounded-full bg-[var(--color-forest)] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[var(--color-olive)] sm:w-auto"
          >
            Order Fresh Today
          </a>
        </div>

        <nav className="-mx-1 mt-4 flex gap-2 overflow-x-auto pb-1 lg:hidden">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="shrink-0 rounded-full border border-[rgba(23,55,41,0.1)] bg-white/80 px-4 py-2 text-sm font-medium text-[var(--color-olive)] shadow-[0_10px_25px_rgba(19,56,39,0.05)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-forest)]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
