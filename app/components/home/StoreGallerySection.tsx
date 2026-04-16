import Image from "next/image";
import { storeGallery } from "@/app/data/siteContent";

export function StoreGallerySection() {
  return (
    <section id="stores" className="px-5 py-[4.5rem] sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-[38rem]">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm sm:tracking-[0.28em]">
            Store Presence
          </p>
          <h2 className="mt-4 max-w-[13ch] text-3xl font-semibold tracking-[-0.03em] text-[var(--color-forest)] sm:text-4xl md:text-5xl">
            A retail experience designed to feel fresh, refined, and easy to trust.
          </h2>
          <p className="mt-5 max-w-[34rem] text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
            These image sections help the website feel more complete by showing
            the atmosphere behind the brand, not just the messaging.
          </p>
          <div className="mt-8 rounded-[28px] bg-white p-6 shadow-[0_20px_65px_rgba(19,56,39,0.07)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              In-Store Feel
            </p>
            <p className="mt-3 max-w-[34ch] text-base leading-7 text-[var(--color-muted)]">
              Clean displays, premium arrangement, and dependable service help
              customers feel the same confidence in-store that they see online.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:auto-rows-[13rem] xl:grid-cols-3">
          {storeGallery.map((item, index) => (
            <article
              key={item.title}
              className={index === 0 ? "md:col-span-2 xl:col-span-1 xl:row-span-2 xl:translate-y-4" : ""}
            >
              <div className="group relative h-[320px] overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-[0_20px_70px_rgba(19,56,39,0.08)] sm:h-[360px] xl:h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: item.objectPosition }}
                  unoptimized
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,19,15,0.06),rgba(12,19,15,0.64))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="max-w-[14ch] text-2xl font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[32ch] text-sm leading-7 text-white/82">
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
