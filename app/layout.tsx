import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ChatWidget } from "@/components/chat-widget"
import "./globals.css"

export const metadata: Metadata = {
  title: "Carppa Hotel - Conforto e Hospitalidade",
  description:
    "Experimente o melhor da hospitalidade no Carppa Hotel. Quartos confortáveis, localização privilegiada e atendimento excepcional.",
  generator: "v0.app",
}

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
        <Analytics />
      </body>
    </html>
  )
}
