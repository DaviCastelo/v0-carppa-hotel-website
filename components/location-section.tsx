import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail } from "lucide-react"

export function LocationSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossa Localização
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Venha nos conhecer em uma das melhores localizações de Fortaleza
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <Card className="border-amber-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-800">
                  <MapPin className="h-6 w-6" />
                  Endereço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg">
                  Av. Almirante Barroso, 701<br />
                  Praia de Iracema, Fortaleza - CE<br />
                  CEP: 60060-440
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-amber-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-800">
                  <Clock className="h-6 w-6" />
                  Horário de Funcionamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg">
                  Recepção: 24 horas<br />
                  Check-in: 14:00<br />
                  Check-out: 12:00
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-amber-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-amber-800">
                  <Phone className="h-6 w-6" />
                  Contato
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-lg">
                  <div className="space-y-2">
                    <p>Telefone: <a href="tel:+558534532000" className="text-primary hover:underline">(85) 3453-2000</a></p>
                    <p>WhatsApp: <a href="https://wa.me/558534532000" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(85) 3453-2000</a></p>
                    <p className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      contato@carppahotel.com.br
                    </p>
                  </div>
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Mapa */}
          <div className="relative">
            <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.123456789!2d-38.5234567!3d-3.7174567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74c3f0c1234567%3A0x1234567890abcdef!2sAv.%20Almirante%20Barroso%2C%20701%20-%20Praia%20de%20Iracema%2C%20Fortaleza%20-%20CE%2C%2060060-440!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
            
            {/* Marcador personalizado */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-amber-600 text-white p-3 rounded-full shadow-lg border-4 border-white">
                <MapPin size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
