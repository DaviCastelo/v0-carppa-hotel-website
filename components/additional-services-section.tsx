import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, MapPin, Clock, CreditCard, Shield, Headphones } from "lucide-react"

const additionalServices = [
  {
    icon: Phone,
    title: "Atendimento 24h",
    description: "Recepção e concierge disponíveis 24 horas por dia"
  },
  {
    icon: MapPin,
    title: "Localização Privilegiada",
    description: "Próximo aos principais pontos turísticos de Fortaleza"
  },
  {
    icon: Clock,
    title: "Check-in Flexível",
    description: "Check-in antecipado e check-out tardio disponíveis"
  },
  {
    icon: CreditCard,
    title: "Pagamento Facilitado",
    description: "Aceitamos todos os cartões e formas de pagamento"
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Sistema de segurança 24h e câmeras de monitoramento"
  },
  {
    icon: Headphones,
    title: "Suporte Multilíngue",
    description: "Atendimento em português, inglês e espanhol"
  }
]

export function AdditionalServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Serviços Adicionais
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cuidamos de todos os detalhes para garantir sua comodidade e satisfação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-amber-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-amber-50 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-amber-700" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
