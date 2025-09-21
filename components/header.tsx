"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/carppa-logo.png" alt="Carppa Hotel" width={120} height={40} className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-secondary transition-colors">
              Início
            </Link>
            <Link href="/quartos" className="hover:text-secondary transition-colors">
              Quartos
            </Link>
            <Link href="/sobre" className="hover:text-secondary transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="hover:text-secondary transition-colors">
              Contato
            </Link>
            <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full px-6">
              <Link href="/quartos">Fazer Reserva</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/" className="hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>
                Início
              </Link>
              <Link
                href="/quartos"
                className="hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Quartos
              </Link>
              <Link
                href="/sobre"
                className="hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="/contato"
                className="hover:text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Button
                asChild
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full w-fit"
              >
                <Link href="/quartos" onClick={() => setIsMenuOpen(false)}>
                  Fazer Reserva
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
