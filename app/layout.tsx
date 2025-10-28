import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Suspense } from "react"
import { ChatWidget } from "@/components/chat-widget-simple"
import "./globals.css"

export const metadata: Metadata = {
  title: "Carppa Hotel - Conforto e Hospitalidade",
  description:
    "Experimente o melhor da hospitalidade no Carppa Hotel. Quartos confortáveis, localização privilegiada e atendimento excepcional em Fortaleza.",
  generator: "v0.app",
}
//teste
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <ChatWidget />
      </body>
    </html>
  )
}
