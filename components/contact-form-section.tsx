"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactFormSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = encodeURIComponent(
      `Hola, soy ${name}. Mi teléfono es ${phone}. Estoy interesado/a en una valoración de implantes dentales.`
    )
    window.open(
      `https://wa.me/573235944931?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <section className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-lg px-4 lg:px-8">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Solicita tu valoración
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Completa tus datos y te contactamos por WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name" className="text-sm font-medium text-foreground">
                Nombre completo
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                Teléfono / Celular
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Tu número de celular"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="bg-background"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 text-base font-semibold w-full"
            >
              Enviar a WhatsApp
            </Button>
          </form>

          <div className="mt-4 flex flex-col items-center gap-1 text-xs text-muted-foreground">
            <span>Respuesta rápida</span>
            <span>Valoración personalizada</span>
            <span>Sin compromiso</span>
          </div>
        </div>
      </div>
    </section>
  )
}
