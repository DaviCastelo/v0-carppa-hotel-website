import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Bed, Users, Star, Info } from "lucide-react"
import { rooms } from "@/lib/rooms-data"
import { AnimatedRoomCard } from "@/components/animated-room-card"

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
            backgroundImage: `url('/IMG_5211.jpg')`,
          }}
        />
      </section>

      {/* Rooms List */}
      <section className="py-16">
        <div className="container mx-auto px-4">

          <div className="space-y-16">
            {rooms.map((room, index) => (
              <AnimatedRoomCard 
                key={room.id} 
                room={room} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="title-carppa title-carppa-h2 mb-4">Precisa de Ajuda para Escolher?</h2>
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
