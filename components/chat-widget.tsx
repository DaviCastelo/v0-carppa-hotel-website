"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, X, Calendar, MapPin, Building, BookOpen, Send, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from "lucide-react"
import Link from "next/link"
import { rooms } from "@/lib/rooms-data"

type QuotationStep = 'initial' | 'dates' | 'roomType' | 'rooms' | 'adults' | 'children' | 'complete' | 'location' | 'support'

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [quotationStep, setQuotationStep] = useState<QuotationStep>('initial')
  const [quotationData, setQuotationData] = useState({
    checkIn: '',
    checkOut: '',
    roomType: '',
    rooms: 1,
    adults: 1,
    children: 0
  })
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [supportMessage, setSupportMessage] = useState('')

  const quickOptions = [
    {
      icon: Calendar,
      label: "Cotação",
      action: () => setQuotationStep('roomType')
    },
    {
      icon: MapPin,
      label: "Localização",
      action: () => setQuotationStep('location')
    },
    {
      icon: MessageCircle,
      label: "Falar com atendente",
      action: () => setQuotationStep('support')
    }
  ]

  const generateQuotationUrl = () => {
    // Encontrar o quarto selecionado nos dados
    const selectedRoom = rooms.find(room => room.id === quotationData.roomType)
    
    const baseUrl = selectedRoom?.reservationUrl || "https://app.otabuilder.com/carppahotel"
    
    // Converter datas do formato YYYY-MM-DD para DDMMYYYY
    const formatDateForUrl = (dateStr: string) => {
      const [year, month, day] = dateStr.split('-')
      return `${day}${month}${year}`
    }
    
    const params = new URLSearchParams({
      CheckIn: formatDateForUrl(quotationData.checkIn),
      CheckOut: formatDateForUrl(quotationData.checkOut),
      NRooms: quotationData.rooms.toString(),
      ad: quotationData.adults.toString(),
      ch: quotationData.children.toString(),
      lang: 'pt-BR',
      currencyId: '16',
      version: '4'
    })
    return `${baseUrl}&${params.toString()}`
  }

  const generateGoogleMapsUrl = () => {
    const hotelAddress = "Av. Almirante Barroso, 701 - Praia de Iracema, Fortaleza - CE, 60060-440"
    const encodedAddress = encodeURIComponent(hotelAddress)
    return `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`
  }

  const generateWhatsAppUrl = () => {
    const phoneNumber = "558534532000"
    const message = `Olá! Gostaria de falar com o atendimento do Carppa Hotel.\n\nResumo da minha solicitação:\n${supportMessage}`
    const encodedMessage = encodeURIComponent(message)
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('pt-BR', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric' 
    })
  }

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const isDateSelected = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    return quotationData.checkIn === dateStr || quotationData.checkOut === dateStr
  }

  const selectDate = (day: number) => {
    const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    
    if (!quotationData.checkIn) {
      setQuotationData(prev => ({ ...prev, checkIn: dateStr }))
    } else if (!quotationData.checkOut && dateStr > quotationData.checkIn) {
      setQuotationData(prev => ({ ...prev, checkOut: dateStr }))
      setQuotationStep('adults')
    }
  }

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const days = []

    // Dias vazios do início do mês
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className={isExpanded ? 'h-10' : 'h-8'}></div>)
    }

    // Dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = isDateSelected(day)
      days.push(
        <button
          key={day}
          onClick={() => selectDate(day)}
          className={`${isExpanded ? 'h-10 w-10' : 'h-8 w-8'} rounded-full text-sm hover:bg-secondary transition-colors ${
            isSelected ? 'bg-primary text-primary-foreground' : 'hover:text-black'
          }`}
        >
          {day}
        </button>
      )
    }

    return days
  }

  return (
    <>
      {/* Botão flutuante */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
            size="icon"
          >
            <MessageCircle size={24} />
          </Button>
        </div>
      )}

      {/* Widget de chat */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isExpanded 
            ? 'w-[600px] h-[700px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-2rem)]' 
            : 'w-80 max-w-[calc(100vw-2rem)]'
        }`}>
          <Card className="bg-white shadow-2xl border-0 overflow-hidden h-full flex flex-col">
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-4 py-4 flex items-center justify-between flex-shrink-0">
              <h3 className="font-semibold text-lg">CARPPA HOTEL</h3>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8"
                  onClick={() => setIsOpen(false)}
                >
                  <X size={16} />
                </Button>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
              {/* Avatar e mensagem */}
              <div className={`flex items-start space-x-3 ${isExpanded ? 'max-w-4xl' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">C</span>
                </div>
                <div className={`bg-white rounded-lg p-4 shadow-sm ${isExpanded ? 'max-w-[90%]' : 'max-w-[85%]'}`}>
                  {quotationStep === 'initial' && (
                    <>
                      <p className="text-sm text-gray-800 mb-2">
                        Olá, bem vindo ao Carppa Hotel! Sou uma assistente virtual e estou aqui 24h para te auxiliar no que for preciso 😊
                      </p>
                      <p className="text-sm text-gray-800 mb-4">
                        Pergunte-me alguma coisa, ou selecione uma das opções a seguir:
                      </p>
                      
                      {/* Opções rápidas */}
                      <div className="space-y-2 mb-3">
                        {quickOptions.map((option, index) => {
                          const IconComponent = option.icon
                          return (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              className="w-full text-xs h-9 justify-start bg-white hover:bg-secondary text-black hover:text-black border-gray-200"
                              onClick={option.action}
                            >
                              <IconComponent size={14} className="mr-2" />
                              {option.label}
                            </Button>
                          )
                        })}
                      </div>
                    </>
                  )}

                  {quotationStep === 'roomType' && (
                    <>
                      <p className="text-sm text-gray-800 mb-4">
                        Qual tipo de quarto você prefere?
                      </p>
                      <div className="space-y-2 mb-3">
                        {rooms.map((room) => (
                          <Button
                            key={room.id}
                            variant={quotationData.roomType === room.id ? "default" : "outline"}
                            size="sm"
                            onClick={() => {
                              setQuotationData(prev => ({ ...prev, roomType: room.id }))
                              setQuotationStep('rooms')
                            }}
                            className="w-full justify-start h-10"
                          >
                            <Building size={16} className="mr-2" />
                            <div className="text-left">
                              <div className="font-semibold">{room.name}</div>
                              <div className="text-xs text-gray-600">
                                R$ {room.price}/noite • {room.capacity} • {room.beds}
                              </div>
                            </div>
                          </Button>
                        ))}
                      </div>
                    </>
                  )}

                  {quotationStep === 'dates' && (
                    <>
                      <p className="text-sm text-gray-800 mb-4">
                        Perfeito! Agora escolha as datas de check-in e check-out:
                      </p>
                      
                      {/* Calendário */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-sm">
                            {currentMonth.toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
                          </h4>
                          <div className="flex space-x-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                              className="h-6 w-6 p-0"
                            >
                              <ChevronLeft size={14} />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                              className="h-6 w-6 p-0"
                            >
                              <ChevronRight size={14} />
                            </Button>
                          </div>
                        </div>
                        
                        <div className={`grid grid-cols-7 gap-1 text-xs text-center mb-2 ${isExpanded ? 'gap-2' : ''}`}>
                          {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                            <div key={day} className={`font-semibold text-gray-600 ${isExpanded ? 'h-8' : 'h-6'}`}>{day}</div>
                          ))}
                        </div>
                        
                        <div className={`grid grid-cols-7 gap-1 ${isExpanded ? 'gap-2' : ''}`}>
                          {renderCalendar()}
                        </div>
                      </div>

                      {quotationData.checkIn && quotationData.checkOut && (
                        <div className="text-xs text-gray-600 mb-3">
                          <p>Check-in: {formatDate(quotationData.checkIn)}</p>
                          <p>Check-out: {formatDate(quotationData.checkOut)}</p>
                        </div>
                      )}
                    </>
                  )}

                  {quotationStep === 'rooms' && (
                    <>
                      <p className="text-sm text-gray-800 mb-4">
                        Quantos quartos você precisa?
                      </p>
                      <div className="flex space-x-2 mb-3">
                        {[1, 2, 3, 4].map(num => (
                          <Button
                            key={num}
                            variant={quotationData.rooms === num ? "default" : "outline"}
                            size="sm"
                            onClick={() => {
                              setQuotationData(prev => ({ ...prev, rooms: num }))
                              setQuotationStep('dates')
                            }}
                            className="h-8 w-8"
                          >
                            {num}
                          </Button>
                        ))}
                      </div>
                    </>
                  )}

                  {quotationStep === 'adults' && (
                    <>
                      <p className="text-sm text-gray-800 mb-4">
                        Quantos adultos?
                      </p>
                      <div className="flex space-x-2 mb-3">
                        {[1, 2, 3, 4, 5, 6].map(num => (
                          <Button
                            key={num}
                            variant={quotationData.adults === num ? "default" : "outline"}
                            size="sm"
                            onClick={() => {
                              setQuotationData(prev => ({ ...prev, adults: num }))
                              setQuotationStep('children')
                            }}
                            className="h-8 w-8"
                          >
                            {num}
                          </Button>
                        ))}
                      </div>
                    </>
                  )}

                  {quotationStep === 'children' && (
                    <>
                      <p className="text-sm text-gray-800 mb-4">
                        Quantas crianças? (0-17 anos)
                      </p>
                      <div className="flex space-x-2 mb-3">
                        {[0, 1, 2, 3, 4].map(num => (
                          <Button
                            key={num}
                            variant={quotationData.children === num ? "default" : "outline"}
                            size="sm"
                            onClick={() => {
                              setQuotationData(prev => ({ ...prev, children: num }))
                              setQuotationStep('complete')
                            }}
                            className="h-8 w-8"
                          >
                            {num}
                          </Button>
                        ))}
                      </div>
                    </>
                  )}

                  {quotationStep === 'complete' && (
                    <>
                      <p className="text-sm text-gray-800 mb-4">
                        Perfeito! Aqui está o resumo da sua cotação:
                      </p>
                      
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tipo de Quarto:</span>
                            <span className="font-semibold">
                              {rooms.find(room => room.id === quotationData.roomType)?.name || 'Quarto selecionado'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Quantidade:</span>
                            <span className="font-semibold">{quotationData.rooms} quarto{quotationData.rooms > 1 ? 's' : ''}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Hóspedes:</span>
                            <span className="font-semibold">{quotationData.adults} adulto{quotationData.adults > 1 ? 's' : ''}{quotationData.children > 0 && ` + ${quotationData.children} criança${quotationData.children > 1 ? 's' : ''}`}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Check-in:</span>
                            <span className="font-semibold">{formatDate(quotationData.checkIn)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Check-out:</span>
                            <span className="font-semibold">{formatDate(quotationData.checkOut)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button
                        onClick={() => window.open(generateQuotationUrl(), '_blank')}
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        Ver Cotação Completa
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => {
                          setQuotationStep('initial')
                          setQuotationData({
                            checkIn: '',
                            checkOut: '',
                            roomType: '',
                            rooms: 1,
                            adults: 1,
                            children: 0
                          })
                        }}
                        className="w-full mt-2"
                      >
                        Nova Cotação
                      </Button>
                    </>
                  )}

                  {quotationStep === 'location' && (
                    <>
                      <p className="text-sm text-gray-800 mb-4">
                        Aqui está nossa localização:
                      </p>
                      
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="text-primary mt-1 flex-shrink-0" size={20} />
                          <div>
                            <h4 className="font-semibold text-sm text-gray-800 mb-2">Carppa Hotel</h4>
                            <p className="text-sm text-gray-700 leading-relaxed">
                              Av. Almirante Barroso, 701 - Praia de Iracema<br />
                              Fortaleza - CE, 60060-440
                            </p>
                            <p className="text-xs text-gray-500 mt-2">
                              📍 Próximo à Praia de Iracema
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Button
                          onClick={() => window.open(generateGoogleMapsUrl(), '_blank')}
                          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          <MapPin size={16} className="mr-2" />
                          Ir até lá
                        </Button>
                        
                        <Button
                          variant="outline"
                          onClick={() => setQuotationStep('initial')}
                          className="w-full"
                        >
                          ← Voltar
                        </Button>
                      </div>
                    </>
                  )}

                  {quotationStep === 'support' && (
                    <>
                      <p className="text-sm text-gray-800 mb-4">
                        Tudo bem, iremos transferir seu atendimento para nosso time. Por gentileza, poderia mandar um breve resumo do que se trata?
                      </p>
                      
                      <div className="space-y-3">
                        <textarea
                          value={supportMessage}
                          onChange={(e) => setSupportMessage(e.target.value)}
                          placeholder="Digite aqui o resumo da sua solicitação..."
                          className="w-full p-3 border border-gray-300 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                          rows={4}
                        />
                        
                        {supportMessage.trim() && (
                          <div className="space-y-2">
                            <Button
                              onClick={() => window.open(generateWhatsAppUrl(), '_blank')}
                              className="w-full bg-green-600 hover:bg-green-700 text-white"
                            >
                              <MessageCircle size={16} className="mr-2" />
                              Enviar para WhatsApp
                            </Button>
                            
                            <Button
                              variant="outline"
                              onClick={() => {
                                setSupportMessage('')
                                setQuotationStep('initial')
                              }}
                              className="w-full"
                            >
                              ← Voltar
                            </Button>
                          </div>
                        )}
                        
                        {!supportMessage.trim() && (
                          <Button
                            variant="outline"
                            onClick={() => setQuotationStep('initial')}
                            className="w-full"
                          >
                            ← Voltar
                          </Button>
                        )}
                      </div>
                    </>
                  )}
                  
                  <div className="text-xs text-gray-500 text-right">
                    {new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t flex-shrink-0">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Digite sua mensagem..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button
                  size="icon"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-9 w-9"
                >
                  <Send size={16} />
                </Button>
              </div>
            </div>

            {/* Footer */}
            <div className="px-4 py-2 bg-gray-100 text-center flex-shrink-0">
              <p className="text-xs text-gray-500">Powered by Omnibees</p>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
