import { Clock, Waves, Heart, Utensils } from "lucide-react"
import Image from "next/image"

export function ServicesSection() {
  const services = [
    {
      icon: Clock,
      title: "Recepção",
      subtitle: "24 Horas",
      description: "",
      bgImage: "https://carppahotel.com.br/wp-content/themes/stamina/assets/img/saladetv.jpg"
    },
    {
      icon: Waves,
      title: "Piscina na",
      subtitle: "Cobertura",
      description: "",
      bgImage: "https://carppahotel.com.br/wp-content/themes/stamina/assets/img/piscina.jpg"
    },
    {
      icon: Heart,
      title: "Ampla",
      subtitle: "Recepção",
      description: "",
      bgImage: "https://carppahotel.com.br/wp-content/themes/stamina/assets/img/recepcao.jpg"
    },
    {
      icon: Utensils,
      title: "Restaurante com",
      subtitle: "Café da Manhã",
      description: "",
      bgImage: "https://carppahotel.com.br/wp-content/themes/stamina/assets/img/cafedamanha.jpg"
    }
  ]

  return (
    <section className="pt-48 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="title-carppa title-carppa-h2 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-dark-gray max-w-2xl mx-auto">
            Oferecemos uma experiência completa com serviços de qualidade para tornar sua estadia inesquecível
          </p>
        </div>
      </div>

      {/* Full-width services section */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
               <div
                 key={index}
                 className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group h-[400px] md:h-[500px] hover:scale-105 cursor-pointer"
               >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={service.bgImage}
                    alt={`${service.title} ${service.subtitle}`}
                    fill
                    className="object-cover brightness-125 contrast-90 group-hover:brightness-100 group-hover:contrast-100 group-hover:scale-110 transition-all duration-700 ease-out"
                  />
                   {/* Efeito azul similar à hero section */}
                   <div className="absolute inset-0 bg-blue-500/50 group-hover:bg-blue-500/70 transition-all duration-700 ease-out"></div>
                   {/* White blur overlay for subtle effect */}
                   <div className="absolute inset-0 bg-white/40 group-hover:bg-white/5 transition-all duration-700 ease-out"></div>
                </div>

                 {/* Content */}
                 <div className="relative z-10 p-6 text-center h-full flex flex-col justify-center">
                   {/* Icon - White color by default */}
                   <div className="inline-flex items-center justify-center w-20 h-20 md:w-20 md:h-20 mb-6 md:mb-6 group-hover:scale-110 transition-all duration-500 ease-out mx-auto">
                     <IconComponent 
                       size={56} 
                       className="text-white drop-shadow-lg transition-all duration-500 ease-out md:hidden" 
                       strokeWidth={1.5} 
                     />
                     <IconComponent 
                       size={48} 
                       className="text-white drop-shadow-lg transition-all duration-500 ease-out hidden md:block" 
                       strokeWidth={1.5} 
                     />
                   </div>

                   {/* Title and Subtitle - White text by default */}
                   <div className="mb-4">
                     <h3 className="text-2xl md:text-2xl font-bold text-white mb-1 drop-shadow-lg transition-all duration-500 ease-out">
                       {service.title}
                     </h3>
                     <h4 className="text-xl md:text-xl font-semibold text-white drop-shadow-lg transition-all duration-500 ease-out">
                       {service.subtitle}
                     </h4>
                     {service.description && (
                       <p className="text-lg md:text-lg font-semibold text-white drop-shadow-lg mt-1 transition-all duration-500 ease-out">
                         {service.description}
                       </p>
                     )}
                   </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out"></div>
              </div>
            )
          })}
        </div>
      </div>

    </section>
  )
}
