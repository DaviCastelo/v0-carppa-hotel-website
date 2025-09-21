import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Bed, Users, Star } from "lucide-react"

const rooms = [
  {
    id: "standard-duplo",
    name: "Standard Duplo",
    description: "Nossos apartamentos são totalmente preparados para descanso e comodidade, todos equipados com ar condicionado individual, telefone com linha direta, cofre, frigobar, internet wi-fi e TV LCD com canais por assinatura.",
    price: "R$ 240",
    image: "/modern-hotel-room-with-double-bed.jpg",
    capacity: "3 pessoas",
    size: "25m²",
    beds: "1 cama de casal",
    bathrooms: 1,
    hasSuite: false,
    amenities: [
      "Ar Condicionado",
      "Cofre", 
      "Internet Wireless",
      "Mini-Bar",
      "Telefone com linha direta",
      "TV LCD com canais por assinatura"
    ],
    rating: 4.5,
    reviews: 89,
    reservationUrl: "https://book.omnibees.com/hotel/1393/room/33108?c=1159&q=1393",
  },
  {
    id: "standard-triplo", 
    name: "Standard Triplo",
    description: "Nossos apartamentos são totalmente preparados para descanso e comodidade, todos equipados com ar condicionado individual, telefone com linha direta, cofre, frigobar, internet wi-fi e TV LCD com canais por assinatura.",
    price: "R$ 300",
    image: "/deluxe-hotel-room-with-double-bed-and-single-bed.jpg",
    capacity: "3 pessoas",
    size: "30m²", 
    beds: "1 cama de casal + 1 solteiro",
    bathrooms: 1,
    hasSuite: false,
    amenities: [
      "Ar Condicionado",
      "Cofre",
      "Internet Wireless", 
      "Mini-Bar",
      "Telefone com linha direta",
      "TV LCD com canais por assinatura"
    ],
    rating: 4.6,
    reviews: 112,
    reservationUrl: "https://book.omnibees.com/hotel/1393/room/33109?c=1159&q=1393",
  },
  {
    id: "standard-quadruplo",
    name: "Standard Quadruplo", 
    description: "Nossos apartamentos são totalmente preparados para descanso e comodidade, todos equipados com ar condicionado individual, telefone com linha direta, cofre, frigobar, internet wi-fi e TV LCD com canais por assinatura.",
    price: "R$ 294,40",
    image: "/family-hotel-room-with-multiple-beds.jpg",
    capacity: "4 pessoas",
    size: "35m²",
    beds: "2 camas de casal",
    bathrooms: 1,
    hasSuite: false,
    amenities: [
      "Ar Condicionado",
      "Cofre",
      "Internet Wireless",
      "Banheiro privado",
      "Telefone",
      "Apartamento para não Fumantes",
      "Mini-Bar",
      "TV LCD com canais por assinatura"
    ],
    rating: 4.7,
    reviews: 156,
    reservationUrl: "https://book.omnibees.com/hotel/1393/room/62316?c=9354&q=1393&NRooms=1&CheckIn=12032026&CheckOut=13032026&ad=1&ch=0&lang=pt-BR&currencyId=16&version=4",
  }
]

export default function QuartosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Header Spacing */}
      <div className="pt-20"></div>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={room.image || "/placeholder.svg"}
                    alt={room.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-black">
                    {room.price}/noite
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-black">{room.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{room.rating}</span>
                      <span className="text-sm text-black">({room.reviews})</span>
                    </div>
                  </div>

                  <p className="text-black mb-4 text-sm leading-relaxed">{room.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-black">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{room.beds}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Comodidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.slice(0, 3).map((amenity, index) => (
                        <span key={index} className="bg-muted text-black px-2 py-1 rounded-full text-xs">
                          {amenity}
                        </span>
                      ))}
                      {room.amenities.length > 3 && (
                        <span className="text-xs text-black">+{room.amenities.length - 3} mais</span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="flex-1">
                      <Link href={`/quartos/${room.id}`}>Ver Detalhes</Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 bg-transparent">
                      <Link href={room.reservationUrl} target="_blank" rel="noopener noreferrer">Reservar</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
              <Link href="tel:+5511999999999">Ligar Agora</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
