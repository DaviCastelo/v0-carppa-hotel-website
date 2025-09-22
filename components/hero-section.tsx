import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookingForm } from "@/components/booking-form"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/luxury-hotel-exterior-with-pool-and-beautiful-land.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Bem-vindo ao Carppa Hotel</h1>
          <p className="text-xl md:text-2xl mb-8 text-balance max-w-2xl mx-auto">
            Experimente o conforto e a hospitalidade em um ambiente único
          </p>
        </div>
        
        {/* Formulário de Reserva */}
        <div className="max-w-5xl mx-auto">
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
