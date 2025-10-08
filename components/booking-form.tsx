"use client"

import { useEffect, useRef } from "react"

export function BookingForm() {
  const widgetInitialized = useRef(false)

  useEffect(() => {
    // Evitar inicialização dupla
    if (widgetInitialized.current) return

    // Verificar se o script já foi carregado
    const existingScript = document.querySelector('script[src="https://app.otabuilder.com/static/js/widget.js"]')
    if (existingScript) return

    // Função para carregar o script do Otabuilder
    const loadJS = (url: string, location: HTMLElement) => {
      const scriptTag = document.createElement('script')
      scriptTag.src = url
      scriptTag.crossOrigin = 'anonymous'
      scriptTag.defer = true
      scriptTag.async = true
      location.appendChild(scriptTag)
    }

    // Função para inicializar o widget do Otabuilder
    const initOtabuilderWidget = (storefrontId: string, elementId: string, orientation: string) => { 
      const _k = '_OTABUILDER_EMBEDDED_SEARCH_INIT_'
      let loaded = false
      const _i = (initSearchForm: any) => {
        if (!loaded) {
          loaded = true
          const element = document.getElementById(elementId)
          if (element) {
            // Limpar conteúdo anterior se existir
            element.innerHTML = ''
            initSearchForm(element, {
              storefrontId: storefrontId,
              orientation: orientation,
            })
          }
        }
      }
      if ((window as any)[_k]) {
        _i((window as any)[_k])
      } else {
        const listener = (e: any) => {
          _i(e.detail.initSearchForm)
        }
        document.addEventListener('otabuilder-search-ready', listener)
      }
    }

    // Marcar como inicializado
    widgetInitialized.current = true

    // Inicializar o widget com o storefrontId do Carppa Hotel
    initOtabuilderWidget(
      'DzNFAJY6GSKK-AikkxX6u', // storefrontId do Carppa Hotel
      'otabuilder-widget', // widget container
      'HORIZONTAL' // orientation
    )
    
    // Carregar o script do widget
    loadJS(
      'https://app.otabuilder.com/static/js/widget.js', // widget Js Url
      document.body // script tag parent
    )
  }, [])

  return (
    <div className="max-w-6xl mx-auto">
      {/* Container principal com fundo e sombra */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/20 p-6 lg:p-8">
        {/* Título do formulário */}
        <div className="text-center mb-6">
          <h2 className="title-carppa title-carppa-h2 mb-2">
            Reserve sua estadia
          </h2>
          <p className="text-gray-600 text-sm lg:text-base">
            Encontre as melhores ofertas para sua hospedagem no Carppa Hotel
          </p>
        </div>
        
        {/* Widget do Otabuilder */}
        <div id="otabuilder-widget" className="min-h-[80px] flex items-center justify-center">
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-amber-600"></div>
            <span>Carregando formulário de reserva...</span>
          </div>
        </div>
        
        {/* Informações promocionais */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center space-x-4 text-sm text-gray-600 bg-amber-50 rounded-full px-4 py-2">
            <span className="flex items-center">
              <span className="w-2 h-2 bg-amber-600 rounded-full mr-2"></span>
              Café da manhã incluso
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
              Wi-Fi gratuito
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 bg-amber-700 rounded-full mr-2"></span>
              Estacionamento gratuito
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
