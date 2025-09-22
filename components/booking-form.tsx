"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Users, Bed, ChevronDown } from "lucide-react"

export function BookingForm() {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    roomType: 'standard-duplo',
    rooms: 1,
    adults: 1,
    children: 0
  })

  const generateBookingUrl = () => {
    // URLs específicas para cada tipo de quarto do Carppa Hotel
    const roomUrls = {
      'standard-duplo': 'https://book.omnibees.com/hotel/1393/room/33108?c=1159&q=1393',
      'standard-triplo': 'https://book.omnibees.com/hotel/1393/room/33109?c=1159&q=1393',
      'standard-quadruplo': 'https://book.omnibees.com/hotel/1393/room/62316?c=9354&q=1393'
    }
    
    const baseUrl = roomUrls[bookingData.roomType as keyof typeof roomUrls] || roomUrls['standard-duplo']
    
    // Converter datas do formato YYYY-MM-DD para DDMMYYYY
    const formatDateForUrl = (dateStr: string) => {
      const [year, month, day] = dateStr.split('-')
      return `${day}${month}${year}`
    }
    
    const params = new URLSearchParams({
      CheckIn: formatDateForUrl(bookingData.checkIn),
      CheckOut: formatDateForUrl(bookingData.checkOut),
      NRooms: bookingData.rooms.toString(),
      ad: bookingData.adults.toString(),
      ch: bookingData.children.toString(),
      lang: 'pt-BR',
      currencyId: '16',
      version: '4'
    })
    
    return `${baseUrl}&${params.toString()}`
  }

  const handleReserve = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      window.open(generateBookingUrl(), '_blank')
    }
  }

  return (
    <Card className="bg-white shadow-lg border-0 p-6 max-w-6xl mx-auto">
      <div className="flex flex-row gap-3 items-end">
        {/* Tipo de Quarto */}
        <div className="flex-1 min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de Quarto
          </label>
          <div className="relative">
            <select
              value={bookingData.roomType}
              onChange={(e) => setBookingData(prev => ({ ...prev, roomType: e.target.value }))}
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none h-12"
            >
              <option value="standard-duplo">Standard Duplo - R$ 240</option>
              <option value="standard-triplo">Standard Triplo - R$ 300</option>
              <option value="standard-quadruplo">Standard Quadruplo - R$ 294,40</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary pointer-events-none" size={16} />
          </div>
        </div>

        {/* Check-in */}
        <div className="flex-1 min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-in
          </label>
          <div className="relative">
            <input
              type="date"
              value={bookingData.checkIn}
              onChange={(e) => setBookingData(prev => ({ ...prev, checkIn: e.target.value }))}
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-12"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary" size={16} />
          </div>
        </div>

        {/* Check-out */}
        <div className="flex-1 min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Check-out
          </label>
          <div className="relative">
            <input
              type="date"
              value={bookingData.checkOut}
              onChange={(e) => setBookingData(prev => ({ ...prev, checkOut: e.target.value }))}
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-12"
            />
            <Calendar className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary" size={16} />
          </div>
        </div>

        {/* Quartos */}
        <div className="flex-1 min-w-0">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Quartos
          </label>
          <div className="relative">
            <select
              value={bookingData.rooms}
              onChange={(e) => setBookingData(prev => ({ ...prev, rooms: parseInt(e.target.value) }))}
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none h-12"
            >
              {[1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary pointer-events-none" size={16} />
          </div>
        </div>

        {/* Adultos */}
        <div className="flex-1 w-full lg:w-auto">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Adultos
          </label>
          <div className="relative">
            <select
              value={bookingData.adults}
              onChange={(e) => setBookingData(prev => ({ ...prev, adults: parseInt(e.target.value) }))}
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary pointer-events-none" size={16} />
          </div>
        </div>

        {/* Crianças */}
        <div className="flex-1 w-full lg:w-auto">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Crianças
          </label>
          <div className="relative">
            <select
              value={bookingData.children}
              onChange={(e) => setBookingData(prev => ({ ...prev, children: parseInt(e.target.value) }))}
              className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
            >
              {[0, 1, 2, 3, 4].map(num => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary pointer-events-none" size={16} />
          </div>
        </div>

        {/* Botão Reservar */}
        <div className="w-full lg:w-auto">
          <Button
            onClick={handleReserve}
            disabled={!bookingData.checkIn || !bookingData.checkOut}
            className="w-full lg:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-sm font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            RESERVAR
          </Button>
        </div>
      </div>

      {/* Informações adicionais */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-600">
          Wi-Fi gratuito • Ar condicionado • TV LCD • Cofre individual
        </p>
      </div>
    </Card>
  )
}
