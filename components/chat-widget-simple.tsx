"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, X } from "lucide-react"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)

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
        <div className="fixed bottom-6 right-6 z-50 w-80 max-w-[calc(100vw-2rem)]">
          <Card className="bg-white shadow-2xl border-0 overflow-hidden h-96 flex flex-col">
            {/* Header */}
            <div className="bg-primary text-primary-foreground px-4 py-4 flex items-center justify-between flex-shrink-0">
              <h3 className="font-semibold text-lg">CARPPA HOTEL</h3>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X size={16} />
              </Button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 bg-gray-50 overflow-y-auto">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold text-sm">C</span>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm max-w-[85%]">
                  <p className="text-sm text-gray-800 mb-2">
                    Olá, bem vindo ao Carppa Hotel! Como posso ajudá-lo hoje?
                  </p>
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
                  →
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  )
}
