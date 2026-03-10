import {
  Award,
  MonitorSmartphone,
  ScanLine,
  Box,
  BadgeCheck,
  TrendingUp,
  HeartHandshake,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/573235944931"

const features = [
  { icon: Award, text: "Especialistas en Implantología Oral" },
  { icon: MonitorSmartphone, text: "Cirugía guiada digital" },
  { icon: ScanLine, text: "Escáner intraoral (sin impresiones incómodas)" },
  { icon: Box, text: "Planificación 3D de alta precisión" },
  { icon: BadgeCheck, text: "Implantes de marcas reconocidas mundialmente" },
  { icon: TrendingUp, text: "Alta tasa de éxito clínico comprobada" },
  { icon: HeartHandshake, text: "Seguimiento postoperatorio personalizado" },
]

const badges = [
  "Tecnología 3D",
  "Alta Precisión",
  "Resultados Naturales",
  "Atención Personalizada",
]

export function DifferentiatorsSection() {
  return (
    <section id="diferenciadores" className="bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-3 inline-block text-sm font-semibold tracking-wide text-primary uppercase">
            Nuestra diferencia
          </span>
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            {"¿Por qué hacerlo con nosotros en Cali?"}
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.text}
              className="flex items-start gap-4 rounded-xl border border-border bg-background p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <p className="text-sm font-medium leading-relaxed text-foreground">
                {f.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-xs font-semibold tracking-wide text-accent-foreground"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base font-semibold"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Agendar cita especializada en Cali
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
