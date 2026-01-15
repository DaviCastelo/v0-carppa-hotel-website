import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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

      <Footer />
    </main>
  )
}
