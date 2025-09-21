import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Users, Bed, Bath, Sofa, Wifi, Coffee, Tv, AirVent, Shield } from "lucide-react"
import { notFound } from "next/navigation"

const rooms = {
  standard: {
    name: "Quarto Standard",
    capacity: 2,
    beds: "1 cama de casal",
    bathrooms: 1,
    hasSuite: false,
    price: "180,00",
    description:
      "Nosso quarto standard oferece todo o conforto necessário para uma estadia agradável. Decorado com elegância e equipado com todas as comodidades modernas.",
    images: ["/modern-hotel-room-with-double-bed-and-elegant-deco.jpg", "/hotel-room-bathroom-with-modern-fixtures.jpg", "/hotel-room-work-desk-and-seating-area.jpg"],
    amenities: ["Wi-Fi gratuito", "TV a cabo", "Ar condicionado", "Frigobar", "Cofre", "Café/chá cortesia"],
  },
  deluxe: {
    name: "Quarto Deluxe",
    capacity: 3,
    beds: "1 cama de casal + 1 solteiro",
    bathrooms: 1,
    hasSuite: false,
    price: "250,00",
    description:
      "O quarto deluxe proporciona mais espaço e conforto, ideal para famílias pequenas ou viajantes que desejam um pouco mais de luxo durante sua estadia.",
    images: ["/deluxe-hotel-room-with-double-bed-and-single-bed.jpg", "/spacious-hotel-room-with-seating-area.jpg", "/modern-hotel-bathroom-with-premium-fixtures.jpg"],
    amenities: [
      "Wi-Fi gratuito",
      "TV a cabo",
      "Ar condicionado",
      "Frigobar",
      "Cofre",
      "Café/chá cortesia",
      "Roupões",
      "Produtos de banho premium",
    ],
  },
  suite: {
    name: "Suíte Master",
    capacity: 4,
    beds: "1 cama king size",
    bathrooms: 2,
    hasSuite: true,
    price: "380,00",
    description:
      "Nossa suíte master é o ápice do luxo e conforto. Com sala de estar separada e dois banheiros, oferece privacidade e sofisticação incomparáveis.",
    images: ["/luxury-hotel-suite-with-king-bed-and-elegant-decor.jpg", "/hotel-suite-living-room-with-comfortable-seating.jpg", "/luxury-hotel-jacuzzi-bathroom.png"],
    amenities: [
      "Wi-Fi gratuito",
      "TV a cabo",
      "Ar condicionado",
      "Frigobar",
      "Cofre",
      "Café/chá cortesia",
      "Roupões",
      "Produtos de banho premium",
      "Sala de estar",
      "Banheira de hidromassagem",
      "Serviço de quarto 24h",
    ],
  },
  family: {
    name: "Quarto Família",
    capacity: 5,
    beds: "1 cama de casal + 2 solteiros",
    bathrooms: 2,
    hasSuite: false,
    price: "320,00",
    description:
      "Especialmente projetado para famílias, este quarto oferece espaço amplo e comodidades pensadas para garantir o conforto de todos os membros da família.",
    images: ["/family-hotel-room-with-multiple-beds-and-spacious-.jpg", "/family-hotel-room-with-children-s-area-and-games.jpg", "/family-hotel-room-bathroom-with-double-sinks.jpg"],
    amenities: [
      "Wi-Fi gratuito",
      "TV a cabo",
      "Ar condicionado",
      "Frigobar",
      "Cofre",
      "Café/chá cortesia",
      "Área infantil",
      "Jogos e entretenimento",
      "Berço disponível",
    ],
  },
}

const amenityIcons = {
  "Wi-Fi gratuito": Wifi,
  "TV a cabo": Tv,
  "Ar condicionado": AirVent,
  Frigobar: Coffee,
  Cofre: Shield,
  "Café/chá cortesia": Coffee,
  Roupões: Shield,
  "Produtos de banho premium": Bath,
  "Sala de estar": Sofa,
  "Banheira de hidromassagem": Bath,
  "Serviço de quarto 24h": Coffee,
  "Área infantil": Users,
  "Jogos e entretenimento": Tv,
  "Berço disponível": Bed,
}

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  const room = rooms[params.id as keyof typeof rooms]

  if (!room) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />

      <div className="pt-20">
        {/* Hero Image */}
        <div className="relative h-96">
          <Image src={room.images[0] || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-8 left-8">
            <Badge className="bg-secondary text-secondary-foreground text-lg px-4 py-2">
              A partir de R$ {room.price}
            </Badge>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h1 className="text-4xl font-bold text-primary mb-6">{room.name}</h1>

              <p className="text-muted text-lg leading-relaxed mb-8">{room.description}</p>

              {/* Room Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center space-x-2 text-muted">
                  <Users size={20} />
                  <span>Até {room.capacity} pessoas</span>
                </div>
                <div className="flex items-center space-x-2 text-muted">
                  <Bed size={20} />
                  <span>{room.beds}</span>
                </div>
                <div className="flex items-center space-x-2 text-muted">
                  <Bath size={20} />
                  <span>
                    {room.bathrooms} banheiro{room.bathrooms > 1 ? "s" : ""}
                  </span>
                </div>
                {room.hasSuite && (
                  <div className="flex items-center space-x-2 text-muted">
                    <Sofa size={20} />
                    <span>Sala de estar</span>
                  </div>
                )}
              </div>

              {/* Image Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {room.images.slice(1).map((image, index) => (
                  <Image
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${room.name} - Imagem ${index + 2}`}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-md w-full h-64 object-cover"
                  />
                ))}
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4">Comodidades</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {room.amenities.map((amenity, index) => {
                    const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || Coffee
                    return (
                      <div key={index} className="flex items-center space-x-3 text-muted">
                        <IconComponent size={18} className="text-secondary" />
                        <span>{amenity}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 rounded-lg shadow-lg sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">R$ {room.price}</div>
                  <div className="text-muted">por noite</div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground mb-4"
                >
                  <Link href="/reserva">FAZER RESERVA</Link>
                </Button>

                <div className="text-center text-sm text-muted">
                  <p>✓ Cancelamento gratuito até 24h antes</p>
                  <p>✓ Café da manhã incluído</p>
                  <p>✓ Wi-Fi gratuito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
