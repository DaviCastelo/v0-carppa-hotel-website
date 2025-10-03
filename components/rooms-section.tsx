import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Users, Bed, Info } from "lucide-react"
import { rooms } from "@/lib/rooms-data"

export function RoomsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-sienna mb-4">Nossas Acomodações</h2>
          <p className="text-dark-gray text-lg max-w-2xl mx-auto">
            Escolha o quarto perfeito para sua estadia. Todos os nossos quartos oferecem conforto, elegância e todas as
            comodidades necessárias.
          </p>
        </div>

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
                      Uma proposta de encantar e ser refúgio para quem busca comodidade, bem-estar e sofisticação em um ambiente aconchegante. Além de poder conhecer a terra do sol: Fortaleza.
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
  )
}
