import Image from "next/image";
import { productGallery } from "@/app/data/siteContent";

export function ProductGallerySection() {
  return (
    <section id="products" className="px-5 py-[4.5rem] sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end lg:justify-between">
          <div className="max-w-[44rem]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm sm:tracking-[0.28em]">
              Product Highlights
            </p>
            <h2 className="mt-4 max-w-[12ch] text-3xl font-semibold tracking-[-0.03em] text-[var(--color-forest)] sm:text-4xl md:text-5xl">
              Fresh products presented through rich, image-led storytelling.
            </h2>
          </div>
          <p className="max-w-[34rem] text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8 lg:justify-self-end">
            From premium fruits to juices, shakes, and bowls, each category is
            showcased in a way that feels clean, appetising, and professional.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:auto-rows-[13rem] xl:grid-cols-3">
          {productGallery.map((item, index) => (
            <article
              key={item.title}
              className={index === 0 ? "md:col-span-2 xl:col-span-2 xl:row-span-2" : ""}
            >
              <div className="group relative h-[320px] overflow-hidden rounded-[32px] border border-white/60 bg-white shadow-[0_20px_70px_rgba(19,56,39,0.08)] sm:h-[360px] md:h-[400px] xl:h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.04]"
                  style={{ objectPosition: item.objectPosition }}
                  unoptimized
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,22,17,0.04),rgba(14,22,17,0.68))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                    Premium Selection
                  </p>
                  <h3 className="mt-3 max-w-[15ch] text-[1.9rem] font-semibold tracking-[-0.02em] sm:text-3xl">
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
