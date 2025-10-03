'use client'

import { useForm } from "react-hook-form"
import { useState } from "react"

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  aceitoNewsletter: boolean;
}

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('nome', { required: 'Nome é obrigatório' })}
          type="text"
          placeholder="Seu nome"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-white text-gray-700 placeholder-gray-500 ${
            errors.nome ? 'border-red-500' : 'border-sienna'
          }`}
        />
        {errors.nome && (
          <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>
        )}
      </div>
      
      <div>
        <input
          {...register('email', { 
            required: 'Email é obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido'
            }
          })}
          type="email"
          placeholder="Seu email"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-white text-gray-700 placeholder-gray-500 ${
            errors.email ? 'border-red-500' : 'border-sienna'
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <input
          {...register('telefone', { required: 'Telefone é obrigatório' })}
          type="tel"
          placeholder="Seu telefone"
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-white text-gray-700 placeholder-gray-500 ${
            errors.telefone ? 'border-red-500' : 'border-sienna'
          }`}
        />
        {errors.telefone && (
          <p className="text-red-500 text-sm mt-1">{errors.telefone.message}</p>
        )}
      </div>
      
      <div>
        <textarea
          {...register('mensagem', { required: 'Mensagem é obrigatória' })}
          placeholder="Mensagem"
          rows={4}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-sienna/20 bg-white text-gray-700 placeholder-gray-500 resize-none ${
            errors.mensagem ? 'border-red-500' : 'border-sienna'
          }`}
        />
        {errors.mensagem && (
          <p className="text-red-500 text-sm mt-1">{errors.mensagem.message}</p>
        )}
      </div>
      
      <div className="flex items-center space-x-2">
        <input
          {...register('aceitoNewsletter')}
          type="checkbox"
          id="newsletter"
          className="w-4 h-4 text-sienna border-sienna rounded focus:ring-sienna/20"
        />
        <label htmlFor="newsletter" className="text-sm text-gray-600">
          Aceito receber materiais informativos
        </label>
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Mensagem enviada com sucesso! Entraremos em contato em breve.
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          Erro ao enviar mensagem. Tente novamente mais tarde.
        </div>
      )}
      
      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
          isLoading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-sienna hover:bg-sienna/90'
        } text-white`}
      >
        {isLoading ? 'ENVIANDO...' : 'ENVIAR'}
      </button>
    </form>
  )
}
