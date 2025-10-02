import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="footer" className="bg-soft-beige">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Hotel Information */}
          <div className="p-8">
            <div className="space-y-6">
              {/* Hotel Logo */}
              <div>
                <Image 
                  src="/images/carppa-logo.webp" 
                  alt="Carppa Hotel" 
                  width={200} 
                  height={80} 
                  className="h-16 w-auto" 
                />
              </div>

              {/* Hotel Description */}
              <div className="space-y-4 text-dark-gray">
                <p>
                  Hospede-se no coração da cidade e desfrute do melhor da Terra do Sol com muito conforto e modernidade.
                </p>
                <p>
                  Dá para curtir entre amigos, família ou casal. É uma mistura entre o regionalismo e o litoral, repleto de espaços e lugares fascinantes, e claro, um céu com tons alaranjados contemplativo para poder assistir ao pôr do sol na Praia de Iracema.
                </p>
              </div>

              {/* Tinto Hotel */}
              <div className="pt-4">
                <p className="text-sm text-dark-gray mb-2">Conheça também</p>
                <div>
                  <Image 
                    src="/images/tintto-logo.webp" 
                    alt="Tinto Hotel" 
                    width={120} 
                    height={40} 
                    className="h-10 w-auto" 
                  />
                </div>
              </div>

              {/* Links, Contact and Social Media */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                {/* Links Rápidos */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-sienna">Links Rápidos</h3>
                  <div className="space-y-2">
                    <Link href="/" className="block text-dark-gray hover:text-sienna transition-colors">
                      Início
                    </Link>
                    <Link href="/quartos" className="block text-dark-gray hover:text-sienna transition-colors">
                      Quartos
                    </Link>
                    <Link href="/sobre" className="block text-dark-gray hover:text-sienna transition-colors">
                      Sobre
                    </Link>
                    <Link href="/contato" className="block text-dark-gray hover:text-sienna transition-colors">
                      Contato
                    </Link>
                  </div>
                </div>

                {/* Contato */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-sienna">Contato</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <MapPin size={16} className="text-sienna" />
                      <span className="text-sm text-dark-gray">Av. Almirante Barroso, 701 - Praia de Iracema, Fortaleza - CE, 60060-440</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone size={16} className="text-sienna" />
                      <span className="text-sm text-dark-gray">(85) 3453-2000</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail size={16} className="text-sienna" />
                      <span className="text-sm text-dark-gray">contato@carppahotel.com</span>
                    </div>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-sienna">Redes Sociais</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-dark-gray hover:text-sienna transition-colors" aria-label="Facebook">
                      <Facebook size={20} />
                    </a>
                    <a href="https://www.instagram.com/carppahotel/" target="_blank" rel="noopener noreferrer" className="text-dark-gray hover:text-sienna transition-colors" aria-label="Instagram">
                      <Instagram size={20} />
                    </a>
                    <a href="#" className="text-dark-gray hover:text-sienna transition-colors" aria-label="Twitter">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="p-8">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-sienna uppercase">
                Contatos e Reservas
              </h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 border border-sienna rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-gray-50 text-dark-gray placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Seu email"
                    className="w-full px-4 py-3 border border-sienna rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-gray-50 text-dark-gray placeholder-gray-500"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Seu telefone"
                    className="w-full px-4 py-3 border border-sienna rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-gray-50 text-dark-gray placeholder-gray-500"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Mensagem"
                    rows={4}
                    className="w-full px-4 py-3 border border-sienna rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-gray-50 text-dark-gray placeholder-gray-500 resize-none"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 text-sienna border-sienna rounded focus:ring-sienna/20"
                  />
                  <label htmlFor="newsletter" className="text-sm text-dark-gray">
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