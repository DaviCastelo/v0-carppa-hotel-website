'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Users, Bed, Info } from 'lucide-react'

interface Room {
  id: string
  name: string
  description?: string
  image?: string
  capacity: number
  beds: string
  bedOptions?: string
  reservationUrl: string
}

interface AnimatedRoomCardProps {
  room: Room
  index: number
}

export function AnimatedRoomCard({ room, index }: AnimatedRoomCardProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: false
  })

  const isEven = index % 2 === 0

  return (
    <div 
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center transition-all duration-700 ease-out ${
        isVisible 
          ? `opacity-100 transform translate-x-0` 
          : `opacity-0 transform ${isEven ? '-translate-x-12' : 'translate-x-12'}`
      } scroll-animate-delay-${(index % 5) * 100}`}
    >
      {/* Room Image */}
      <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'} transition-all duration-700 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-6'
      }`}>
        <Image
          src={room.image || "/placeholder.svg"}
          alt={room.name}
          width={600}
          height={400}
          className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105 rounded-lg shadow-lg"
        />
      </div>

      {/* Room Information */}
      <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} transition-all duration-700 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-6'
      }`}>
        <div>
          <h3 className="title-carppa title-carppa-h3 mb-2">{room.name.toUpperCase()}</h3>
          <div className="flex items-center space-x-2 text-dark-gray mb-4">
            <Users size={20} className="text-sienna" />
            <span className="text-lg">Até {room.capacity} pessoas</span>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-dark-gray text-lg leading-relaxed">
            {room.description || "Uma proposta de encantar e ser refúgio para quem busca comodidade, bem-estar e sofisticação em um ambiente aconchegante. Além de poder conhecer a terra do sol: Fortaleza."}
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
          <Button asChild className="bg-transparent hover:bg-amber-50 text-amber-800 border border-amber-800 rounded-none px-8 py-3 font-medium uppercase text-base tracking-wide transition-all duration-300 hover:scale-105">
            <Link href={room.reservationUrl} target="_blank" rel="noopener noreferrer">Reservar</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
