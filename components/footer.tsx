import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content - Three Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Hotel Information */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Hotel Logo */}
              <div>
                <Image 
                  src="/images/carppa-logo.webp" 
                  alt="Carppa Hotel" 
                  width={300} 
                  height={120} 
                  className="h-24 w-auto" 
                />
              </div>

              {/* Hotel Description */}
              <div className="space-y-4 text-gray-600">
                <p>
                  Hospede-se no coração da cidade e desfrute do melhor da Terra do Sol com muito conforto e modernidade.
                </p>
                <p>
                  Dá para curtir entre amigos, família ou casal. É uma mistura entre o regionalismo e o litoral, repleto de espaços e lugares fascinantes, e claro, um céu com tons alaranjados contemplativo para poder assistir ao pôr do sol na Praia de Iracema.
                </p>
              </div>

              {/* Tinto Hotel */}
              <div className="pt-4">
                <p className="text-sm text-gray-600 mb-2">Conheça também</p>
                <div>
                  <Image 
                    src="/images/tintto-logo.webp" 
                    alt="Tinto Hotel" 
                    width={100} 
                    height={30} 
                    className="h-8 w-auto" 
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Contact Information */}
          <div className="p-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-sienna uppercase">
                Contatos e Reservas
              </h3>
              
              {/* Contact Information List */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Instagram size={20} className="text-sienna" />
                  <span className="text-sienna">@carppahotel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-sienna" />
                  <span className="text-sienna">Central de Reservas: (85) 3453-2000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-sienna" />
                  <span className="text-sienna">Recepção: (85) 3453-2000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-sienna" />
                  <span className="text-sienna">contato@carppahotel.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Contact Form */}
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 border border-sienna rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-white text-gray-700 placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full px-4 py-3 border border-sienna rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-white text-gray-700 placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Seu telefone"
                    className="w-full px-4 py-3 border border-sienna rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-white text-gray-700 placeholder-gray-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mensagem"
                    rows={4}
                    className="w-full px-4 py-3 border border-sienna rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-white text-gray-700 placeholder-gray-500 resize-none"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-sienna border-sienna rounded focus:ring-sienna/20"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600">
                    Aceito receber materiais informativos
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full bg-sienna text-white py-3 px-6 rounded-lg font-medium hover:bg-sienna/90 transition-colors"
                >
                  ENVIAR
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Address Bar */}
        <div className="border-t border-sienna mt-8 pt-4">
          <div className="text-center">
            <p className="text-sienna">Av. Almirante Barroso, 701 - Praia de Iracema, Fortaleza CE / Brasil</p>
          </div>
        </div>
      </div>
    </footer>
  )
}