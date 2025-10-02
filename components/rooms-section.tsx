import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Users, Bed, Bath, Sofa, Star } from "lucide-react"
import { rooms } from "@/lib/rooms-data"

export function RoomsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Nossos Quartos</h2>
          <p className="text-black text-lg max-w-2xl mx-auto">
            Escolha o quarto perfeito para sua estadia. Todos os nossos quartos oferecem conforto, elegância e todas as
            comodidades necessárias.
          </p>
        </div>

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

                    {/* Comodidades principais */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-black mb-2">Comodidades inclusas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {room.amenities.slice(0, 4).map((amenity, idx) => (
                          <span key={idx} className="bg-amber-50 text-amber-800 text-xs px-2 py-1 rounded-full">
                            {amenity}
                          </span>
                        ))}
                        {room.amenities.length > 4 && (
                          <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                            +{room.amenities.length - 4} mais
                          </span>
                        )}
                      </div>
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
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">{room.price}/noite</div>
                          {room.originalPrice && (
                            <div className="text-xs text-gray-500 line-through">{room.originalPrice}</div>
                          )}
                        </div>
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
  )
}
