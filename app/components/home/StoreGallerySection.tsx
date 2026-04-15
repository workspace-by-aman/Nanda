import Image from "next/image";
import { storeGallery } from "@/app/data/siteContent";

export function StoreGallerySection() {
  return (
    <section id="stores" className="px-6 py-[4.5rem] lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
            Store Presence
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[var(--color-forest)] md:text-5xl">
            A retail experience designed to feel fresh, refined, and easy to trust.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
            These image sections help the website feel more complete by showing
            the atmosphere behind the brand, not just the messaging.
          </p>
          <div className="mt-8 rounded-[28px] bg-white p-6 shadow-[0_20px_65px_rgba(19,56,39,0.07)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              In-Store Feel
            </p>
            <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
              Clean displays, premium arrangement, and dependable service help
              customers feel the same confidence in-store that they see online.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {storeGallery.map((item, index) => (
            <article
              key={item.title}
              className={index === 0 ? "md:translate-y-8" : ""}
            >
              <div className="group relative h-[360px] overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-[0_20px_70px_rgba(19,56,39,0.08)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,19,15,0.06),rgba(12,19,15,0.64))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/82">
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
