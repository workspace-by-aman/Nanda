import Image from "next/image";
import { offerings, trustHighlights } from "@/app/data/siteContent";

export function OfferingsSection() {
  return (
    <section id="offerings" className="px-5 py-[4.5rem] sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[36px] bg-[var(--color-forest)] px-5 py-8 text-white shadow-[0_28px_90px_rgba(19,56,39,0.18)] sm:px-7 sm:py-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-sand)] sm:text-sm sm:tracking-[0.28em]">
            A Complete World Of Freshness
          </p>
          <h2 className="mt-4 max-w-[14ch] text-3xl font-semibold tracking-[-0.03em] sm:text-4xl md:text-5xl">
            More than a fruit store, it is a daily destination for healthier indulgence.
          </h2>
          <p className="mt-5 max-w-[34rem] text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
            From everyday essentials to more refreshing and wholesome choices,
            each offering is designed to bring taste, nourishment, and ease into
            your routine.
          </p>

          <div className="mt-8 space-y-4">
            {trustHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-4 text-sm text-white/[0.86] backdrop-blur-sm"
              >
                {highlight}
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="relative h-40 overflow-hidden rounded-[28px] border border-white/10 bg-white/10">
              <Image
                src="/nanda-web/IMG_1255.jpg"
                alt="Premium fruit jar display at Nanda Fruiterers"
                fill
                className="object-cover"
                style={{ objectPosition: "center" }}
                unoptimized
              />
            </div>
            <div className="relative h-40 overflow-hidden rounded-[28px] border border-white/10 bg-white/10">
              <Image
                src="/nanda-web/IMG_1294.jpg"
                alt="Curated dragon fruit basket at Nanda Fruiterers"
                fill
                className="object-cover"
                style={{ objectPosition: "center" }}
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {offerings.map((item, index) => (
            <article
              key={item.title}
              className="flex h-full flex-col rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.08)] p-5 backdrop-blur-sm sm:p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-sand)]">
                0{index + 1}
              </p>
              <h3 className="mt-4 max-w-[14ch] text-[1.8rem] font-semibold sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 max-w-[28ch] leading-7 text-white/74">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
