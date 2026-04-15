import Image from "next/image";
import { stats } from "@/app/data/siteContent";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-[4.5rem] pt-10 lg:px-10 lg:pb-24 lg:pt-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,158,54,0.24),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(30,78,57,0.16),_transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-[rgba(30,78,57,0.14)] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)] shadow-[0_10px_30px_rgba(19,56,39,0.08)]">
            Why Choose Nanda Fruiterers
          </p>
          <h1 className="max-w-xl text-5xl font-semibold tracking-[-0.04em] text-[var(--color-forest)] md:text-6xl">
            Freshness, quality, and trust brought together beautifully.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
            Every fruit, bowl, juice, and shake is selected or prepared with care
            so your everyday choices feel healthier, richer, and more enjoyable.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#why-choose-us"
              className="rounded-full bg-[var(--color-forest)] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[var(--color-olive)]"
            >
              Explore Our Promise
            </a>
            <a
              href="#offerings"
              className="rounded-full border border-[rgba(30,78,57,0.18)] bg-white/80 px-6 py-3.5 text-center text-sm font-semibold text-[var(--color-forest)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              View What We Offer
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[28px] border border-white/60 bg-white/80 p-5 shadow-[0_18px_50px_rgba(19,56,39,0.08)]"
              >
                <p className="text-2xl font-semibold text-[var(--color-forest)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-[rgba(236,158,54,0.26)] blur-2xl lg:block" />
          <div className="absolute -right-6 bottom-8 hidden h-36 w-36 rounded-full bg-[rgba(30,78,57,0.18)] blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-[#f2eadf] p-3 shadow-[0_24px_80px_rgba(19,56,39,0.14)]">
            <div className="relative h-[420px] overflow-hidden rounded-[28px] md:h-[520px]">
              <Image
                src="/banner.jpg"
                alt="Fresh fruits arranged beautifully at Nanda Fruiterers"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,16,0.02),rgba(10,20,16,0.42))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                  Handpicked daily
                </p>
                <p className="mt-3 max-w-sm text-2xl font-medium leading-8">
                  Naturally sweet, juicy, and presented with a premium finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
