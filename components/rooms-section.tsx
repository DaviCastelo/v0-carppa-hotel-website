import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Users, Bed, Info } from "lucide-react"
import { rooms } from "@/lib/rooms-data"
import { AnimatedRoomCard } from "@/components/animated-room-card"

export function RoomsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="title-carppa title-carppa-h2 mb-4">Nossas Acomodações</h2>
          <p className="text-dark-gray text-lg max-w-2xl mx-auto">
            Escolha o quarto perfeito para sua estadia. Todos os nossos quartos oferecem conforto, elegância e todas as
            comodidades necessárias.
          </p>
        </div>

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
  )
}
