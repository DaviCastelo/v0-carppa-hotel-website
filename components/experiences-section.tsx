import Image from "next/image"

export function ExperiencesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="title-carppa title-carppa-h2 mb-8">
              Experiências
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Praia */}
            <div className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/images/IMG_5052.jpg"
                  alt="Praia de Iracema - Pôr do sol"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">Praia</h3>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="title-carppa title-carppa-h4 mb-4">
                  Viva a Praia de Iracema
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Além da Praia de Iracema possuir a melhor vista do pôr do sol da cidade em sua orla, também contempla a Av. Beira Mar, o píer, o aterro, a clássica feira de artesanato, o espigão da Rui Barbosa, casas de humor, museus, bares, restaurantes e muito mais.
                </p>
              </div>
            </div>

            {/* Sabores */}
            <div className="group">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src="/images/Recepção, corredores, etc/IMG_0287.jpg"
                  alt="Restaurante do Carppa Hotel - Café da manhã"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">Sabores</h3>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="title-carppa title-carppa-h4 mb-4">
                  Sabores do Nordeste
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  A gastronomia nordestina possui sabores marcantes que encantam o Brasil inteiro e estes sabores estão presentes no nosso variado café da manhã, servido diariamente no Restaurante do Hotel. São temperos únicos, misturas inesperadas, pratos diversificados e novas interpretações da culinária que farão você se apaixonar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
