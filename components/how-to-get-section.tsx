import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

export function HowToGetSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-amber-900 mb-8">
              Como chegar
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Conteúdo */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-light text-amber-900">
                  Carppa
                </h3>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hospede-se no coração da cidade e desfrute do melhor da Terra do Sol com muito conforto e modernidade.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dá para curtir entre amigos, família ou casal. É uma mistura entre o regionalismo e o litoral, repleto de espaços e lugares fascinantes, e claro, um céu com tons alaranjados contemplativo para poder assistir ao pôr do sol na Praia de Iracema.
                </p>
              </div>

              {/* Informações de Contato */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-semibold text-amber-900 mb-4">Informações de Contato</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-amber-600" size={20} />
                    <span className="text-gray-700">Av. Almirante Barroso, 701 - Praia de Iracema, Fortaleza - CE, 60060-440</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-amber-600" size={20} />
                    <span className="text-gray-700">(85) 3453-2000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-amber-600" size={20} />
                    <span className="text-gray-700">Central de Reservas: (85) 3085-5168</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-amber-600" size={20} />
                    <span className="text-gray-700">reservas@carppahotel.com.br</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagem */}
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/Recepção, corredores, etc/IMG_0285.jpg"
                  alt="Carppa Hotel - Interior e recepção"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Overlay com informações */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                <h4 className="font-semibold text-amber-900 mb-2">Localização Central</h4>
                <p className="text-sm text-gray-600">
                  No coração da Praia de Iracema, próximo às principais atrações
                </p>
              </div>
            </div>
          </div>

          {/* Parceiro Tintto */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 mb-4">Conheça também</p>
            <div className="inline-block">
              <Image
                src="/images/tintto-logo.webp"
                alt="Tintto"
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
