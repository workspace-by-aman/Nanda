import { ContactSection } from "@/app/components/home/ContactSection";
import { ExperienceSection } from "@/app/components/home/ExperienceSection";
import { Footer } from "@/app/components/home/Footer";
import { Header } from "@/app/components/home/Header";
import { HeroSection } from "@/app/components/home/HeroSection";
import { OfferingsSection } from "@/app/components/home/OfferingsSection";
import { ProductGallerySection } from "@/app/components/home/ProductGallerySection";
import { StoreGallerySection } from "@/app/components/home/StoreGallerySection";
import { WhyChooseSection } from "@/app/components/home/WhyChooseSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-cream)] text-[var(--foreground)]">
      <Header />
      <HeroSection />
      <WhyChooseSection />
      <ProductGallerySection />
      <StoreGallerySection />
      <OfferingsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
