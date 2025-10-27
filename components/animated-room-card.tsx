'use client'

import { useScrollAnimation } from '@/lib/use-scroll-animation'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Bed, Users, Info, ChevronLeft, ChevronRight } from "lucide-react"
import { roomDetails } from "@/lib/rooms-data"
import { useState, useEffect } from "react"

interface Room {
  id: string
  name: string
  description?: string
  image?: string
  capacity: string
  beds: string
  bedOptions?: string
  reservationUrl: string
  amenities?: string[]
}

interface AnimatedRoomCardProps {
  room: Room
  index: number
}

export function AnimatedRoomCard({ room, index }: AnimatedRoomCardProps) {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
    triggerOnce: true
  })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const isEven = index % 2 === 0

  // Pegar as imagens do roomDetails
  const roomImages = roomDetails[room.id as keyof typeof roomDetails]?.images || [room.image || "/placeholder.svg"]

  // Auto-play do carrossel
  useEffect(() => {
    if (!isVisible || roomImages.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % roomImages.length)
    }, 4000) // Muda a cada 4 segundos

    return () => clearInterval(interval)
  }, [isVisible, roomImages.length])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % roomImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + roomImages.length) % roomImages.length)
  }

  return (
    <div 
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-5 gap-0 items-start transition-all duration-1200 ease-out ${
        isVisible 
          ? `opacity-100 transform translate-x-0` 
          : `opacity-0 transform ${isEven ? '-translate-x-12' : 'translate-x-12'}`
      }`}
    >
      {/* Carrossel de Imagens com animação independente */}
      <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'} lg:col-span-3 transition-all duration-1200 delay-400 ${
        isVisible 
          ? 'opacity-100 transform translate-x-0' 
          : `opacity-0 transform ${isEven ? '-translate-x-16' : 'translate-x-16'}`
      }`}>
        <div className="relative w-full overflow-hidden" style={{ height: 0, paddingBottom: '55%' }}>
          {/* Imagem atual */}
          <div className="absolute inset-0">
            <Image
              src={roomImages[currentImageIndex]}
              alt={`${room.name} - Foto ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-transform duration-500 ease-in-out"
              style={{ backgroundPosition: 'center', backgroundSize: 'cover' }}
            />
            
            {/* Overlay com controles */}
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-between px-4">
              <button
                onClick={prevImage}
                className="bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-colors duration-200"
                aria-label="Foto anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-colors duration-200"
                aria-label="Próxima foto"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Indicadores de posição */}
            {roomImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {roomImages.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => setCurrentImageIndex(imgIndex)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      imgIndex === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Ir para foto ${imgIndex + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Conteúdo com animação independente */}
      <div className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'} lg:col-span-2 transition-all duration-1200 delay-600 pl-6 pr-4 lg:pl-8 lg:pr-8 relative z-10 ${
        isVisible 
          ? 'opacity-100 transform translate-x-0' 
          : `opacity-0 transform ${isEven ? 'translate-x-16' : '-translate-x-16'}`
      }`}>
        <div>
          <h3 className="title-carppa title-carppa-h4 mb-3">{room.name.toUpperCase()}</h3>
          <div className="flex items-center space-x-2 text-dark-gray mb-4">
            <Users size={18} className="text-sienna" />
            <span className="text-base">Até {room.capacity}</span>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-dark-gray text-base leading-relaxed">
            {room.description || "Uma proposta de encantar e ser refúgio para quem busca comodidade, bem-estar e sofisticação em um ambiente aconchegante. Além de poder conhecer a terra do sol: Fortaleza."}
          </p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-dark-gray">
            <Bed size={18} className="text-sienna" />
            <span className="text-base">{room.beds}</span>
          </div>
          {room.bedOptions && (
            <div className="flex items-center space-x-2 text-dark-gray">
              <Info size={18} className="text-sienna" />
              <span className="text-base">{room.bedOptions}</span>
            </div>
          )}
        </div>


        <div className="flex gap-3">
          <Button asChild className="bg-transparent hover:bg-amber-50 text-amber-800 border border-amber-800 rounded-none px-8 py-3 font-medium uppercase text-base tracking-wide transition-all duration-300 hover:scale-105">
            <Link href={room.reservationUrl} target="_blank" rel="noopener noreferrer">Reservar</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
