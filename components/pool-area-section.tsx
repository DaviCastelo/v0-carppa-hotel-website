import Image from "next/image"

export function PoolAreaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Imagem */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Piscina/IMG_0952.jpg"
                  alt="Área de lazer com piscina na cobertura do Carppa Hotel"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Overlay com informações */}
              <div className="absolute top-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h3 className="font-semibold text-amber-900 mb-2">Piscina na Cobertura</h3>
                <p className="text-sm text-gray-600">
                  Aproveite o clima nordestino com vista panorâmica
                </p>
              </div>
            </div>

            {/* Conteúdo */}
            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-light text-amber-900 leading-tight">
                Área de lazer com piscina<br />
                <span className="text-amber-600">na cobertura do hotel</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Fortaleza é a terra do sol e você vai amar o nosso clima o ano todo. No Carppa Hotel conte com uma área de lazer com piscina para você se divertir com amigos e familiares e aproveitar o clima que é a cara do nordeste.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Piscina com vista panorâmica</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Área de lazer completa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Clima nordestino o ano todo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-700">Perfeito para famílias e amigos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
