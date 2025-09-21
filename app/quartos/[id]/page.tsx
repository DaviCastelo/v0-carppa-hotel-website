import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Users, Bed, Bath, Sofa, Wifi, Coffee, Tv, AirVent, Shield, Phone, X } from "lucide-react"
import { notFound } from "next/navigation"
import { roomDetails } from "@/lib/rooms-data"

const amenityIcons = {
  "Ar Condicionado": AirVent,
  "Cofre": Shield,
  "Internet Wireless": Wifi,
  "Mini-Bar": Coffee,
  "Telefone com linha direta": Phone,
  "TV LCD com canais por assinatura": Tv,
  "Banheiro privado": Bath,
  "Telefone": Phone,
  "Apartamento para não Fumantes": X,
}

export default function RoomDetailPage({ params }: { params: { id: string } }) {
  const room = roomDetails[params.id as keyof typeof roomDetails]

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
              <h1 className="text-4xl font-bold text-black mb-6">{room.name}</h1>

              <p className="text-black text-lg leading-relaxed mb-8">{room.description}</p>

              {/* Room Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center space-x-2 text-black">
                  <Users size={20} />
                  <span>Até {room.capacity} pessoas</span>
                </div>
                <div className="flex items-center space-x-2 text-black">
                  <Bed size={20} />
                  <span>{room.beds}</span>
                </div>
                <div className="flex items-center space-x-2 text-black">
                  <Bath size={20} />
                  <span>
                    {room.bathrooms} banheiro{room.bathrooms > 1 ? "s" : ""}
                  </span>
                </div>
                {room.hasSuite && (
                  <div className="flex items-center space-x-2 text-black">
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
                <h3 className="text-2xl font-semibold text-black mb-4">Comodidades</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {room.amenities.map((amenity, index) => {
                    const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons] || Coffee
                    return (
                      <div key={index} className="flex items-center space-x-3 text-black">
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
                  <div className="text-black">por noite</div>
                </div>

                <Button
                  asChild
                  size="lg"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground mb-4"
                >
                  <Link href={room.reservationUrl} target="_blank" rel="noopener noreferrer">FAZER RESERVA</Link>
                </Button>

                <div className="text-center text-sm text-black">
                  <p className="text-black">✓ Cancelamento gratuito até 24h antes</p>
                  <p className="text-black">✓ Café da manhã incluído</p>
                  <p className="text-black">✓ Wi-Fi gratuito</p>
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
