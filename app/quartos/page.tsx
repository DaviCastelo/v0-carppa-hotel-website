import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Bed, Users, Star, Info } from "lucide-react"
import { rooms } from "@/lib/rooms-data"

export default function QuartosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/images/IMG_5231.jpg')`,
          }}
        >
          {/* Overlay apenas no desktop - efeito branco bem intenso sem desfoque */}
          <div className="absolute inset-0 bg-white/60 hidden md:block" />
        </div>

        {/* Title centralizado */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold uppercase tracking-wider text-center" style={{ color: '#7d3330' }}>
            Nossas Acomodações
          </h1>
        </div>
      </section>

      {/* Rooms List */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          <div className="space-y-16">
            {rooms.map((room, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={room.id} 
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-slide-in-${isEven ? 'left' : 'right'}`}
                >
                  {/* Room Image */}
                  <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <Image
                      src={room.image || "/placeholder.svg"}
                      alt={room.name}
                      width={600}
                      height={400}
                      className="w-full h-96 object-cover"
                    />
                  </div>

                  {/* Room Information */}
                  <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <h3 className="text-4xl font-bold text-dark-gray mb-2">{room.name.toUpperCase()}</h3>
                      <div className="flex items-center space-x-2 text-dark-gray mb-4">
                        <Users size={20} className="text-sienna" />
                        <span className="text-lg">Até {room.capacity} pessoas</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-dark-gray text-lg leading-relaxed">
                        {room.description || "Uma proposta de encantar e ser refúgio para quem busca comodidade, bem-estar e sofisticação em um ambiente aconchegante. Além de poder conhecer a terra do sol: Fortaleza."}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-dark-gray">
                        <Bed size={20} className="text-sienna" />
                        <span>{room.beds}</span>
                      </div>
                      {room.bedOptions && (
                        <div className="flex items-center space-x-3 text-dark-gray">
                          <Info size={20} className="text-sienna" />
                          <span className="text-sm">{room.bedOptions}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <Button asChild className="bg-transparent hover:bg-amber-50 text-amber-800 border border-amber-800 rounded-none px-8 py-3 font-medium uppercase text-base tracking-wide">
                        <Link href={room.reservationUrl} target="_blank" rel="noopener noreferrer">Reservar</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">Precisa de Ajuda para Escolher?</h2>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudá-lo a encontrar a acomodação perfeita para sua estadia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/contato">Falar com Especialista</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent">
              <Link href="tel:+558534532000">Ligar Agora</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
