import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BookingSection } from "@/components/booking-section"
import { AboutSection } from "@/components/about-section"
import { RoomsSection } from "@/components/rooms-section"
import { ServicesSection } from "@/components/services-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BookingSection />
      <ServicesSection />
      <AboutSection />
      <RoomsSection />
      <LocationSection />
      <Footer />
    </main>
  )
}
