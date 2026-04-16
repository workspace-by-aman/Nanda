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
    <section id="why-choose-us" className="px-5 py-[4.5rem] sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-[46rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm sm:tracking-[0.28em]">
            Built Around Your Trust
          </p>
          <h2 className="mt-4 max-w-[12ch] text-3xl font-semibold tracking-[-0.03em] text-[var(--color-forest)] sm:text-4xl md:text-5xl">
            Six reasons customers keep choosing Nanda every single day.
          </h2>
          <p className="mt-5 max-w-[38rem] text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
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
                className="group flex h-full flex-col rounded-[30px] border border-[rgba(30,78,57,0.1)] bg-white p-6 shadow-[0_18px_60px_rgba(19,56,39,0.06)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(19,56,39,0.1)] sm:p-7"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[rgba(236,158,54,0.12)] text-[var(--color-forest)] transition group-hover:bg-[rgba(30,78,57,0.1)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 max-w-[14ch] text-[1.8rem] font-semibold tracking-[-0.02em] text-[var(--color-forest)] sm:text-2xl">
                  {reason.title}
                </h3>
                <p className="mt-4 max-w-[34ch] text-base leading-7 text-[var(--color-muted)]">
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
