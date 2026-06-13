import { ShieldCheck, Sparkles, Timer, Bone } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/573225213238"

const benefits = [
  {
    icon: Bone,
    title: "Previene pérdida ósea",
    description: "Mantiene la estructura de tu mandíbula intacta.",
  },
  {
    icon: ShieldCheck,
    title: "No desgasta dientes vecinos",
    description: "A diferencia de puentes convencionales, preserva tus dientes.",
  },
  {
    icon: Sparkles,
    title: "Solución fija y estética",
    description: "Se ve y se siente como un diente natural.",
  },
  {
    icon: Timer,
    title: "Diseñados para toda la vida",
    description: "Nuestros implantes están enfocados a durar toda la vida con el cuidado adecuado.",
  },
]

export function EducationSection() {
  return (
    <section className="bg-card py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-2 inline-block text-xs font-semibold tracking-wide text-primary uppercase sm:mb-3 sm:text-sm">
              Conoce el procedimiento
            </span>
            <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              {"¿Qué es un implante dental y por qué es importante?"}
            </h2>
            <p className="mt-3 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg">
              Un implante dental reemplaza la raíz del diente perdido, preserva
              el hueso y permite colocar una corona fija, funcional y estética.
              Es la solución más avanzada en odontología moderna, enfocada a durar toda la vida.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base font-semibold"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar mi evaluación en Cali
              </a>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl border border-border bg-background p-5 transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-foreground">
                  {b.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
