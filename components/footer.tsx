import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <Link href="/" className="block hover:text-secondary transition-colors">
                Início
              </Link>
              <Link href="/quartos" className="block hover:text-secondary transition-colors">
                Quartos
              </Link>
              <Link href="/sobre" className="block hover:text-secondary transition-colors">
                Sobre
              </Link>
              <Link href="/contato" className="block hover:text-secondary transition-colors">
                Contato
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} />
                <span className="text-primary-foreground">Av. Almirante Barroso, 701 - Praia de Iracema, Fortaleza - CE, 60060-440</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <span className="text-primary-foreground">(85) 3085-5168</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <span className="text-primary-foreground">contato@carppahotel.com</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p>&copy; 2024 Carppa Hotel. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
