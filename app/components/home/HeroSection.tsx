import Image from "next/image";
import { heroShowcase, stats } from "@/app/data/siteContent";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 pb-[4.5rem] pt-8 sm:px-6 lg:px-10 lg:pb-28 lg:pt-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(236,158,54,0.24),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(30,78,57,0.16),_transparent_28%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(22rem,0.98fr)] lg:items-center lg:gap-14">
        <div className="max-w-[42rem]">
          <p className="mb-4 inline-flex max-w-full rounded-full border border-[rgba(30,78,57,0.14)] bg-white/80 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)] shadow-[0_10px_30px_rgba(19,56,39,0.08)] sm:text-xs sm:tracking-[0.24em]">
            Why Choose Nanda Fruiterers
          </p>
          <h1 className="max-w-[11ch] text-4xl font-semibold tracking-[-0.04em] text-[var(--color-forest)] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Freshness, quality, and trust brought together beautifully.
          </h1>
          <p className="mt-6 max-w-[34rem] text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
            Every fruit, bowl, juice, and shake is selected or prepared with care
            so your everyday choices feel healthier, richer, and more enjoyable.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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

          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[28px] border border-white/60 bg-white/80 p-5 shadow-[0_18px_50px_rgba(19,56,39,0.08)]"
              >
                <p className="text-2xl font-semibold text-[var(--color-forest)]">
                  {stat.value}
                </p>
                <p className="mt-2 max-w-[22ch] text-sm leading-6 text-[var(--color-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[38rem] lg:mx-0 lg:max-w-none lg:justify-self-end">
          <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full bg-[rgba(236,158,54,0.26)] blur-2xl lg:block" />
          <div className="absolute -right-6 bottom-8 hidden h-36 w-36 rounded-full bg-[rgba(30,78,57,0.18)] blur-3xl lg:block" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/60 bg-[#f2eadf] p-3 shadow-[0_24px_80px_rgba(19,56,39,0.14)]">
            <div className="absolute right-5 top-5 z-10 rounded-full bg-white/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--color-forest)] shadow-[0_10px_30px_rgba(19,56,39,0.12)]">
              Real store imagery
            </div>
            <div className="relative h-[22rem] overflow-hidden rounded-[28px] sm:h-[26rem] md:h-[32rem] lg:h-[35rem]">
              <Image
                src={heroShowcase.image}
                alt={heroShowcase.imageAlt}
                fill
                className="object-cover"
                style={{ objectPosition: heroShowcase.objectPosition }}
                unoptimized
                priority
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,16,0.02),rgba(10,20,16,0.18)_38%,rgba(10,20,16,0.58)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                  Handpicked daily
                </p>
                <p className="mt-3 max-w-[16ch] text-xl font-medium leading-7 sm:text-2xl sm:leading-8">
                  Naturally sweet, juicy, and presented with a premium finish.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-7 left-4 hidden w-52 rounded-[28px] border border-white/70 bg-white/92 p-3 shadow-[0_20px_70px_rgba(19,56,39,0.16)] xl:block">
            <div className="relative h-40 overflow-hidden rounded-[22px]">
              <Image
                src={heroShowcase.accentImage}
                alt={heroShowcase.accentImageAlt}
                fill
                className="object-cover"
                style={{ objectPosition: heroShowcase.accentObjectPosition }}
                unoptimized
              />
            </div>
            <div className="px-1 pb-1 pt-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Premium picks
              </p>
              <p className="mt-2 max-w-[16ch] text-sm font-medium leading-6 text-[var(--color-forest)]">
                Distinctive fruit presentation that feels gift-worthy and fresh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
