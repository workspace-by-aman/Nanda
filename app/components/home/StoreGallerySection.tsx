import Image from "next/image";
import { storeGallery } from "@/app/data/siteContent";

export function StoreGallerySection() {
  return (
    <section id="stores" className="overflow-hidden px-5 py-[4.5rem] sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm sm:tracking-[0.28em]">
              Store Experience
            </p>
            <h2 className="mt-4 max-w-[15ch] text-3xl font-semibold tracking-[-0.03em] text-[var(--color-forest)] sm:text-4xl md:text-5xl lg:text-6xl">
              Premium freshness in every corner.
            </h2>
            <p className="mt-6 max-w-[36rem] text-base leading-8 text-[var(--color-muted)] sm:text-lg sm:leading-9">
              Step into our carefully curated spaces where quality meets accessibility. Every detail—from thoughtful displays to personalized service—reflects our commitment to bringing premium fruit directly to you.
            </p>
            
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[var(--color-accent)]/20 bg-[var(--color-card)] p-6 transition-all hover:border-[var(--color-accent)]/40 hover:shadow-[0_10px_40px_rgba(184,142,64,0.1)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/10">
                  <span className="text-lg">✓</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-[var(--color-forest)]">
                  Curated Selection
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  Hand-picked fruits selected for peak ripeness and quality
                </p>
              </div>

              <div className="rounded-[24px] border border-[var(--color-accent)]/20 bg-[var(--color-card)] p-6 transition-all hover:border-[var(--color-accent)]/40 hover:shadow-[0_10px_40px_rgba(184,142,64,0.1)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-accent)]/10">
                  <span className="text-lg">★</span>
                </div>
                <h3 className="mt-3 text-sm font-semibold text-[var(--color-forest)]">
                  Expert Service
                </h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  Knowledgeable staff ready to guide you to perfect selections
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-square overflow-hidden rounded-[40px] border border-[var(--color-accent)]/10 bg-gradient-to-br from-[var(--color-card)] to-white shadow-[0_24px_80px_rgba(19,56,39,0.12)]">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(184,142,64,0.05),transparent)]" />
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <p className="text-6xl">🍎</p>
                <p className="mt-4 text-sm font-semibold text-[var(--color-forest)]">
                  Premium Freshness
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:auto-rows-[14rem] xl:grid-cols-3">
          {storeGallery.map((item, index) => (
            <article
              key={item.title}
              className={index === 0 ? "md:col-span-2 xl:col-span-1 xl:row-span-2" : ""}
            >
              <div className="group relative h-[280px] overflow-hidden rounded-[28px] border border-white/40 bg-white shadow-[0_24px_70px_rgba(19,56,39,0.12)] transition-all duration-300 hover:shadow-[0_32px_90px_rgba(19,56,39,0.16)] sm:h-[320px] xl:h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.08]"
                  style={{ objectPosition: item.objectPosition }}
                  unoptimized
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,19,15,0.1),rgba(12,19,15,0.7))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="max-w-[14ch] text-xl font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-[32ch] text-xs leading-6 text-white/85">
                    {item.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
