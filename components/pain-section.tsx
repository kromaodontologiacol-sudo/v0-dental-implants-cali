import { Frown, Bone, CircleOff, MessageCircleWarning } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/573181898143"

const painPoints = [
  {
    icon: Frown,
    text: "Dificultad para masticar tus alimentos favoritos",
  },
  {
    icon: Bone,
    text: "Pérdida ósea progresiva que afecta tu rostro",
  },
  {
    icon: CircleOff,
    text: "Prótesis removibles incómodas e inseguras",
  },
  {
    icon: MessageCircleWarning,
    text: "Inseguridad al hablar o reír frente a otros",
  },
]

export function PainSection() {
  return (
    <section className="bg-secondary py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            {"¿Te falta un diente y sientes que afecta tu seguridad al sonreír?"}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
            Miles de personas en Cali enfrentan estos problemas a diario. La
            buena noticia es que tienen solución.
          </p>
        </div>

        <div className="mt-8 grid gap-4 grid-cols-2 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {painPoints.map((point) => (
            <div
              key={point.text}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-4 text-center transition-shadow hover:shadow-md sm:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 transition-colors group-hover:bg-primary/15 sm:h-14 sm:w-14">
                <point.icon className="h-5 w-5 text-primary sm:h-7 sm:w-7" />
              </div>
              <p className="mt-3 text-xs font-medium leading-relaxed text-foreground sm:mt-4 sm:text-sm">
                {point.text}
              </p>
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
              Recuperar mi sonrisa en Cali
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
