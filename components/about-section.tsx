import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <Image
              src="/elegant-hotel-lobby-with-comfortable-seating.jpg"
              alt="Interior do Carppa Hotel"
              width={800}
              height={600}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Sobre o Carppa Hotel</h2>
            <div className="space-y-4 text-muted text-lg leading-relaxed">
              <p>
                O Carppa Hotel oferece uma experiência única de hospitalidade, combinando conforto moderno com a
                calorosa tradição brasileira.
              </p>
              <p>
                Localizado em uma posição privilegiada, nosso hotel proporciona fácil acesso às principais atrações da
                cidade, mantendo um ambiente tranquilo e acolhedor para nossos hóspedes.
              </p>
              <p>
                Desfrute de quartos elegantemente decorados, um café da manhã excepcional e um atendimento personalizado
                que fará sua estadia inesquecível.
              </p>
              <p>
                Nossa equipe está sempre pronta para tornar sua visita uma experiência memorável, cuidando de cada
                detalhe com carinho e profissionalismo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
