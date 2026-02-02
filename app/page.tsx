import { ContactButton } from "@/components/elements/contact-button";
import { HeroSection } from "@/components/sections/hero-section";
import { IntroAboutUs } from "@/components/sections/intro-about-us";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <IntroAboutUs />

      <ContactButton />
    </div>
  );
}
