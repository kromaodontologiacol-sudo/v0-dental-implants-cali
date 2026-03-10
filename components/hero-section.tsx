import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const WHATSAPP_URL = "https://wa.me/573235944931"

const benefits = [
  "Implantes sin dolor",
  "Planificación 100% digital",
  "Resultados naturales de por vida",
  "Financiación disponible en Cali",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-card pt-20 pb-20 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-primary)/0.05,transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative z-10">
            <span className="mb-3 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold tracking-wide text-primary uppercase sm:mb-4 sm:px-4 sm:py-1.5">
              Especialistas en Implantología
            </span>
            <h1 className="text-balance text-[1.75rem] font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl xl:text-6xl">
              Recupera tu sonrisa fija con{" "}
              <span className="text-primary">Implantes Dentales</span> de Alta
              Precisión en Cali
            </h1>
            <p className="mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
              Tecnología digital avanzada, cirugía guiada y tasas de éxito
              superiores al 97%. Implantes enfocados a durar toda la vida.
            </p>

            <ul className="mt-5 flex flex-col gap-2 sm:mt-6 sm:gap-3">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary sm:h-5 sm:w-5" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 text-sm font-semibold shadow-lg shadow-primary/20 sm:px-8 sm:text-base"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon />
                  Agendar valoración por WhatsApp
                </a>
              </Button>
            </div>
            <p className="mt-2 text-xs text-muted-foreground sm:mt-3">
              Respuesta rápida y personalizada. Sin compromiso.
            </p>
          </div>

          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="relative overflow-hidden rounded-xl shadow-2xl shadow-primary/10 sm:rounded-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2415%20%281%29.PNG-XaVPrssE2KesTT1yPPtqvkcNxlZn6u.png"
                alt="Caso real de implantes dentales: antes y después mostrando la transformación completa de la sonrisa"
                width={700}
                height={700}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-3 left-2 rounded-lg border border-border bg-card p-3 shadow-lg sm:-bottom-4 sm:-left-4 sm:rounded-xl sm:p-4 lg:-bottom-6 lg:-left-6">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 sm:h-12 sm:w-12">
                  <span className="text-base font-bold text-primary sm:text-xl">97%</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground sm:text-sm">Tasa de Éxito</p>
                  <p className="text-[10px] text-muted-foreground sm:text-xs">En implantes dentales</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatsappIcon() {
  return (
    <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
