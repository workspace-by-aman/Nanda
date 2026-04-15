export function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-[4.5rem] lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="max-w-md">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Crafted For Health And Taste
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[var(--color-forest)] md:text-5xl">
            Premium quality should feel effortless in everyday life.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[30px] bg-[var(--color-card)] p-7 shadow-[0_18px_55px_rgba(19,56,39,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Health-first approach
            </p>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              Healthy choices should never feel restrictive. Nanda products are
              prepared to balance nutrition, flavour, and satisfaction in a way
              that naturally fits modern routines.
            </p>
          </article>

          <article className="rounded-[30px] bg-white p-7 shadow-[0_18px_55px_rgba(19,56,39,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Trust built over time
            </p>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              Honest service and consistent quality create the kind of confidence
              that keeps customers returning. That trust is central to the brand,
              not an afterthought.
            </p>
          </article>

          <article className="rounded-[30px] bg-white p-7 shadow-[0_18px_55px_rgba(19,56,39,0.06)] md:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">
              Convenience that fits your lifestyle
            </p>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              From quick in-store service to easy ordering and dependable delivery,
              freshness stays within reach. The experience is designed to save time
              while still feeling elevated and personal.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
