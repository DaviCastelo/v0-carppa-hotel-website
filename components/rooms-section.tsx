import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Users, Bed, Bath, Sofa } from "lucide-react"

const rooms = [
  {
    id: "standard",
    name: "Quarto Standard",
    capacity: 2,
    beds: "1 cama de casal",
    bathrooms: 1,
    hasSuite: false,
    price: "180,00",
    image: "/modern-hotel-room-with-double-bed.jpg",
  },
  {
    id: "deluxe",
    name: "Quarto Deluxe",
    capacity: 3,
    beds: "1 cama de casal + 1 solteiro",
    bathrooms: 1,
    hasSuite: false,
    price: "250,00",
    image: "/deluxe-hotel-room-with-double-bed-and-single-bed.jpg",
  },
  {
    id: "suite",
    name: "Suíte Master",
    capacity: 4,
    beds: "1 cama king size",
    bathrooms: 2,
    hasSuite: true,
    price: "380,00",
    image: "/luxury-hotel-suite-with-king-bed-and-living-area.jpg",
  },
  {
    id: "family",
    name: "Quarto Família",
    capacity: 5,
    beds: "1 cama de casal + 2 solteiros",
    bathrooms: 2,
    hasSuite: false,
    price: "320,00",
    image: "/family-hotel-room-with-multiple-beds.jpg",
  },
]

export function RoomsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Nossos Quartos</h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Escolha o quarto perfeito para sua estadia. Todos os nossos quartos oferecem conforto, elegância e todas as
            comodidades necessárias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
                <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
                  A partir de R$ {room.price}
                </Badge>
              </div>

              <CardHeader>
                <CardTitle className="text-primary">{room.name}</CardTitle>
              </CardHeader>

              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-muted">
                    <Users size={18} />
                    <span>Até {room.capacity} pessoas</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted">
                    <Bed size={18} />
                    <span>{room.beds}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted">
                    <Bath size={18} />
                    <span>
                      {room.bathrooms} banheiro{room.bathrooms > 1 ? "s" : ""}
                    </span>
                  </div>
                  {room.hasSuite && (
                    <div className="flex items-center space-x-2 text-muted">
                      <Sofa size={18} />
                      <span>Sala de estar</span>
                    </div>
                  )}
                </div>
              </CardContent>

              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href={`/quartos/${room.id}`}>Saiba Mais</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
