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
      >
        {/* Efeito blur azul apenas no desktop */}
        <div className="absolute inset-0 bg-blue-500/30 backdrop-blur-md hidden md:block" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Título Principal */}
          <h1 className="title-carppa title-carppa-h1 mb-8 leading-tight">
            O Hotel
          </h1>

          {/* Formulário de Busca - Mesmo da home */}
          <BookingForm />
        </div>
      </div>
    </section>
  )
}
