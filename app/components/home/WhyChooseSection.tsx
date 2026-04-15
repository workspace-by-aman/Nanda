import { whyChooseReasons } from "@/app/data/siteContent";
import {
  BasketIcon,
  ClockIcon,
  HeartIcon,
  LeafIcon,
  ShieldIcon,
  StarIcon,
} from "@/app/components/home/icons";

const icons = [LeafIcon, ShieldIcon, BasketIcon, HeartIcon, StarIcon, ClockIcon];

export function WhyChooseSection() {
  return (
    <section id="why-choose-us" className="px-6 py-[4.5rem] lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Built Around Your Trust
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[var(--color-forest)] md:text-5xl">
            Six reasons customers keep choosing Nanda every single day.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
            Every detail of the Nanda Fruiterers experience is shaped by these
            core values, from handpicked produce to the trust we build with our
            customers each day.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseReasons.map((reason, index) => {
            const Icon = icons[index];

            return (
              <article
                key={reason.title}
                className="group rounded-[30px] border border-[rgba(30,78,57,0.1)] bg-white p-7 shadow-[0_18px_60px_rgba(19,56,39,0.06)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(19,56,39,0.1)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(236,158,54,0.12)] text-[var(--color-forest)] transition group-hover:bg-[rgba(30,78,57,0.1)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-[var(--color-forest)]">
                  {reason.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
