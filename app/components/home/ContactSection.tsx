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
    <section id="contact" className="px-6 pb-[4.5rem] pt-8 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-[rgba(30,78,57,0.1)] bg-white shadow-[0_24px_80px_rgba(19,56,39,0.08)]">
        <div className="grid gap-10 px-7 py-10 lg:grid-cols-[1fr_0.95fr] lg:px-10 lg:py-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              Contact Nanda
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[var(--color-forest)] md:text-5xl">
              Freshness is always within your reach.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              Visit us, call us, or place your order with confidence. Every part
              of the experience is designed to make premium freshness feel simple.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="rounded-[24px] bg-[var(--color-card)] p-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--color-forest)] shadow-[0_10px_30px_rgba(19,56,39,0.08)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-base leading-7 text-[var(--color-muted)]">
                      {item.value}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[30px] bg-[var(--color-forest)] p-7 text-white">
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
