import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHeroSection } from "@/components/about-hero-section"
import { LocationHighlightSection } from "@/components/location-highlight-section"
import { PoolAreaSection } from "@/components/pool-area-section"
import { ExperiencesSection } from "@/components/experiences-section"
import { HowToGetSection } from "@/components/how-to-get-section"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHeroSection />
      <LocationHighlightSection />
      <PoolAreaSection />
      <ExperiencesSection />
      <HowToGetSection />
      <Footer />
    </main>
  )
}
