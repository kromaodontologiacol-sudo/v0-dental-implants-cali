import Image from "next/image"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/573235944931"

const testimonials = [
  {
    name: "Monica",
    location: "Google Reviews - Hace 5 días",
    initial: "M",
    quote:
      "Excelente servicio y excelente atención de parte del médico Weider y del periodoncista Alejandro, llegué con un problema periodontal y gracias a Dios y a ellos todo está saliendo bien. Dios los bendiga, los recomiendo mucho.",
    rating: 5,
    isNew: true,
  },
  {
    name: "Samrey Cardenas",
    location: "Google Reviews - Hace 2 meses",
    initial: "S",
    quote:
      "Excelente servicio, súper recomendados, me voy feliz!",
    rating: 5,
    isNew: false,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tu6lIydiYFrLGmKVOyYtYRfBxmiMiG.png"
              alt="Reseñas de Google del Dr. Weider Gutierrez Odontologo - 5.0 estrellas con 22 opiniones"
              width={500}
              height={300}
              className="rounded-lg"
            />
          </div>
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
            Reseñas verificadas de Google
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            5.0 Estrellas - 22 Opiniones
          </h2>
          <p className="mt-2 text-muted-foreground">
            Lo que dicen nuestros pacientes en Google
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                {t.isNew && (
                  <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                    NUEVA
                  </span>
                )}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                {t.quote}
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold">
                  {t.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base font-semibold"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Quiero resultados como ellos
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
