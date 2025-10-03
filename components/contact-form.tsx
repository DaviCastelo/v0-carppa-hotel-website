"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  acceptNewsletter: boolean
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    acceptNewsletter: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Validar campos obrigatórios
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Por favor, preencha todos os campos obrigatórios.')
      }

      // Validar email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formData.email)) {
        throw new Error('Por favor, insira um email válido.')
      }

      // Enviar email usando EmailJS ou uma API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'contato@carppahotel.com',
          subject: `Nova mensagem de contato - ${formData.name}`,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          acceptNewsletter: formData.acceptNewsletter
        })
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem. Tente novamente.')
      }

      setSubmitStatus('success')
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        acceptNewsletter: false
      })
    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Seu nome"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-sienna rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-white text-gray-700 placeholder-gray-500"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Seu email"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-sienna rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-white text-gray-700 placeholder-gray-500"
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          placeholder="Seu telefone"
          value={formData.phone}
          onChange={handleInputChange}
          className="w-full px-4 py-3 border border-sienna rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-white text-gray-700 placeholder-gray-500"
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="Mensagem"
          rows={4}
          value={formData.message}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 border border-sienna rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-white text-gray-700 placeholder-gray-500 resize-none"
        />
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="newsletter"
          name="acceptNewsletter"
          checked={formData.acceptNewsletter}
          onChange={handleInputChange}
          className="w-4 h-4 text-sienna border-sienna rounded focus:ring-sienna/20"
        />
        <label htmlFor="newsletter" className="text-sm text-gray-600">
          Aceito receber materiais informativos
        </label>
      </div>
      
      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
          Erro ao enviar mensagem. Tente novamente ou entre em contato por telefone.
        </div>
      )}
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-sienna text-white py-3 px-6 rounded-lg font-medium hover:bg-sienna/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'ENVIAR'}
      </button>
    </form>
  )
}
