import Image from "next/image"

export function LocationHighlightSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div className="space-y-8">
              <h2 className="title-carppa text-4xl md:text-5xl">
                NA MELHOR LOCALIZAÇÃO DA<br />
                <span className="text-amber-600">PRAIA DE IRACEMA</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                O Carppa Hotel está localizado no coração do bairro da Praia de Iracema, um dos bairros mais boêmios e divertidos de Fortaleza. Você vai se encantar com as diversas opções de lazer e entretenimento a poucos minutos do hotel. Conheça às melhores atrações turísticas de Fortaleza: Ponte Metálica, Centro Cultural Dragão do Mar, casas de show de humor, bares, restaurantes e muito mais.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="bg-amber-50 px-4 py-2 rounded-full">
                  <span className="text-amber-800 font-medium">Ponte Metálica</span>
                </div>
                <div className="bg-amber-50 px-4 py-2 rounded-full">
                  <span className="text-amber-800 font-medium">Dragão do Mar</span>
                </div>
                <div className="bg-amber-50 px-4 py-2 rounded-full">
                  <span className="text-amber-800 font-medium">Bares e Restaurantes</span>
                </div>
                <div className="bg-amber-50 px-4 py-2 rounded-full">
                  <span className="text-amber-800 font-medium">Casas de Humor</span>
                </div>
              </div>
            </div>

            {/* Imagem */}
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Recepção, corredores, etc/IMG_0152.jpg"
                  alt="Carppa Hotel - Recepção e área comum"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Overlay com informações */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-amber-900 mb-2">Localização Privilegiada</h3>
                <p className="text-sm text-gray-600">
                  A poucos passos das principais atrações turísticas de Fortaleza
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
