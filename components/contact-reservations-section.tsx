"use client"

import { useState } from "react"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactReservationsSection() {
  const [email, setEmail] = useState("")
  const [acceptMarketing, setAcceptMarketing] = useState(false)

  return (
    <section className="py-20 bg-amber-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            CONTATOS E RESERVAS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            {/* Redes Sociais */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light mb-6">Siga-nos</h3>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.instagram.com/carppahotel/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="tel:+558534532000" 
                  className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Phone size={24} />
                </a>
                <a 
                  href="mailto:reservas@carppahotel.com.br" 
                  className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            {/* Contatos */}
            <div className="space-y-6">
              <h3 className="text-2xl font-light mb-6">Contato</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center space-x-3">
                  <Instagram size={20} className="text-amber-300" />
                  <span>@carppahotel</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-amber-300" />
                  <span>+ 55 85 3453-2000</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={20} className="text-amber-300" />
                  <span>Central de Reservas: (85) 3085-5168</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-amber-300" />
                  <span>reservas@carppahotel.com.br</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={20} className="text-amber-300" />
                  <span>Av. Almirante Barroso, 701 - Praia de Iracema, Fortaleza - CE, 60060-440</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h3 className="text-2xl font-light mb-6">Receba nossas ofertas</h3>
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-amber-300 focus:outline-none"
                />
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg">
                  Inscrever-se
                </Button>
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <input
                  type="checkbox"
                  id="accept-marketing"
                  checked={acceptMarketing}
                  onChange={(e) => setAcceptMarketing(e.target.checked)}
                  className="rounded"
                />
                <label htmlFor="accept-marketing" className="text-sm text-amber-100">
                  Aceito receber materiais informativos
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
