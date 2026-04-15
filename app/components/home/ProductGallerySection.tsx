import Image from "next/image";
import { productGallery } from "@/app/data/siteContent";

export function ProductGallerySection() {
  return (
    <section id="products" className="px-6 py-[4.5rem] lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Product Highlights
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[var(--color-forest)] md:text-5xl">
              Fresh products presented through rich, image-led storytelling.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[var(--color-muted)]">
            From premium fruits to juices, shakes, and bowls, each category is
            showcased in a way that feels clean, appetising, and professional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
          {productGallery.map((item, index) => (
            <article
              key={item.title}
              className={index === 0 ? "lg:row-span-2" : ""}
            >
              <div className="group relative h-[340px] overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-[0_20px_70px_rgba(19,56,39,0.08)] md:h-[420px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,22,17,0.04),rgba(14,22,17,0.68))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                    Premium Selection
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.02em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-7 text-white/82">
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
