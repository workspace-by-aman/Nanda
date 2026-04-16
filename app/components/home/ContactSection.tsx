import Image from "next/image";
import { contactDetails } from "@/app/data/siteContent";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/app/components/home/icons";

const contactItems = [
  {
    title: "Call Us",
    value: contactDetails.phone,
    icon: PhoneIcon,
  },
  {
    title: "Email Us",
    value: contactDetails.email,
    icon: MailIcon,
  },
  {
    title: "Business Hours",
    value: contactDetails.hours,
    icon: ClockIcon,
  },
] as const;

export function ContactSection() {
  return (
    <section id="contact" className="px-5 pb-[4.5rem] pt-8 sm:px-6 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-[rgba(30,78,57,0.1)] bg-white shadow-[0_24px_80px_rgba(19,56,39,0.08)]">
        <div className="grid gap-10 px-5 py-8 sm:px-7 sm:py-10 lg:grid-cols-[1fr_0.95fr] lg:px-10 lg:py-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)] sm:text-sm sm:tracking-[0.28em]">
              Contact Nanda
            </p>
            <h2 className="mt-4 max-w-[12ch] text-3xl font-semibold tracking-[-0.03em] text-[var(--color-forest)] sm:text-4xl md:text-5xl">
              Freshness is always within your reach.
            </h2>
            <p className="mt-5 max-w-[38rem] text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
              Visit us, call us, or place your order with confidence. Every part
              of the experience is designed to make premium freshness feel simple.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex flex-col items-center rounded-[24px] bg-[var(--color-card)] p-5 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--color-forest)] shadow-[0_10px_30px_rgba(19,56,39,0.08)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      {item.title}
                    </p>
                    <p className="mt-2 max-w-[22ch] text-base leading-7 text-[var(--color-muted)]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[30px] bg-[var(--color-forest)] p-7 text-white">
            <div className="relative mb-6 h-44 overflow-hidden rounded-[24px] border border-white/10">
              <Image
                src="/nanda-web/IMG_1301.jpg"
                alt="Nanda Fruiterers premium in-store fruit display"
                fill
                className="object-cover"
                style={{ objectPosition: "center" }}
                unoptimized
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,20,16,0.04),rgba(10,20,16,0.48))]" />
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                <MapPinIcon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-sand)]">
                  Visit Us
                </p>
                <p className="text-white/72">Our store locations</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {contactDetails.locations.map((location) => (
                <div
                  key={location}
                  className="rounded-[24px] border border-white/10 bg-white/[0.08] p-5 leading-7 text-white/[0.84]"
                >
                  {location}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
