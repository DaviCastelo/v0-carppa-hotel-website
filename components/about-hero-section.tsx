import { BookingForm } from "@/components/booking-form"

export function AboutHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image - Piscina */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/Piscina/IMG_0952.jpg')`,
        }}
      />
    </section>
  )
}
