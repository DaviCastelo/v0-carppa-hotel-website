import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function SobrePage() {
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
            backgroundImage: `url('/IMG_4990.jpg')`,
          }}
        >
          {/* Efeito azul similar à hero section */}
          <div className="absolute inset-0 bg-blue-500/30" />
        </div>

        {/* Title centralizado */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold uppercase tracking-wider text-white drop-shadow-lg">
            O Hotel
          </h1>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative w-full h-[60vh] md:h-[80vh] rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/ytcLQXljmNw?autoplay=1&loop=1&playlist=ytcLQXljmNw&mute=1&controls=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&cc_load_policy=0&fs=1&disablekb=1"
              title="Vídeo do Carppa Hotel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="title-carppa title-carppa-h2 text-center mb-16">
            Experiências
          </h2>
          
          <div className="space-y-20">
            {/* Praia Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <h3 className="title-carppa title-carppa-h3">
                  Praia de Iracema
                </h3>
                <p className="text-dark-gray leading-relaxed">
                  Desfrute de uma das praias mais famosas de Fortaleza, localizada a poucos minutos do nosso hotel. A Praia de Iracema oferece um cenário único com seu famoso pôr do sol, bares e restaurantes à beira-mar, e uma atmosfera vibrante que combina tradição e modernidade. Ideal para caminhadas, fotos inesquecíveis e momentos de relaxamento.
                </p>
              </div>
              <div className="relative h-80 lg:h-96 order-1 lg:order-2">
                <Image
                  src="https://carppahotel.com.br/wp-content/themes/stamina/assets/img/exp1.jpg"
                  alt="Praia de Iracema"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Sabores Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 lg:h-96">
                <Image
                  src="https://carppahotel.com.br/wp-content/themes/stamina/assets/img/exp2.jpg"
                  alt="Sabores do Nordeste"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="title-carppa title-carppa-h3">
                  Sabores do Nordeste
                </h3>
                <p className="text-dark-gray leading-relaxed">
                  A gastronomia nordestina possui sabores marcantes que encantam o Brasil inteiro e estes sabores estão presentes no nosso variado café da manhã, servido diariamente no Restaurante do Hotel. São temperos únicos, misturas inesperadas, pratos diversificados e novas interpretações da culinária que farão você se apaixonar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
