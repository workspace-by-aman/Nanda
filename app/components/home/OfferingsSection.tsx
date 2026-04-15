import { offerings, trustHighlights } from "@/app/data/siteContent";

export function OfferingsSection() {
  return (
    <section id="offerings" className="px-6 py-[4.5rem] lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[36px] bg-[var(--color-forest)] px-7 py-10 text-white shadow-[0_28px_90px_rgba(19,56,39,0.18)] lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-12">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-sand)]">
            A Complete World Of Freshness
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
            More than a fruit store, it is a daily destination for healthier indulgence.
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/72">
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
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {offerings.map((item, index) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-[rgba(255,255,255,0.08)] p-6 backdrop-blur-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-sand)]">
                0{index + 1}
              </p>
              <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-7 text-white/74">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
