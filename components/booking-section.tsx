import { BookingForm } from "@/components/booking-form"

export function BookingSection() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4">
        <BookingForm />
      </div>
    </section>
  )
}
