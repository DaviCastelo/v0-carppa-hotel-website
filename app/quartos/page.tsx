import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { Bed, Users, Star } from "lucide-react"

const rooms = [
  {
    id: "suite-executiva",
    name: "Suíte Executiva",
    description: "Espaçosa suíte com vista panorâmica da cidade, ideal para executivos e viajantes de negócios.",
    price: "R$ 450",
    image: "/luxury-hotel-executive-suite-with-city-view.jpg",
    capacity: "2 pessoas",
    size: "45m²",
    amenities: ["Wi-Fi gratuito", "Ar condicionado", "Frigobar", 'TV 55"', "Banheira", "Varanda"],
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "quarto-standard",
    name: "Quarto Standard",
    description: "Confortável quarto com todas as comodidades essenciais para uma estadia agradável.",
    price: "R$ 280",
    image: "/comfortable-hotel-standard-room-with-modern-decor.jpg",
    capacity: "2 pessoas",
    size: "28m²",
    amenities: ["Wi-Fi gratuito", "Ar condicionado", "Frigobar", 'TV 42"', "Cofre"],
    rating: 4.5,
    reviews: 89,
  },
  {
    id: "suite-familiar",
    name: "Suíte Familiar",
    description: "Ampla suíte perfeita para famílias, com espaço adicional e comodidades especiais.",
    price: "R$ 380",
    image: "/spacious-family-hotel-suite-with-separate-living-a.jpg",
    capacity: "4 pessoas",
    size: "55m²",
    amenities: ["Wi-Fi gratuito", "Ar condicionado", "Frigobar", 'TV 50"', "Sofá-cama", "Varanda"],
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "quarto-deluxe",
    name: "Quarto Deluxe",
    description: "Quarto elegante com acabamentos premium e vista para o jardim do hotel.",
    price: "R$ 350",
    image: "/elegant-deluxe-hotel-room-with-garden-view-and-pre.jpg",
    capacity: "2 pessoas",
    size: "35m²",
    amenities: ["Wi-Fi gratuito", "Ar condicionado", "Frigobar", 'TV 50"', "Varanda", "Roupões"],
    rating: 4.6,
    reviews: 98,
  },
  {
    id: "suite-presidencial",
    name: "Suíte Presidencial",
    description: "Nossa suíte mais luxuosa com sala de estar separada, jacuzzi e serviço personalizado.",
    price: "R$ 750",
    image: "/luxury-presidential-hotel-suite-with-jacuzzi-and-s.jpg",
    capacity: "2 pessoas",
    size: "80m²",
    amenities: [
      "Wi-Fi gratuito",
      "Ar condicionado",
      "Frigobar",
      'TV 65"',
      "Jacuzzi",
      "Sala de estar",
      "Serviço de quarto 24h",
    ],
    rating: 4.9,
    reviews: 67,
  },
  {
    id: "quarto-economico",
    name: "Quarto Econômico",
    description: "Opção acessível sem abrir mão do conforto e qualidade do Carppa Hotel.",
    price: "R$ 180",
    image: "/comfortable-budget-hotel-room-with-essential-ameni.jpg",
    capacity: "2 pessoas",
    size: "22m²",
    amenities: ["Wi-Fi gratuito", "Ar condicionado", 'TV 32"', "Cofre"],
    rating: 4.3,
    reviews: 203,
  },
]

export default function QuartosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Spacing */}
      <div className="h-20"></div>

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
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-primary">
                    {room.price}/noite
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-primary">{room.name}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{room.rating}</span>
                      <span className="text-sm text-muted-foreground">({room.reviews})</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{room.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bed className="w-4 h-4" />
                      <span>{room.size}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-sm">Comodidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.slice(0, 3).map((amenity, index) => (
                        <span key={index} className="bg-muted text-muted-foreground px-2 py-1 rounded-full text-xs">
                          {amenity}
                        </span>
                      ))}
                      {room.amenities.length > 3 && (
                        <span className="text-xs text-muted-foreground">+{room.amenities.length - 3} mais</span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button asChild className="flex-1">
                      <Link href={`/quartos/${room.id}`}>Ver Detalhes</Link>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 bg-transparent">
                      <Link href={`/reserva?quarto=${room.id}`}>Reservar</Link>
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
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
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
    </div>
  )
}
