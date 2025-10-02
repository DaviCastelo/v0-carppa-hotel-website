import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Users, Bed, Bath, Sofa } from "lucide-react"
import { rooms } from "@/lib/rooms-data"

export default function QuartosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="bg-sienna text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Nossos Quartos</h1>
          <p className="text-xl md:text-2xl text-balance max-w-3xl mx-auto">
            Escolha entre nossas acomodações cuidadosamente projetadas para proporcionar máximo conforto e hospitalidade
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {rooms.map((room, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={room.id}
                  className="room-card opacity-0 translate-y-8"
                  style={{
                    animationDelay: `${index * 300}ms`,
                    animation: 'slideInUp 0.8s ease-out forwards'
                  }}
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-col-dense'
                  }`}>
                    {/* Conteúdo de Texto */}
                    <div className={`space-y-6 ${isEven ? 'lg:pr-8' : 'lg:pl-8 lg:col-start-2'}`}>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                          {room.name.toUpperCase()}
                        </h3>
                        
                        <div className="flex items-center space-x-2 text-black mb-4">
                          <Users size={20} className="text-sienna" />
                          <span className="text-lg">Até {room.capacity}</span>
                        </div>
                        
                        <p className="text-gray-700 text-base leading-relaxed mb-6">
                          Uma proposta de encantar e ser refúgio para quem busca comodidade, bem-estar e sofisticação em um ambiente aconchegante. Além de poder conhecer a terra do sol: Fortaleza.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-black">
                          <Bed size={20} className="text-sienna" />
                          <span className="text-base">{room.beds}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-black">
                          <Bath size={20} className="text-sienna" />
                          <span className="text-base">
                            {room.bathrooms} banheiro{room.bathrooms > 1 ? "s" : ""}
                          </span>
                        </div>
                        {room.hasSuite && (
                          <div className="flex items-center space-x-3 text-black">
                            <Sofa size={20} className="text-sienna" />
                            <span className="text-base">Sala de estar</span>
                          </div>
                        )}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button asChild className="bg-sienna hover:bg-sienna/90 text-white px-8 py-3">
                          <Link href={`/quartos/${room.id}`}>Saiba Mais</Link>
                        </Button>
                        <Button asChild variant="outline" className="border-sienna text-sienna hover:bg-sienna hover:text-white px-8 py-3">
                          <Link href={room.reservationUrl} target="_blank" rel="noopener noreferrer">Reservar</Link>
                        </Button>
                      </div>
                    </div>

                    {/* Imagem */}
                    <div className={`relative ${isEven ? '' : 'lg:col-start-1'}`}>
                      <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src={room.image || "/placeholder.svg"}
                          alt={room.name}
                          width={600}
                          height={400}
                          className="w-full h-80 lg:h-96 object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-semibold text-black shadow-lg">
                          {room.price}/noite
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-sienna">Precisa de Ajuda para Escolher?</h2>
          <p className="text-lg text-black mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para ajudá-lo a encontrar a acomodação perfeita para sua estadia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-sienna hover:bg-sienna/90 text-white">
              <Link href="/contato">Falar com Especialista</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-sienna text-sienna hover:bg-sienna hover:text-white">
              <Link href="tel:+558534532000">Ligar Agora</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
